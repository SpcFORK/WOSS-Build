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


function getOrMkeDir(dir: string): Promise<string> {
  return fsPromises.access(dir)
    .then(() => dir)
    .catch(async () => {
      const dirPath = join(process.cwd(), dir);
      await fsPromises.mkdir(dirPath, { recursive: true });
      return dirPath;
    });
}


function dirContents(dir: string) {
  return fsPromises.readdir(dir)
    .then((files) => files.map((file) => join(dir, file)));
}


function isDir(file: string) {
  return fsPromises.stat(file).then((stat) => stat.isDirectory());
}

// ---

async function build_(dir: string, plat: OptsPlat) {
  const contents = await dirContents(dir);

  for (const file of contents) {
    const isdir = await isDir(file);

    if (isdir) {
      await build_(file, plat);
    }

    else {
      // File is split like so; <name>.<type>.<ext>
      const split = file.split('.');
      const name = split[0];
      const type = split[1];
      const ext = split[2];

      let lfType: OptsType = 'object';

      if (!ext || !type) {
        continue;
      }

      /*
      Essentially, the file extention determines the base of your object,
        - .ob.<?> -> cased within {}
        - .cl.<?> -> cased within a class
        - .af.<?> -> cased within an async function
        - .sf.<?> -> cased within a sync function
      */

      if (type === 'cl') {
        lfType = 'class';
      } else if (type === 'sf') {
        lfType = 'function';
      } else if (type === 'af') {
        lfType = 'async';
      }

      const ws = new WOSScript({
        type: lfType,
        platform: plat,
      });

      let script = await readFile(file, 'utf8');
      const parsed = ws.parse(script);

      // Save in build folder
      const buildDir = await getOrMkeDir(join(process.cwd(), 'build'));
      const buildFile = join(buildDir, `${name}.${type}.wosb.${ext}`);

      await writeFile(buildFile, parsed);
    }
  }
}

// ---

const buildCommand = {
  command: 'build',
  describe: 'Build the project',
  handler: async (argv: any) => {
    const buildDir = argv.buildDir || 'dist';
    const actualDirLoc = join(__dirname, '..', buildDir);
    const actualDir = await getOrMkeDir(actualDirLoc);
    const srcLoc = join(__dirname, '..', buildDir);
    const src = await getOrMkeDir(actualDirLoc);

    console.log(green(`Building ${srcLoc} into ${buildDir}...`));

    { // Do.
      try {
        await build_(src, argv.buildPlat || 'neut');
      }

      catch (err) {
        console.log(yellow(`Error: ${err}`));
      }

      finally {
        console.log(green('Done!'));
      }
    }

  },
};

const cleanCommand = {
  command: 'clean',
  describe: 'Clean the build output',
  handler: async (argv: any) => {
    const outputPath = path.join(__dirname, argv.buildDir || 'dist');
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
      default: 'dist'
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