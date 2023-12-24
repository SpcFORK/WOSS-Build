import { WOSScript } from '../woss/WOSScript';
import './types'

import { promises as fsPromises } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

import { rimraf } from 'rimraf';
import glob from 'glob';
import path from 'path';
import yargs from 'yargs';
import { green, yellow } from 'colors';

const { readFile, writeFile } = fsPromises;

console.log(WOSScript)

function getOrMkeDir(dir: string): Promise<string> {
  return fsPromises.access(dir)
    .then(() => dir)
    .catch(async () => {
      const dirPath = dir
      await fsPromises.mkdir(dirPath, { recursive: true });
      return dirPath;
    });
}


function getOrMkeFile(filePath: string): Promise<string> {
  return fsPromises.access(filePath)
    .then(() => filePath)
    .catch(async () => {
      await fsPromises.writeFile(filePath, '');
      return filePath;
    });
}


function dirContents(dir: string) {
  return fsPromises.readdir(dir)
    .then((files) => files.map((file) => dir + '/' + file));
}


function isDir(file: string) {
  return fsPromises.stat(file).then((stat) => stat.isDirectory());
}

// ---

async function build_(dir: string, plat: OptsPlat, actualDirLoc: string) {
  const contents = await dirContents(dir)

  for (const file of contents) {
    const isdir = await isDir(file);

    console.log(
      green(`Now on ${file}`)
    )

    if (isdir) {
      await build_(join(dir, file), plat, join(actualDirLoc, file));
    } else {
      const split = file.split('.');

      if (split.length != 3) continue
      
      const name = split[0];
      const type = split[1];
      const ext = split[2];

      let lfType: OptsType = 'object';

      if (!ext || !type) {
        continue;
      }

      if (type === 'cl') {
        lfType = 'class';
      } else if (type === 'sf') {
        lfType = 'function';
      } else if (type === 'af') {
        lfType = 'async';
      }


      console.log(
        green([
          `\n${file} is:`,
          `  ${type} (${ext})`,
          `  -> ${name}.${plat}.${lfType}.js`
        ].join('\n'))
      )

      
      const ws = new WOSScript({
        type: lfType,
        platform: plat,
      });

      
      var script = ''
      try {
        console.log(
          yellow([
            `Trying to compile ${name.split('/').pop()}... (${actualDirLoc})`,
            `  -> ${name}.${plat}.${lfType}.js`
          ].join('\n'))
        )
        script = await readFile(file, 'utf8');
      } catch {
        console.log(
          yellow([
            `Failed to compile ${name.split('/').pop()}...`,
            `  -> ${name}.${plat}.${lfType}.js`

            ].join('\n'))
        )
      }

      finally {
        console.time(green(`Compiled ${name.split('/').pop()}`))
      }
      
      const parsed = ws.parse(script);
      
      const buildFilePath = join(actualDirLoc, `${name.split('/').pop()}.${plat}.${lfType}.wosb.${ext}`)      

      await getOrMkeFile(buildFilePath);
      await writeFile(buildFilePath, parsed);
    }
  }
}

// ---

const buildCommand = {
  command: 'build',
  describe: 'Build the project',
  handler: async (argv: any) => {
    const buildDir = argv.buildDir || 'wosdist';
    const actualDir = await getOrMkeDir(buildDir);
    const srcLoc = join(__dirname, '..', 'wosb');
    const src = await getOrMkeDir(buildDir);

    console.log(green(`Building ${srcLoc} into ${buildDir}...`));

    { // Do.
      try {
        await build_(srcLoc, argv.buildPlat || 'neut', buildDir);
      }

      catch (err) {
        console.log(yellow(`Error: ${err}`));
      }

      finally {
        console.log(green('Done!'));
      }
    }

    process.exit(0);

  },
};

const cleanCommand = {
  command: 'clean',
  describe: 'Clean the build output',
  handler: async (argv: any) => {
    const outputPath = path.join(__dirname, argv.buildDir || 'wosb');
    await rimraf(outputPath, {
      preserveRoot: true,
    });
    console.log(green(`Cleaned ${outputPath}...`));
  },
};

// ---

// If no args, display Intro
if (process.argv.length === 2) {
  console.log(
    '\n'
    + (
      `
Welcome to ${yellow("WOSBUILD")}!

This is a tool for building ${yellow("WOSS")} scripts into JS.
      `
        .trim()
    )
    + '\n\n'
  )

  // Display help
  yargs.showHelp();
  process.exit(0);
}


else {

  yargs
    .option('buildDir', {
      describe: 'Directory to build into',
      type: 'string',
      default: process.cwd() + '/wosdist'
    })
    .option('buildPlat', {
      describe: 'Platform to build into',
      type: 'string',
      default: 'neut'
    })
    .command(buildCommand)
    .command(cleanCommand)
    .demandCommand()
    .help()
    .argv;

}

// ---