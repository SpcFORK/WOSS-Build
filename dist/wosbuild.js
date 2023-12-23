"use strict";
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __commonJS2 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// woss/WOSScript.js
var require_WOSScript = __commonJS2({
  "woss/WOSScript.js"(exports, module2) {
    "use strict";
    var module = { exports: {} };
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var require_Gradule_web = __commonJS({
      "src/Gradule-web.js"(exports2, module22) {
        "use strict";
        var Preset = (() => {
          const presets = {
            kye_meh: ["#7350b3", "#2ebf91"],
            wiretap: ["#8A2387", "#E94057", "#F27121"],
            aquatic: ["#00C9FF", "#92FE9D"],
            martini: ["#FDFC47", "#24FE41"],
            amethyst: ["#9D50BB", "#6E48AA"],
            dance_to_forget: ["#FF4E50", "#F9D423"],
            instagram: ["#833ab4", "#fd1d1d", "#fcb045"],
            pastel: ["#74ebd5", "#74ecd5"],
            retro: [
              "#3f51b1",
              "#5a55ae",
              "#7b5fac",
              "#8f6aae",
              "#a86aa4",
              "#cc6b8e",
              "#f18271",
              "#f3a469",
              "#f7c978"
            ],
            cherryblossoms: ["#FBD3E9", "#BB377D"],
            candy: ["#D3959B", "#BFE6BA"],
            nelson: ["#f2709c", "#ff9472"],
            kyoto: ["#c21500", "#ffc500"],
            wedding_day_blues: ["#40E0D0", "#FF8C00", "#FF0080"]
          };
          class Preset2 {
            static $ = function() {
              let o = {};
              for (let preset2 in presets) {
                let p = presets[preset2];
                o[preset2] = new Preset2(p);
              }
              return o;
            }();
            constructor(colorArr) {
              this.colorArr = colorArr.map((color) => this.convertHexToRGB(color));
            }
            static beautify(string, colorArr, bold = false, italic = false) {
              const presetInstance = new Preset2(colorArr);
              return presetInstance.applyColors(string, bold, italic);
            }
            static beautifyE(string, colorArr, bold = false, italic = false) {
              const presetInstance = new Preset2(colorArr);
              return presetInstance.applyColorsEscaped(string, bold, italic);
            }
            convertHexToRGB(hexColor) {
              if (typeof hexColor === "string" && hexColor.startsWith("#")) {
                const color = hexColor.slice(1);
                return {
                  r: parseInt(color.slice(0, 2), 16),
                  g: parseInt(color.slice(2, 4), 16),
                  b: parseInt(color.slice(4, 6), 16)
                };
              }
              return hexColor;
            }
            applyColors(string, bold = false, italic = false) {
              let { colorArr } = this;
              const length = string.length;
              const colorStopsCount = colorArr.length;
              const sectionLength = Math.floor(length / (colorStopsCount - 1));
              let finalStr = "";
              if (bold)
                finalStr += "\x1B[1m";
              if (italic)
                finalStr += "\x1B[3m";
              let index = 0;
              let { r, g, b } = colorArr[0];
              for (let i = 1; i < colorStopsCount; i++) {
                for (let j = 0; j < sectionLength && index < length; j++, index++) {
                  finalStr += `\x1B[38;2;${r};${g};${b}m${string[index]}`;
                  r += Math.round((colorArr[i].r - colorArr[i - 1].r) / sectionLength);
                  g += Math.round((colorArr[i].g - colorArr[i - 1].g) / sectionLength);
                  b += Math.round((colorArr[i].b - colorArr[i - 1].b) / sectionLength);
                }
              }
              finalStr += `\x1B[38;2;${r};${g};${b}m${string.substring(index)}`;
              if (italic)
                finalStr += "\x1B[23m";
              finalStr += "\x1B[0m";
              return finalStr;
            }
            applyColorsEscaped(string, bold = false, italic = false) {
              let { colorArr } = this;
              const length = string.length;
              const colorStopsCount = colorArr.length;
              const sectionLength = Math.floor(length / (colorStopsCount - 1));
              let finalStr = "";
              if (bold)
                finalStr += "\\x1B[1m";
              if (italic)
                finalStr += "\\x1B[3m";
              let index = 0;
              let { r, g, b } = colorArr[0];
              for (let i = 1; i < colorStopsCount; i++) {
                for (let j = 0; j < sectionLength && index < length; j++, index++) {
                  finalStr += `\\x1B[38;2;${r};${g};${b}m${string[index]}`;
                  r += Math.round((colorArr[i].r - colorArr[i - 1].r) / sectionLength);
                  g += Math.round((colorArr[i].g - colorArr[i - 1].g) / sectionLength);
                  b += Math.round((colorArr[i].b - colorArr[i - 1].b) / sectionLength);
                }
              }
              finalStr += `\\x1B[38;2;${r};${g};${b}m${string.substring(index)}`;
              if (italic)
                finalStr += "\\x1B[23m";
              finalStr += "\\x1B[0m";
              return finalStr;
            }
            print(string, bold = false, italic = false) {
              console.log(Preset2.beautify(string, this.colorArr, bold, italic));
            }
            printE(string, bold = false, italic = false) {
              console.log(Preset2.beautifyE(string, this.colorArr, bold, italic));
            }
            printStyled(string, styles, bold = false, italic = false) {
              console.log("%c" + Preset2.beautify(string, this.colorArr, bold, italic), styles);
            }
            static input(question, colorArr, bold = false, italic = false) {
              return new Promise((resolve) => {
                const beautifiedQuestion = Preset2.beautify(question, colorArr, bold, italic);
                const answer = prompt(beautifiedQuestion);
                resolve(answer);
              });
            }
          }
          return Object.assign(Preset2, presets);
        })();
        var print = (string, colorArr, bold = false, italic = false) => {
          new Preset(colorArr).print(string, bold, italic);
        };
        var printE = (string, colorArr, bold = false, italic = false) => {
          new Preset(colorArr).printE(string, bold, italic);
        };
        var printWithStyles = (string, colorArr, styles, bold = false, italic = false) => {
          new Preset(colorArr).printStyled(string, styles, bold, italic);
        };
        var input = Preset.input;
        var beautify2 = Preset.beautify;
        var _exp_ = { print, printE, printWithStyles, input, beautify: beautify2, preset: Preset };
        if (typeof module22 !== "undefined") {
          module22.exports = _exp_;
        } else if (typeof window !== "undefined") {
          window.gradule = _exp_;
        }
      }
    });
    var WOSScript_exports = {};
    __export(WOSScript_exports, {
      default: () => WOSScript_default
    });
    module.exports = __toCommonJS(WOSScript_exports);
    var Gd = __toESM(require_Gradule_web());
    var WOSScript = class {
      opts = {
        platform: "web",
        type: "object"
      };
      constructor(opts2) {
        this.upd(opts2);
      }
      upd(opts2) {
        if (opts2)
          this.opts = { ...this.opts, ...opts2 };
      }
      parse(filestr, opts2) {
        this.upd(opts2);
        let mode = this.opts.type || "object";
        if (mode === "sync")
          mode = "function";
        let groups = this.abstract(filestr, mode);
        return groups;
      }
      abstract(filestr, type = "object") {
        let RGheader = /^\/\*\s*@WOS\s*([^*]+)\s*\*\//gi.exec(filestr);
        let head = "";
        if (RGheader) {
          let headerText = RGheader[1];
          let header = headerText.split("\n");
          head = header.join("\n");
        }
        let RGbody = filestr.replace((RGheader || [""])[0], "").trim();
        let body = RGbody.replaceAll(";;", ",");
        let $th = this;
        function exporterSnip(doc) {
          if ($th.opts.platform) {
            switch ($th.opts.platform) {
              case "node":
                return doc + `
module.exports = $wosglobe;`;
                break;
              case "web":
                return doc + `
window.$wosglobe = $wosglobe;`;
                break;
              case "neut":
                return doc + `
;(
  (
    (globalThis?.window) && (window.$wosglobe = $wosglobe)
  )
    ||
  (
    (globalThis?.__dirname) && (globalThis.$wosglobe = $wosglobe)
  )
);`;
                break;
            }
          }
          return doc;
        }
        function objectCase() {
          let doc = "";
          doc += head + (head ? `
` : "") + [
            `/*@!!`,
            `  THIS IS A WOSSCRIPT`,
            "  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS",
            `*/`,
            ``,
            `const $wosglobe = {`,
            body.split("\n").map((a) => "  " + a).join("\n"),
            `}`,
            ``
          ].join("\n");
          doc = exporterSnip(doc);
          return doc;
        }
        function classCase() {
          let doc = "";
          doc += head + (head ? `
` : "") + [
            `/*@!!`,
            `  THIS IS A WOSSCRIPT`,
            "  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS",
            ``,
            "    - This document was built in Class Mode",
            `*/`,
            ``,
            `const $wosglobe = class {`,
            body.split("\n").map((a) => "  " + a).join("\n"),
            `}`,
            ``
          ].join("\n");
          doc = exporterSnip(doc);
          return doc;
        }
        function asyncFunctionCase() {
          let doc = "";
          doc += head + (head ? `
` : "") + [
            `/*@!!`,
            `  THIS IS A WOSSCRIPT`,
            "  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS",
            ``,
            "    - This document was built in Async Mode",
            `*/`,
            ``,
            `const $wosglobe = async function() {`,
            body.split("\n").map((a) => "  " + a).join("\n"),
            `}`,
            ``
          ].join("\n");
          doc = exporterSnip(doc);
          return doc;
        }
        function syncFunctionCase() {
          let doc = "";
          doc += head + (head ? `
` : "") + [
            `/*@!!`,
            `  THIS IS A WOSSCRIPT`,
            "  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS",
            ``,
            "    - This document was built in Sync Mode",
            `*/`,
            ``,
            `const $wosglobe = function() {`,
            body.split("\n").map((a) => "  " + a).join("\n"),
            `}`,
            ``
          ].join("\n");
          doc = exporterSnip(doc);
          return doc;
        }
        let b = "";
        switch (type) {
          case "object":
            return b += objectCase();
            break;
          case "class":
            return b += classCase();
            break;
          case "async":
            return b += asyncFunctionCase();
            break;
          case "function":
            return b += syncFunctionCase();
            break;
          default:
            return b += objectCase();
            break;
        }
        return b;
      }
      exec(code, opts) {
        let parsedCode = this.parse(code, opts);
        try {
          var evalResp = eval(parsedCode);
        } catch (e) {
          console.error(
            Gd.beautify(
              "Failed to run WOSScript:",
              [...Gd.preset.cherryblossoms, ...Gd.preset.amethyst].sort(() => Math.random() - 0.5),
              true
            ),
            "\n\n",
            e,
            "\n",
            parsedCode,
            "\n\n"
          );
          return e;
        }
        return evalResp;
      }
    };
    globalThis?.window && Object.assign(window, { WOSScript }) || module && (module.exports = { WOSScript });
    var WOSScript_default = WOSScript;
  }
});

// src/wosbuild.ts
var import_WOSScript = __toESM2(require_WOSScript());
var import_fs = require("fs");
var import_path = require("path");
var import_rimraf = require("rimraf");
var import_path2 = __toESM2(require("path"));
var import_yargs = __toESM2(require("yargs"));
var import_colors = require("colors");
var { readFile, writeFile } = import_fs.promises;
function getOrMkeDir(dir) {
  return import_fs.promises.access(dir).then(() => dir).catch(async () => {
    const dirPath = (0, import_path.join)(process.cwd(), dir);
    await import_fs.promises.mkdir(dirPath, { recursive: true });
    return dirPath;
  });
}
function dirContents(dir) {
  return import_fs.promises.readdir(dir).then((files) => files.map((file) => (0, import_path.join)(dir, file)));
}
function isDir(file) {
  return import_fs.promises.stat(file).then((stat) => stat.isDirectory());
}
async function build_(dir, plat) {
  const contents = await dirContents(dir);
  for (const file of contents) {
    const isdir = await isDir(file);
    if (isdir) {
      await build_(file, plat);
    } else {
      const split = file.split(".");
      const name = split[0];
      const type = split[1];
      const ext = split[2];
      let lfType = "object";
      if (!ext || !type) {
        continue;
      }
      if (type === "cl") {
        lfType = "class";
      } else if (type === "sf") {
        lfType = "function";
      } else if (type === "af") {
        lfType = "async";
      }
      const ws = new import_WOSScript.WOSScript({
        type: lfType,
        platform: plat
      });
      let script = await readFile(file, "utf8");
      const parsed = ws.parse(script);
      const buildDir = await getOrMkeDir((0, import_path.join)(process.cwd(), "build"));
      const buildFile = (0, import_path.join)(buildDir, `${name}.${type}.wosb.${ext}`);
      await writeFile(buildFile, parsed);
    }
  }
}
var buildCommand = {
  command: "build",
  describe: "Build the project",
  handler: async (argv) => {
    const buildDir = argv.buildDir || "src";
    const actualDirLoc = (0, import_path.join)(__dirname, "..", buildDir);
    const actualDir = await getOrMkeDir(actualDirLoc);
    console.log((0, import_colors.green)(`Building into ${buildDir}...`));
    {
      try {
        await build_(actualDir, argv.buildPlat || "neut");
      } catch (err) {
        console.log((0, import_colors.yellow)(`Error: ${err}`));
      } finally {
        console.log((0, import_colors.green)("Done!"));
      }
    }
  }
};
var cleanCommand = {
  command: "clean",
  describe: "Clean the build output",
  handler: async (argv) => {
    const outputPath = import_path2.default.join(__dirname, argv.buildDir || "src");
    await (0, import_rimraf.rimraf)(outputPath, {
      preserveRoot: true
    });
    console.log((0, import_colors.green)(`Cleaned ${outputPath}...`));
  }
};
if (process.argv.length === 2) {
  console.log(
    "\n" + `
Welcome to ${(0, import_colors.yellow)("WOSBUILD")}!

This is a tool for building ${(0, import_colors.yellow)("WOSS")} scripts into JS.
      `.trim() + "\n\n"
  );
  import_yargs.default.showHelp();
  process.exit(0);
} else {
  import_yargs.default.option("buildDir", {
    describe: "Directory to build into",
    type: "string",
    default: "src"
  }).option("buildPlat", {
    describe: "Platform to build into",
    type: "string",
    default: "neut"
  }).command(buildCommand).command(cleanCommand).demandCommand().help().argv;
}
