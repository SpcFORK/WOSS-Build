"use strict";
(() => {
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS2 = (cb, mod) => function __require2() {
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
    "woss/WOSScript.js"(exports, module) {
      "use strict";
      !globalThis?.module && Object.assign(globalThis, { module: { exports: {} } });
      var __create = Object.create;
      var __defProp = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __commonJS = (cb, mod) => function __require2() {
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
        "src/Gradule-web.js"(exports2, module2) {
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
                return new Promise((resolve10) => {
                  const beautifiedQuestion = Preset2.beautify(question, colorArr, bold, italic);
                  const answer = prompt(beautifiedQuestion);
                  resolve10(answer);
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
          if (typeof module2 !== "undefined") {
            module2.exports = _exp_;
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

  // node_modules/balanced-match/index.js
  var require_balanced_match = __commonJS2({
    "node_modules/balanced-match/index.js"(exports2, module2) {
      "use strict";
      module2.exports = balanced;
      function balanced(a, b, str) {
        if (a instanceof RegExp)
          a = maybeMatch(a, str);
        if (b instanceof RegExp)
          b = maybeMatch(b, str);
        var r = range(a, b, str);
        return r && {
          start: r[0],
          end: r[1],
          pre: str.slice(0, r[0]),
          body: str.slice(r[0] + a.length, r[1]),
          post: str.slice(r[1] + b.length)
        };
      }
      function maybeMatch(reg, str) {
        var m = str.match(reg);
        return m ? m[0] : null;
      }
      balanced.range = range;
      function range(a, b, str) {
        var begs, beg, left2, right2, result;
        var ai = str.indexOf(a);
        var bi = str.indexOf(b, ai + 1);
        var i = ai;
        if (ai >= 0 && bi > 0) {
          if (a === b) {
            return [ai, bi];
          }
          begs = [];
          left2 = str.length;
          while (i >= 0 && !result) {
            if (i == ai) {
              begs.push(i);
              ai = str.indexOf(a, i + 1);
            } else if (begs.length == 1) {
              result = [begs.pop(), bi];
            } else {
              beg = begs.pop();
              if (beg < left2) {
                left2 = beg;
                right2 = bi;
              }
              bi = str.indexOf(b, i + 1);
            }
            i = ai < bi && ai >= 0 ? ai : bi;
          }
          if (begs.length) {
            result = [left2, right2];
          }
        }
        return result;
      }
    }
  });

  // node_modules/brace-expansion/index.js
  var require_brace_expansion = __commonJS2({
    "node_modules/brace-expansion/index.js"(exports2, module2) {
      "use strict";
      var balanced = require_balanced_match();
      module2.exports = expandTop;
      var escSlash = "\0SLASH" + Math.random() + "\0";
      var escOpen = "\0OPEN" + Math.random() + "\0";
      var escClose = "\0CLOSE" + Math.random() + "\0";
      var escComma = "\0COMMA" + Math.random() + "\0";
      var escPeriod = "\0PERIOD" + Math.random() + "\0";
      function numeric(str) {
        return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
      }
      function escapeBraces(str) {
        return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
      }
      function unescapeBraces(str) {
        return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
      }
      function parseCommaParts(str) {
        if (!str)
          return [""];
        var parts = [];
        var m = balanced("{", "}", str);
        if (!m)
          return str.split(",");
        var pre = m.pre;
        var body = m.body;
        var post = m.post;
        var p = pre.split(",");
        p[p.length - 1] += "{" + body + "}";
        var postParts = parseCommaParts(post);
        if (post.length) {
          p[p.length - 1] += postParts.shift();
          p.push.apply(p, postParts);
        }
        parts.push.apply(parts, p);
        return parts;
      }
      function expandTop(str) {
        if (!str)
          return [];
        if (str.substr(0, 2) === "{}") {
          str = "\\{\\}" + str.substr(2);
        }
        return expand2(escapeBraces(str), true).map(unescapeBraces);
      }
      function embrace(str) {
        return "{" + str + "}";
      }
      function isPadded(el) {
        return /^-?0\d/.test(el);
      }
      function lte(i, y) {
        return i <= y;
      }
      function gte(i, y) {
        return i >= y;
      }
      function expand2(str, isTop) {
        var expansions = [];
        var m = balanced("{", "}", str);
        if (!m)
          return [str];
        var pre = m.pre;
        var post = m.post.length ? expand2(m.post, false) : [""];
        if (/\$$/.test(m.pre)) {
          for (var k = 0; k < post.length; k++) {
            var expansion = pre + "{" + m.body + "}" + post[k];
            expansions.push(expansion);
          }
        } else {
          var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
          var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
          var isSequence = isNumericSequence || isAlphaSequence;
          var isOptions = m.body.indexOf(",") >= 0;
          if (!isSequence && !isOptions) {
            if (m.post.match(/,.*\}/)) {
              str = m.pre + "{" + m.body + escClose + m.post;
              return expand2(str);
            }
            return [str];
          }
          var n;
          if (isSequence) {
            n = m.body.split(/\.\./);
          } else {
            n = parseCommaParts(m.body);
            if (n.length === 1) {
              n = expand2(n[0], false).map(embrace);
              if (n.length === 1) {
                return post.map(function(p) {
                  return m.pre + n[0] + p;
                });
              }
            }
          }
          var N;
          if (isSequence) {
            var x = numeric(n[0]);
            var y = numeric(n[1]);
            var width = Math.max(n[0].length, n[1].length);
            var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
            var test = lte;
            var reverse = y < x;
            if (reverse) {
              incr *= -1;
              test = gte;
            }
            var pad = n.some(isPadded);
            N = [];
            for (var i = x; test(i, y); i += incr) {
              var c;
              if (isAlphaSequence) {
                c = String.fromCharCode(i);
                if (c === "\\")
                  c = "";
              } else {
                c = String(i);
                if (pad) {
                  var need = width - c.length;
                  if (need > 0) {
                    var z = new Array(need + 1).join("0");
                    if (i < 0)
                      c = "-" + z + c.slice(1);
                    else
                      c = z + c;
                  }
                }
              }
              N.push(c);
            }
          } else {
            N = [];
            for (var j = 0; j < n.length; j++) {
              N.push.apply(N, expand2(n[j], false));
            }
          }
          for (var j = 0; j < N.length; j++) {
            for (var k = 0; k < post.length; k++) {
              var expansion = pre + N[j] + post[k];
              if (!isTop || isSequence || expansion)
                expansions.push(expansion);
            }
          }
        }
        return expansions;
      }
    }
  });

  // node_modules/colors/lib/styles.js
  var require_styles = __commonJS2({
    "node_modules/colors/lib/styles.js"(exports2, module2) {
      "use strict";
      var styles = {};
      module2["exports"] = styles;
      var codes2 = {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        grey: [90, 39],
        brightRed: [91, 39],
        brightGreen: [92, 39],
        brightYellow: [93, 39],
        brightBlue: [94, 39],
        brightMagenta: [95, 39],
        brightCyan: [96, 39],
        brightWhite: [97, 39],
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgGray: [100, 49],
        bgGrey: [100, 49],
        bgBrightRed: [101, 49],
        bgBrightGreen: [102, 49],
        bgBrightYellow: [103, 49],
        bgBrightBlue: [104, 49],
        bgBrightMagenta: [105, 49],
        bgBrightCyan: [106, 49],
        bgBrightWhite: [107, 49],
        // legacy styles for colors pre v1.0.0
        blackBG: [40, 49],
        redBG: [41, 49],
        greenBG: [42, 49],
        yellowBG: [43, 49],
        blueBG: [44, 49],
        magentaBG: [45, 49],
        cyanBG: [46, 49],
        whiteBG: [47, 49]
      };
      Object.keys(codes2).forEach(function(key) {
        var val = codes2[key];
        var style = styles[key] = [];
        style.open = "\x1B[" + val[0] + "m";
        style.close = "\x1B[" + val[1] + "m";
      });
    }
  });

  // node_modules/colors/lib/system/has-flag.js
  var require_has_flag = __commonJS2({
    "node_modules/colors/lib/system/has-flag.js"(exports2, module2) {
      "use strict";
      module2.exports = function(flag, argv) {
        argv = argv || process.argv;
        var terminatorPos = argv.indexOf("--");
        var prefix = /^-{1,2}/.test(flag) ? "" : "--";
        var pos = argv.indexOf(prefix + flag);
        return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
      };
    }
  });

  // node_modules/colors/lib/system/supports-colors.js
  var require_supports_colors = __commonJS2({
    "node_modules/colors/lib/system/supports-colors.js"(exports2, module2) {
      "use strict";
      var os = __require("os");
      var hasFlag = require_has_flag();
      var env2 = process.env;
      var forceColor = void 0;
      if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
        forceColor = false;
      } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
        forceColor = true;
      }
      if ("FORCE_COLOR" in env2) {
        forceColor = env2.FORCE_COLOR.length === 0 || parseInt(env2.FORCE_COLOR, 10) !== 0;
      }
      function translateLevel(level) {
        if (level === 0) {
          return false;
        }
        return {
          level,
          hasBasic: true,
          has256: level >= 2,
          has16m: level >= 3
        };
      }
      function supportsColor(stream2) {
        if (forceColor === false) {
          return 0;
        }
        if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
          return 3;
        }
        if (hasFlag("color=256")) {
          return 2;
        }
        if (stream2 && !stream2.isTTY && forceColor !== true) {
          return 0;
        }
        var min = forceColor ? 1 : 0;
        if (process.platform === "win32") {
          var osRelease = os.release().split(".");
          if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
          }
          return 1;
        }
        if ("CI" in env2) {
          if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(sign) {
            return sign in env2;
          }) || env2.CI_NAME === "codeship") {
            return 1;
          }
          return min;
        }
        if ("TEAMCITY_VERSION" in env2) {
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env2.TEAMCITY_VERSION) ? 1 : 0;
        }
        if ("TERM_PROGRAM" in env2) {
          var version2 = parseInt((env2.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (env2.TERM_PROGRAM) {
            case "iTerm.app":
              return version2 >= 3 ? 3 : 2;
            case "Hyper":
              return 3;
            case "Apple_Terminal":
              return 2;
          }
        }
        if (/-256(color)?$/i.test(env2.TERM)) {
          return 2;
        }
        if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env2.TERM)) {
          return 1;
        }
        if ("COLORTERM" in env2) {
          return 1;
        }
        if (env2.TERM === "dumb") {
          return min;
        }
        return min;
      }
      function getSupportLevel(stream2) {
        var level = supportsColor(stream2);
        return translateLevel(level);
      }
      module2.exports = {
        supportsColor: getSupportLevel,
        stdout: getSupportLevel(process.stdout),
        stderr: getSupportLevel(process.stderr)
      };
    }
  });

  // node_modules/colors/lib/custom/trap.js
  var require_trap = __commonJS2({
    "node_modules/colors/lib/custom/trap.js"(exports2, module2) {
      "use strict";
      module2["exports"] = function runTheTrap(text, options) {
        var result = "";
        text = text || "Run the trap, drop the bass";
        text = text.split("");
        var trap = {
          a: ["@", "\u0104", "\u023A", "\u0245", "\u0394", "\u039B", "\u0414"],
          b: ["\xDF", "\u0181", "\u0243", "\u026E", "\u03B2", "\u0E3F"],
          c: ["\xA9", "\u023B", "\u03FE"],
          d: ["\xD0", "\u018A", "\u0500", "\u0501", "\u0502", "\u0503"],
          e: [
            "\xCB",
            "\u0115",
            "\u018E",
            "\u0258",
            "\u03A3",
            "\u03BE",
            "\u04BC",
            "\u0A6C"
          ],
          f: ["\u04FA"],
          g: ["\u0262"],
          h: ["\u0126", "\u0195", "\u04A2", "\u04BA", "\u04C7", "\u050A"],
          i: ["\u0F0F"],
          j: ["\u0134"],
          k: ["\u0138", "\u04A0", "\u04C3", "\u051E"],
          l: ["\u0139"],
          m: ["\u028D", "\u04CD", "\u04CE", "\u0520", "\u0521", "\u0D69"],
          n: ["\xD1", "\u014B", "\u019D", "\u0376", "\u03A0", "\u048A"],
          o: [
            "\xD8",
            "\xF5",
            "\xF8",
            "\u01FE",
            "\u0298",
            "\u047A",
            "\u05DD",
            "\u06DD",
            "\u0E4F"
          ],
          p: ["\u01F7", "\u048E"],
          q: ["\u09CD"],
          r: ["\xAE", "\u01A6", "\u0210", "\u024C", "\u0280", "\u042F"],
          s: ["\xA7", "\u03DE", "\u03DF", "\u03E8"],
          t: ["\u0141", "\u0166", "\u0373"],
          u: ["\u01B1", "\u054D"],
          v: ["\u05D8"],
          w: ["\u0428", "\u0460", "\u047C", "\u0D70"],
          x: ["\u04B2", "\u04FE", "\u04FC", "\u04FD"],
          y: ["\xA5", "\u04B0", "\u04CB"],
          z: ["\u01B5", "\u0240"]
        };
        text.forEach(function(c) {
          c = c.toLowerCase();
          var chars = trap[c] || [" "];
          var rand = Math.floor(Math.random() * chars.length);
          if (typeof trap[c] !== "undefined") {
            result += trap[c][rand];
          } else {
            result += c;
          }
        });
        return result;
      };
    }
  });

  // node_modules/colors/lib/custom/zalgo.js
  var require_zalgo = __commonJS2({
    "node_modules/colors/lib/custom/zalgo.js"(exports2, module2) {
      "use strict";
      module2["exports"] = function zalgo(text, options) {
        text = text || "   he is here   ";
        var soul = {
          "up": [
            "\u030D",
            "\u030E",
            "\u0304",
            "\u0305",
            "\u033F",
            "\u0311",
            "\u0306",
            "\u0310",
            "\u0352",
            "\u0357",
            "\u0351",
            "\u0307",
            "\u0308",
            "\u030A",
            "\u0342",
            "\u0313",
            "\u0308",
            "\u034A",
            "\u034B",
            "\u034C",
            "\u0303",
            "\u0302",
            "\u030C",
            "\u0350",
            "\u0300",
            "\u0301",
            "\u030B",
            "\u030F",
            "\u0312",
            "\u0313",
            "\u0314",
            "\u033D",
            "\u0309",
            "\u0363",
            "\u0364",
            "\u0365",
            "\u0366",
            "\u0367",
            "\u0368",
            "\u0369",
            "\u036A",
            "\u036B",
            "\u036C",
            "\u036D",
            "\u036E",
            "\u036F",
            "\u033E",
            "\u035B",
            "\u0346",
            "\u031A"
          ],
          "down": [
            "\u0316",
            "\u0317",
            "\u0318",
            "\u0319",
            "\u031C",
            "\u031D",
            "\u031E",
            "\u031F",
            "\u0320",
            "\u0324",
            "\u0325",
            "\u0326",
            "\u0329",
            "\u032A",
            "\u032B",
            "\u032C",
            "\u032D",
            "\u032E",
            "\u032F",
            "\u0330",
            "\u0331",
            "\u0332",
            "\u0333",
            "\u0339",
            "\u033A",
            "\u033B",
            "\u033C",
            "\u0345",
            "\u0347",
            "\u0348",
            "\u0349",
            "\u034D",
            "\u034E",
            "\u0353",
            "\u0354",
            "\u0355",
            "\u0356",
            "\u0359",
            "\u035A",
            "\u0323"
          ],
          "mid": [
            "\u0315",
            "\u031B",
            "\u0300",
            "\u0301",
            "\u0358",
            "\u0321",
            "\u0322",
            "\u0327",
            "\u0328",
            "\u0334",
            "\u0335",
            "\u0336",
            "\u035C",
            "\u035D",
            "\u035E",
            "\u035F",
            "\u0360",
            "\u0362",
            "\u0338",
            "\u0337",
            "\u0361",
            " \u0489"
          ]
        };
        var all = [].concat(soul.up, soul.down, soul.mid);
        function randomNumber(range) {
          var r = Math.floor(Math.random() * range);
          return r;
        }
        function isChar(character) {
          var bool = false;
          all.filter(function(i) {
            bool = i === character;
          });
          return bool;
        }
        function heComes(text2, options2) {
          var result = "";
          var counts;
          var l;
          options2 = options2 || {};
          options2["up"] = typeof options2["up"] !== "undefined" ? options2["up"] : true;
          options2["mid"] = typeof options2["mid"] !== "undefined" ? options2["mid"] : true;
          options2["down"] = typeof options2["down"] !== "undefined" ? options2["down"] : true;
          options2["size"] = typeof options2["size"] !== "undefined" ? options2["size"] : "maxi";
          text2 = text2.split("");
          for (l in text2) {
            if (isChar(l)) {
              continue;
            }
            result = result + text2[l];
            counts = { "up": 0, "down": 0, "mid": 0 };
            switch (options2.size) {
              case "mini":
                counts.up = randomNumber(8);
                counts.mid = randomNumber(2);
                counts.down = randomNumber(8);
                break;
              case "maxi":
                counts.up = randomNumber(16) + 3;
                counts.mid = randomNumber(4) + 1;
                counts.down = randomNumber(64) + 3;
                break;
              default:
                counts.up = randomNumber(8) + 1;
                counts.mid = randomNumber(6) / 2;
                counts.down = randomNumber(8) + 1;
                break;
            }
            var arr = ["up", "mid", "down"];
            for (var d in arr) {
              var index = arr[d];
              for (var i = 0; i <= counts[index]; i++) {
                if (options2[index]) {
                  result = result + soul[index][randomNumber(soul[index].length)];
                }
              }
            }
          }
          return result;
        }
        return heComes(text, options);
      };
    }
  });

  // node_modules/colors/lib/maps/america.js
  var require_america = __commonJS2({
    "node_modules/colors/lib/maps/america.js"(exports2, module2) {
      "use strict";
      module2["exports"] = function(colors) {
        return function(letter, i, exploded) {
          if (letter === " ")
            return letter;
          switch (i % 3) {
            case 0:
              return colors.red(letter);
            case 1:
              return colors.white(letter);
            case 2:
              return colors.blue(letter);
          }
        };
      };
    }
  });

  // node_modules/colors/lib/maps/zebra.js
  var require_zebra = __commonJS2({
    "node_modules/colors/lib/maps/zebra.js"(exports2, module2) {
      "use strict";
      module2["exports"] = function(colors) {
        return function(letter, i, exploded) {
          return i % 2 === 0 ? letter : colors.inverse(letter);
        };
      };
    }
  });

  // node_modules/colors/lib/maps/rainbow.js
  var require_rainbow = __commonJS2({
    "node_modules/colors/lib/maps/rainbow.js"(exports2, module2) {
      "use strict";
      module2["exports"] = function(colors) {
        var rainbowColors = ["red", "yellow", "green", "blue", "magenta"];
        return function(letter, i, exploded) {
          if (letter === " ") {
            return letter;
          } else {
            return colors[rainbowColors[i++ % rainbowColors.length]](letter);
          }
        };
      };
    }
  });

  // node_modules/colors/lib/maps/random.js
  var require_random = __commonJS2({
    "node_modules/colors/lib/maps/random.js"(exports2, module2) {
      "use strict";
      module2["exports"] = function(colors) {
        var available = [
          "underline",
          "inverse",
          "grey",
          "yellow",
          "red",
          "green",
          "blue",
          "white",
          "cyan",
          "magenta",
          "brightYellow",
          "brightRed",
          "brightGreen",
          "brightBlue",
          "brightWhite",
          "brightCyan",
          "brightMagenta"
        ];
        return function(letter, i, exploded) {
          return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 2))]](letter);
        };
      };
    }
  });

  // node_modules/colors/lib/colors.js
  var require_colors = __commonJS2({
    "node_modules/colors/lib/colors.js"(exports2, module2) {
      "use strict";
      var colors = {};
      module2["exports"] = colors;
      colors.themes = {};
      var util = __require("util");
      var ansiStyles = colors.styles = require_styles();
      var defineProps = Object.defineProperties;
      var newLineRegex = new RegExp(/[\r\n]+/g);
      colors.supportsColor = require_supports_colors().supportsColor;
      if (typeof colors.enabled === "undefined") {
        colors.enabled = colors.supportsColor() !== false;
      }
      colors.enable = function() {
        colors.enabled = true;
      };
      colors.disable = function() {
        colors.enabled = false;
      };
      colors.stripColors = colors.strip = function(str) {
        return ("" + str).replace(/\x1B\[\d+m/g, "");
      };
      var stylize = colors.stylize = function stylize2(str, style) {
        if (!colors.enabled) {
          return str + "";
        }
        var styleMap = ansiStyles[style];
        if (!styleMap && style in colors) {
          return colors[style](str);
        }
        return styleMap.open + str + styleMap.close;
      };
      var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
      var escapeStringRegexp = function(str) {
        if (typeof str !== "string") {
          throw new TypeError("Expected a string");
        }
        return str.replace(matchOperatorsRe, "\\$&");
      };
      function build(_styles) {
        var builder = function builder2() {
          return applyStyle.apply(builder2, arguments);
        };
        builder._styles = _styles;
        builder.__proto__ = proto;
        return builder;
      }
      var styles = function() {
        var ret = {};
        ansiStyles.grey = ansiStyles.gray;
        Object.keys(ansiStyles).forEach(function(key) {
          ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
          ret[key] = {
            get: function() {
              return build(this._styles.concat(key));
            }
          };
        });
        return ret;
      }();
      var proto = defineProps(function colors2() {
      }, styles);
      function applyStyle() {
        var args = Array.prototype.slice.call(arguments);
        var str = args.map(function(arg) {
          if (arg != null && arg.constructor === String) {
            return arg;
          } else {
            return util.inspect(arg);
          }
        }).join(" ");
        if (!colors.enabled || !str) {
          return str;
        }
        var newLinesPresent = str.indexOf("\n") != -1;
        var nestedStyles = this._styles;
        var i = nestedStyles.length;
        while (i--) {
          var code2 = ansiStyles[nestedStyles[i]];
          str = code2.open + str.replace(code2.closeRe, code2.open) + code2.close;
          if (newLinesPresent) {
            str = str.replace(newLineRegex, function(match2) {
              return code2.close + match2 + code2.open;
            });
          }
        }
        return str;
      }
      colors.setTheme = function(theme) {
        if (typeof theme === "string") {
          console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
          return;
        }
        for (var style in theme) {
          (function(style2) {
            colors[style2] = function(str) {
              if (typeof theme[style2] === "object") {
                var out = str;
                for (var i in theme[style2]) {
                  out = colors[theme[style2][i]](out);
                }
                return out;
              }
              return colors[theme[style2]](str);
            };
          })(style);
        }
      };
      function init() {
        var ret = {};
        Object.keys(styles).forEach(function(name) {
          ret[name] = {
            get: function() {
              return build([name]);
            }
          };
        });
        return ret;
      }
      var sequencer = function sequencer2(map2, str) {
        var exploded = str.split("");
        exploded = exploded.map(map2);
        return exploded.join("");
      };
      colors.trap = require_trap();
      colors.zalgo = require_zalgo();
      colors.maps = {};
      colors.maps.america = require_america()(colors);
      colors.maps.zebra = require_zebra()(colors);
      colors.maps.rainbow = require_rainbow()(colors);
      colors.maps.random = require_random()(colors);
      for (map in colors.maps) {
        (function(map2) {
          colors[map2] = function(str) {
            return sequencer(colors.maps[map2], str);
          };
        })(map);
      }
      var map;
      defineProps(colors, init());
    }
  });

  // node_modules/colors/lib/extendStringPrototype.js
  var require_extendStringPrototype = __commonJS2({
    "node_modules/colors/lib/extendStringPrototype.js"(exports2, module2) {
      "use strict";
      var colors = require_colors();
      module2["exports"] = function() {
        var addProperty = function(color, func) {
          String.prototype.__defineGetter__(color, func);
        };
        addProperty("strip", function() {
          return colors.strip(this);
        });
        addProperty("stripColors", function() {
          return colors.strip(this);
        });
        addProperty("trap", function() {
          return colors.trap(this);
        });
        addProperty("zalgo", function() {
          return colors.zalgo(this);
        });
        addProperty("zebra", function() {
          return colors.zebra(this);
        });
        addProperty("rainbow", function() {
          return colors.rainbow(this);
        });
        addProperty("random", function() {
          return colors.random(this);
        });
        addProperty("america", function() {
          return colors.america(this);
        });
        var x = Object.keys(colors.styles);
        x.forEach(function(style) {
          addProperty(style, function() {
            return colors.stylize(this, style);
          });
        });
        function applyTheme(theme) {
          var stringPrototypeBlacklist = [
            "__defineGetter__",
            "__defineSetter__",
            "__lookupGetter__",
            "__lookupSetter__",
            "charAt",
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
            "charCodeAt",
            "indexOf",
            "lastIndexOf",
            "length",
            "localeCompare",
            "match",
            "repeat",
            "replace",
            "search",
            "slice",
            "split",
            "substring",
            "toLocaleLowerCase",
            "toLocaleUpperCase",
            "toLowerCase",
            "toUpperCase",
            "trim",
            "trimLeft",
            "trimRight"
          ];
          Object.keys(theme).forEach(function(prop) {
            if (stringPrototypeBlacklist.indexOf(prop) !== -1) {
              console.log("warn: ".red + ("String.prototype" + prop).magenta + " is probably something you don't want to override.  Ignoring style name");
            } else {
              if (typeof theme[prop] === "string") {
                colors[prop] = colors[theme[prop]];
                addProperty(prop, function() {
                  return colors[prop](this);
                });
              } else {
                var themePropApplicator = function(str) {
                  var ret = str || this;
                  for (var t = 0; t < theme[prop].length; t++) {
                    ret = colors[theme[prop][t]](ret);
                  }
                  return ret;
                };
                addProperty(prop, themePropApplicator);
                colors[prop] = function(str) {
                  return themePropApplicator(str);
                };
              }
            }
          });
        }
        colors.setTheme = function(theme) {
          if (typeof theme === "string") {
            console.log("colors.setTheme now only accepts an object, not a string. If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
            return;
          } else {
            applyTheme(theme);
          }
        };
      };
    }
  });

  // node_modules/colors/lib/index.js
  var require_lib = __commonJS2({
    "node_modules/colors/lib/index.js"(exports2, module2) {
      "use strict";
      var colors = require_colors();
      module2["exports"] = colors;
      require_extendStringPrototype()();
    }
  });

  // src/wosbuild.ts
  var import_WOSScript = __toESM2(require_WOSScript());
  var import_fs16 = __require("fs");
  var import_path11 = __require("path");

  // node_modules/minimatch/dist/mjs/index.js
  var import_brace_expansion = __toESM2(require_brace_expansion(), 1);

  // node_modules/minimatch/dist/mjs/assert-valid-pattern.js
  var MAX_PATTERN_LENGTH = 1024 * 64;
  var assertValidPattern = (pattern) => {
    if (typeof pattern !== "string") {
      throw new TypeError("invalid pattern");
    }
    if (pattern.length > MAX_PATTERN_LENGTH) {
      throw new TypeError("pattern is too long");
    }
  };

  // node_modules/minimatch/dist/mjs/brace-expressions.js
  var posixClasses = {
    "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true],
    "[:alpha:]": ["\\p{L}\\p{Nl}", true],
    "[:ascii:]": ["\\x00-\\x7f", false],
    "[:blank:]": ["\\p{Zs}\\t", true],
    "[:cntrl:]": ["\\p{Cc}", true],
    "[:digit:]": ["\\p{Nd}", true],
    "[:graph:]": ["\\p{Z}\\p{C}", true, true],
    "[:lower:]": ["\\p{Ll}", true],
    "[:print:]": ["\\p{C}", true],
    "[:punct:]": ["\\p{P}", true],
    "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true],
    "[:upper:]": ["\\p{Lu}", true],
    "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true],
    "[:xdigit:]": ["A-Fa-f0-9", false]
  };
  var braceEscape = (s) => s.replace(/[[\]\\-]/g, "\\$&");
  var regexpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  var rangesToString = (ranges) => ranges.join("");
  var parseClass = (glob2, position) => {
    const pos = position;
    if (glob2.charAt(pos) !== "[") {
      throw new Error("not in a brace expression");
    }
    const ranges = [];
    const negs = [];
    let i = pos + 1;
    let sawStart = false;
    let uflag = false;
    let escaping = false;
    let negate = false;
    let endPos = pos;
    let rangeStart = "";
    WHILE:
      while (i < glob2.length) {
        const c = glob2.charAt(i);
        if ((c === "!" || c === "^") && i === pos + 1) {
          negate = true;
          i++;
          continue;
        }
        if (c === "]" && sawStart && !escaping) {
          endPos = i + 1;
          break;
        }
        sawStart = true;
        if (c === "\\") {
          if (!escaping) {
            escaping = true;
            i++;
            continue;
          }
        }
        if (c === "[" && !escaping) {
          for (const [cls, [unip, u, neg]] of Object.entries(posixClasses)) {
            if (glob2.startsWith(cls, i)) {
              if (rangeStart) {
                return ["$.", false, glob2.length - pos, true];
              }
              i += cls.length;
              if (neg)
                negs.push(unip);
              else
                ranges.push(unip);
              uflag = uflag || u;
              continue WHILE;
            }
          }
        }
        escaping = false;
        if (rangeStart) {
          if (c > rangeStart) {
            ranges.push(braceEscape(rangeStart) + "-" + braceEscape(c));
          } else if (c === rangeStart) {
            ranges.push(braceEscape(c));
          }
          rangeStart = "";
          i++;
          continue;
        }
        if (glob2.startsWith("-]", i + 1)) {
          ranges.push(braceEscape(c + "-"));
          i += 2;
          continue;
        }
        if (glob2.startsWith("-", i + 1)) {
          rangeStart = c;
          i += 2;
          continue;
        }
        ranges.push(braceEscape(c));
        i++;
      }
    if (endPos < i) {
      return ["", false, 0, false];
    }
    if (!ranges.length && !negs.length) {
      return ["$.", false, glob2.length - pos, true];
    }
    if (negs.length === 0 && ranges.length === 1 && /^\\?.$/.test(ranges[0]) && !negate) {
      const r = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
      return [regexpEscape(r), false, endPos - pos, false];
    }
    const sranges = "[" + (negate ? "^" : "") + rangesToString(ranges) + "]";
    const snegs = "[" + (negate ? "" : "^") + rangesToString(negs) + "]";
    const comb = ranges.length && negs.length ? "(" + sranges + "|" + snegs + ")" : ranges.length ? sranges : snegs;
    return [comb, uflag, endPos - pos, true];
  };

  // node_modules/minimatch/dist/mjs/unescape.js
  var unescape = (s, { windowsPathsNoEscape = false } = {}) => {
    return windowsPathsNoEscape ? s.replace(/\[([^\/\\])\]/g, "$1") : s.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
  };

  // node_modules/minimatch/dist/mjs/ast.js
  var types = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]);
  var isExtglobType = (c) => types.has(c);
  var startNoTraversal = "(?!(?:^|/)\\.\\.?(?:$|/))";
  var startNoDot = "(?!\\.)";
  var addPatternStart = /* @__PURE__ */ new Set(["[", "."]);
  var justDots = /* @__PURE__ */ new Set(["..", "."]);
  var reSpecials = new Set("().*{}+?[]^$\\!");
  var regExpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  var qmark = "[^/]";
  var star = qmark + "*?";
  var starNoEmpty = qmark + "+?";
  var AST = class _AST {
    type;
    #root;
    #hasMagic;
    #uflag = false;
    #parts = [];
    #parent;
    #parentIndex;
    #negs;
    #filledNegs = false;
    #options;
    #toString;
    // set to true if it's an extglob with no children
    // (which really means one child of '')
    #emptyExt = false;
    constructor(type, parent, options = {}) {
      this.type = type;
      if (type)
        this.#hasMagic = true;
      this.#parent = parent;
      this.#root = this.#parent ? this.#parent.#root : this;
      this.#options = this.#root === this ? options : this.#root.#options;
      this.#negs = this.#root === this ? [] : this.#root.#negs;
      if (type === "!" && !this.#root.#filledNegs)
        this.#negs.push(this);
      this.#parentIndex = this.#parent ? this.#parent.#parts.length : 0;
    }
    get hasMagic() {
      if (this.#hasMagic !== void 0)
        return this.#hasMagic;
      for (const p of this.#parts) {
        if (typeof p === "string")
          continue;
        if (p.type || p.hasMagic)
          return this.#hasMagic = true;
      }
      return this.#hasMagic;
    }
    // reconstructs the pattern
    toString() {
      if (this.#toString !== void 0)
        return this.#toString;
      if (!this.type) {
        return this.#toString = this.#parts.map((p) => String(p)).join("");
      } else {
        return this.#toString = this.type + "(" + this.#parts.map((p) => String(p)).join("|") + ")";
      }
    }
    #fillNegs() {
      if (this !== this.#root)
        throw new Error("should only call on root");
      if (this.#filledNegs)
        return this;
      this.toString();
      this.#filledNegs = true;
      let n;
      while (n = this.#negs.pop()) {
        if (n.type !== "!")
          continue;
        let p = n;
        let pp = p.#parent;
        while (pp) {
          for (let i = p.#parentIndex + 1; !pp.type && i < pp.#parts.length; i++) {
            for (const part of n.#parts) {
              if (typeof part === "string") {
                throw new Error("string part in extglob AST??");
              }
              part.copyIn(pp.#parts[i]);
            }
          }
          p = pp;
          pp = p.#parent;
        }
      }
      return this;
    }
    push(...parts) {
      for (const p of parts) {
        if (p === "")
          continue;
        if (typeof p !== "string" && !(p instanceof _AST && p.#parent === this)) {
          throw new Error("invalid part: " + p);
        }
        this.#parts.push(p);
      }
    }
    toJSON() {
      const ret = this.type === null ? this.#parts.slice().map((p) => typeof p === "string" ? p : p.toJSON()) : [this.type, ...this.#parts.map((p) => p.toJSON())];
      if (this.isStart() && !this.type)
        ret.unshift([]);
      if (this.isEnd() && (this === this.#root || this.#root.#filledNegs && this.#parent?.type === "!")) {
        ret.push({});
      }
      return ret;
    }
    isStart() {
      if (this.#root === this)
        return true;
      if (!this.#parent?.isStart())
        return false;
      if (this.#parentIndex === 0)
        return true;
      const p = this.#parent;
      for (let i = 0; i < this.#parentIndex; i++) {
        const pp = p.#parts[i];
        if (!(pp instanceof _AST && pp.type === "!")) {
          return false;
        }
      }
      return true;
    }
    isEnd() {
      if (this.#root === this)
        return true;
      if (this.#parent?.type === "!")
        return true;
      if (!this.#parent?.isEnd())
        return false;
      if (!this.type)
        return this.#parent?.isEnd();
      const pl = this.#parent ? this.#parent.#parts.length : 0;
      return this.#parentIndex === pl - 1;
    }
    copyIn(part) {
      if (typeof part === "string")
        this.push(part);
      else
        this.push(part.clone(this));
    }
    clone(parent) {
      const c = new _AST(this.type, parent);
      for (const p of this.#parts) {
        c.copyIn(p);
      }
      return c;
    }
    static #parseAST(str, ast, pos, opt) {
      let escaping = false;
      let inBrace = false;
      let braceStart = -1;
      let braceNeg = false;
      if (ast.type === null) {
        let i2 = pos;
        let acc2 = "";
        while (i2 < str.length) {
          const c = str.charAt(i2++);
          if (escaping || c === "\\") {
            escaping = !escaping;
            acc2 += c;
            continue;
          }
          if (inBrace) {
            if (i2 === braceStart + 1) {
              if (c === "^" || c === "!") {
                braceNeg = true;
              }
            } else if (c === "]" && !(i2 === braceStart + 2 && braceNeg)) {
              inBrace = false;
            }
            acc2 += c;
            continue;
          } else if (c === "[") {
            inBrace = true;
            braceStart = i2;
            braceNeg = false;
            acc2 += c;
            continue;
          }
          if (!opt.noext && isExtglobType(c) && str.charAt(i2) === "(") {
            ast.push(acc2);
            acc2 = "";
            const ext2 = new _AST(c, ast);
            i2 = _AST.#parseAST(str, ext2, i2, opt);
            ast.push(ext2);
            continue;
          }
          acc2 += c;
        }
        ast.push(acc2);
        return i2;
      }
      let i = pos + 1;
      let part = new _AST(null, ast);
      const parts = [];
      let acc = "";
      while (i < str.length) {
        const c = str.charAt(i++);
        if (escaping || c === "\\") {
          escaping = !escaping;
          acc += c;
          continue;
        }
        if (inBrace) {
          if (i === braceStart + 1) {
            if (c === "^" || c === "!") {
              braceNeg = true;
            }
          } else if (c === "]" && !(i === braceStart + 2 && braceNeg)) {
            inBrace = false;
          }
          acc += c;
          continue;
        } else if (c === "[") {
          inBrace = true;
          braceStart = i;
          braceNeg = false;
          acc += c;
          continue;
        }
        if (isExtglobType(c) && str.charAt(i) === "(") {
          part.push(acc);
          acc = "";
          const ext2 = new _AST(c, part);
          part.push(ext2);
          i = _AST.#parseAST(str, ext2, i, opt);
          continue;
        }
        if (c === "|") {
          part.push(acc);
          acc = "";
          parts.push(part);
          part = new _AST(null, ast);
          continue;
        }
        if (c === ")") {
          if (acc === "" && ast.#parts.length === 0) {
            ast.#emptyExt = true;
          }
          part.push(acc);
          acc = "";
          ast.push(...parts, part);
          return i;
        }
        acc += c;
      }
      ast.type = null;
      ast.#hasMagic = void 0;
      ast.#parts = [str.substring(pos - 1)];
      return i;
    }
    static fromGlob(pattern, options = {}) {
      const ast = new _AST(null, void 0, options);
      _AST.#parseAST(pattern, ast, 0, options);
      return ast;
    }
    // returns the regular expression if there's magic, or the unescaped
    // string if not.
    toMMPattern() {
      if (this !== this.#root)
        return this.#root.toMMPattern();
      const glob2 = this.toString();
      const [re, body, hasMagic2, uflag] = this.toRegExpSource();
      const anyMagic = hasMagic2 || this.#hasMagic || this.#options.nocase && !this.#options.nocaseMagicOnly && glob2.toUpperCase() !== glob2.toLowerCase();
      if (!anyMagic) {
        return body;
      }
      const flags = (this.#options.nocase ? "i" : "") + (uflag ? "u" : "");
      return Object.assign(new RegExp(`^${re}$`, flags), {
        _src: re,
        _glob: glob2
      });
    }
    // returns the string match, the regexp source, whether there's magic
    // in the regexp (so a regular expression is required) and whether or
    // not the uflag is needed for the regular expression (for posix classes)
    // TODO: instead of injecting the start/end at this point, just return
    // the BODY of the regexp, along with the start/end portions suitable
    // for binding the start/end in either a joined full-path makeRe context
    // (where we bind to (^|/), or a standalone matchPart context (where
    // we bind to ^, and not /).  Otherwise slashes get duped!
    //
    // In part-matching mode, the start is:
    // - if not isStart: nothing
    // - if traversal possible, but not allowed: ^(?!\.\.?$)
    // - if dots allowed or not possible: ^
    // - if dots possible and not allowed: ^(?!\.)
    // end is:
    // - if not isEnd(): nothing
    // - else: $
    //
    // In full-path matching mode, we put the slash at the START of the
    // pattern, so start is:
    // - if first pattern: same as part-matching mode
    // - if not isStart(): nothing
    // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
    // - if dots allowed or not possible: /
    // - if dots possible and not allowed: /(?!\.)
    // end is:
    // - if last pattern, same as part-matching mode
    // - else nothing
    //
    // Always put the (?:$|/) on negated tails, though, because that has to be
    // there to bind the end of the negated pattern portion, and it's easier to
    // just stick it in now rather than try to inject it later in the middle of
    // the pattern.
    //
    // We can just always return the same end, and leave it up to the caller
    // to know whether it's going to be used joined or in parts.
    // And, if the start is adjusted slightly, can do the same there:
    // - if not isStart: nothing
    // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
    // - if dots allowed or not possible: (?:/|^)
    // - if dots possible and not allowed: (?:/|^)(?!\.)
    //
    // But it's better to have a simpler binding without a conditional, for
    // performance, so probably better to return both start options.
    //
    // Then the caller just ignores the end if it's not the first pattern,
    // and the start always gets applied.
    //
    // But that's always going to be $ if it's the ending pattern, or nothing,
    // so the caller can just attach $ at the end of the pattern when building.
    //
    // So the todo is:
    // - better detect what kind of start is needed
    // - return both flavors of starting pattern
    // - attach $ at the end of the pattern when creating the actual RegExp
    //
    // Ah, but wait, no, that all only applies to the root when the first pattern
    // is not an extglob. If the first pattern IS an extglob, then we need all
    // that dot prevention biz to live in the extglob portions, because eg
    // +(*|.x*) can match .xy but not .yx.
    //
    // So, return the two flavors if it's #root and the first child is not an
    // AST, otherwise leave it to the child AST to handle it, and there,
    // use the (?:^|/) style of start binding.
    //
    // Even simplified further:
    // - Since the start for a join is eg /(?!\.) and the start for a part
    // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
    // or start or whatever) and prepend ^ or / at the Regexp construction.
    toRegExpSource(allowDot) {
      const dot = allowDot ?? !!this.#options.dot;
      if (this.#root === this)
        this.#fillNegs();
      if (!this.type) {
        const noEmpty = this.isStart() && this.isEnd();
        const src = this.#parts.map((p) => {
          const [re, _, hasMagic2, uflag] = typeof p === "string" ? _AST.#parseGlob(p, this.#hasMagic, noEmpty) : p.toRegExpSource(allowDot);
          this.#hasMagic = this.#hasMagic || hasMagic2;
          this.#uflag = this.#uflag || uflag;
          return re;
        }).join("");
        let start2 = "";
        if (this.isStart()) {
          if (typeof this.#parts[0] === "string") {
            const dotTravAllowed = this.#parts.length === 1 && justDots.has(this.#parts[0]);
            if (!dotTravAllowed) {
              const aps = addPatternStart;
              const needNoTrav = (
                // dots are allowed, and the pattern starts with [ or .
                dot && aps.has(src.charAt(0)) || // the pattern starts with \., and then [ or .
                src.startsWith("\\.") && aps.has(src.charAt(2)) || // the pattern starts with \.\., and then [ or .
                src.startsWith("\\.\\.") && aps.has(src.charAt(4))
              );
              const needNoDot = !dot && !allowDot && aps.has(src.charAt(0));
              start2 = needNoTrav ? startNoTraversal : needNoDot ? startNoDot : "";
            }
          }
        }
        let end = "";
        if (this.isEnd() && this.#root.#filledNegs && this.#parent?.type === "!") {
          end = "(?:$|\\/)";
        }
        const final2 = start2 + src + end;
        return [
          final2,
          unescape(src),
          this.#hasMagic = !!this.#hasMagic,
          this.#uflag
        ];
      }
      const repeated = this.type === "*" || this.type === "+";
      const start = this.type === "!" ? "(?:(?!(?:" : "(?:";
      let body = this.#partsToRegExp(dot);
      if (this.isStart() && this.isEnd() && !body && this.type !== "!") {
        const s = this.toString();
        this.#parts = [s];
        this.type = null;
        this.#hasMagic = void 0;
        return [s, unescape(this.toString()), false, false];
      }
      let bodyDotAllowed = !repeated || allowDot || dot || !startNoDot ? "" : this.#partsToRegExp(true);
      if (bodyDotAllowed === body) {
        bodyDotAllowed = "";
      }
      if (bodyDotAllowed) {
        body = `(?:${body})(?:${bodyDotAllowed})*?`;
      }
      let final = "";
      if (this.type === "!" && this.#emptyExt) {
        final = (this.isStart() && !dot ? startNoDot : "") + starNoEmpty;
      } else {
        const close = this.type === "!" ? (
          // !() must match something,but !(x) can match ''
          "))" + (this.isStart() && !dot && !allowDot ? startNoDot : "") + star + ")"
        ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && bodyDotAllowed ? ")" : this.type === "*" && bodyDotAllowed ? `)?` : `)${this.type}`;
        final = start + body + close;
      }
      return [
        final,
        unescape(body),
        this.#hasMagic = !!this.#hasMagic,
        this.#uflag
      ];
    }
    #partsToRegExp(dot) {
      return this.#parts.map((p) => {
        if (typeof p === "string") {
          throw new Error("string type in extglob ast??");
        }
        const [re, _, _hasMagic, uflag] = p.toRegExpSource(dot);
        this.#uflag = this.#uflag || uflag;
        return re;
      }).filter((p) => !(this.isStart() && this.isEnd()) || !!p).join("|");
    }
    static #parseGlob(glob2, hasMagic2, noEmpty = false) {
      let escaping = false;
      let re = "";
      let uflag = false;
      for (let i = 0; i < glob2.length; i++) {
        const c = glob2.charAt(i);
        if (escaping) {
          escaping = false;
          re += (reSpecials.has(c) ? "\\" : "") + c;
          continue;
        }
        if (c === "\\") {
          if (i === glob2.length - 1) {
            re += "\\\\";
          } else {
            escaping = true;
          }
          continue;
        }
        if (c === "[") {
          const [src, needUflag, consumed, magic] = parseClass(glob2, i);
          if (consumed) {
            re += src;
            uflag = uflag || needUflag;
            i += consumed - 1;
            hasMagic2 = hasMagic2 || magic;
            continue;
          }
        }
        if (c === "*") {
          if (noEmpty && glob2 === "*")
            re += starNoEmpty;
          else
            re += star;
          hasMagic2 = true;
          continue;
        }
        if (c === "?") {
          re += qmark;
          hasMagic2 = true;
          continue;
        }
        re += regExpEscape(c);
      }
      return [re, unescape(glob2), !!hasMagic2, uflag];
    }
  };

  // node_modules/minimatch/dist/mjs/escape.js
  var escape = (s, { windowsPathsNoEscape = false } = {}) => {
    return windowsPathsNoEscape ? s.replace(/[?*()[\]]/g, "[$&]") : s.replace(/[?*()[\]\\]/g, "\\$&");
  };

  // node_modules/minimatch/dist/mjs/index.js
  var minimatch = (p, pattern, options = {}) => {
    assertValidPattern(pattern);
    if (!options.nocomment && pattern.charAt(0) === "#") {
      return false;
    }
    return new Minimatch(pattern, options).match(p);
  };
  var starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/;
  var starDotExtTest = (ext2) => (f) => !f.startsWith(".") && f.endsWith(ext2);
  var starDotExtTestDot = (ext2) => (f) => f.endsWith(ext2);
  var starDotExtTestNocase = (ext2) => {
    ext2 = ext2.toLowerCase();
    return (f) => !f.startsWith(".") && f.toLowerCase().endsWith(ext2);
  };
  var starDotExtTestNocaseDot = (ext2) => {
    ext2 = ext2.toLowerCase();
    return (f) => f.toLowerCase().endsWith(ext2);
  };
  var starDotStarRE = /^\*+\.\*+$/;
  var starDotStarTest = (f) => !f.startsWith(".") && f.includes(".");
  var starDotStarTestDot = (f) => f !== "." && f !== ".." && f.includes(".");
  var dotStarRE = /^\.\*+$/;
  var dotStarTest = (f) => f !== "." && f !== ".." && f.startsWith(".");
  var starRE = /^\*+$/;
  var starTest = (f) => f.length !== 0 && !f.startsWith(".");
  var starTestDot = (f) => f.length !== 0 && f !== "." && f !== "..";
  var qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/;
  var qmarksTestNocase = ([$0, ext2 = ""]) => {
    const noext = qmarksTestNoExt([$0]);
    if (!ext2)
      return noext;
    ext2 = ext2.toLowerCase();
    return (f) => noext(f) && f.toLowerCase().endsWith(ext2);
  };
  var qmarksTestNocaseDot = ([$0, ext2 = ""]) => {
    const noext = qmarksTestNoExtDot([$0]);
    if (!ext2)
      return noext;
    ext2 = ext2.toLowerCase();
    return (f) => noext(f) && f.toLowerCase().endsWith(ext2);
  };
  var qmarksTestDot = ([$0, ext2 = ""]) => {
    const noext = qmarksTestNoExtDot([$0]);
    return !ext2 ? noext : (f) => noext(f) && f.endsWith(ext2);
  };
  var qmarksTest = ([$0, ext2 = ""]) => {
    const noext = qmarksTestNoExt([$0]);
    return !ext2 ? noext : (f) => noext(f) && f.endsWith(ext2);
  };
  var qmarksTestNoExt = ([$0]) => {
    const len = $0.length;
    return (f) => f.length === len && !f.startsWith(".");
  };
  var qmarksTestNoExtDot = ([$0]) => {
    const len = $0.length;
    return (f) => f.length === len && f !== "." && f !== "..";
  };
  var defaultPlatform = typeof process === "object" && process ? typeof process.env === "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
  var path = {
    win32: { sep: "\\" },
    posix: { sep: "/" }
  };
  var sep = defaultPlatform === "win32" ? path.win32.sep : path.posix.sep;
  minimatch.sep = sep;
  var GLOBSTAR = Symbol("globstar **");
  minimatch.GLOBSTAR = GLOBSTAR;
  var qmark2 = "[^/]";
  var star2 = qmark2 + "*?";
  var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
  var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
  var filter = (pattern, options = {}) => (p) => minimatch(p, pattern, options);
  minimatch.filter = filter;
  var ext = (a, b = {}) => Object.assign({}, a, b);
  var defaults = (def) => {
    if (!def || typeof def !== "object" || !Object.keys(def).length) {
      return minimatch;
    }
    const orig = minimatch;
    const m = (p, pattern, options = {}) => orig(p, pattern, ext(def, options));
    return Object.assign(m, {
      Minimatch: class Minimatch extends orig.Minimatch {
        constructor(pattern, options = {}) {
          super(pattern, ext(def, options));
        }
        static defaults(options) {
          return orig.defaults(ext(def, options)).Minimatch;
        }
      },
      AST: class AST extends orig.AST {
        /* c8 ignore start */
        constructor(type, parent, options = {}) {
          super(type, parent, ext(def, options));
        }
        /* c8 ignore stop */
        static fromGlob(pattern, options = {}) {
          return orig.AST.fromGlob(pattern, ext(def, options));
        }
      },
      unescape: (s, options = {}) => orig.unescape(s, ext(def, options)),
      escape: (s, options = {}) => orig.escape(s, ext(def, options)),
      filter: (pattern, options = {}) => orig.filter(pattern, ext(def, options)),
      defaults: (options) => orig.defaults(ext(def, options)),
      makeRe: (pattern, options = {}) => orig.makeRe(pattern, ext(def, options)),
      braceExpand: (pattern, options = {}) => orig.braceExpand(pattern, ext(def, options)),
      match: (list, pattern, options = {}) => orig.match(list, pattern, ext(def, options)),
      sep: orig.sep,
      GLOBSTAR
    });
  };
  minimatch.defaults = defaults;
  var braceExpand = (pattern, options = {}) => {
    assertValidPattern(pattern);
    if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
      return [pattern];
    }
    return (0, import_brace_expansion.default)(pattern);
  };
  minimatch.braceExpand = braceExpand;
  var makeRe = (pattern, options = {}) => new Minimatch(pattern, options).makeRe();
  minimatch.makeRe = makeRe;
  var match = (list, pattern, options = {}) => {
    const mm = new Minimatch(pattern, options);
    list = list.filter((f) => mm.match(f));
    if (mm.options.nonull && !list.length) {
      list.push(pattern);
    }
    return list;
  };
  minimatch.match = match;
  var globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
  var regExpEscape2 = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  var Minimatch = class {
    options;
    set;
    pattern;
    windowsPathsNoEscape;
    nonegate;
    negate;
    comment;
    empty;
    preserveMultipleSlashes;
    partial;
    globSet;
    globParts;
    nocase;
    isWindows;
    platform;
    windowsNoMagicRoot;
    regexp;
    constructor(pattern, options = {}) {
      assertValidPattern(pattern);
      options = options || {};
      this.options = options;
      this.pattern = pattern;
      this.platform = options.platform || defaultPlatform;
      this.isWindows = this.platform === "win32";
      this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
      if (this.windowsPathsNoEscape) {
        this.pattern = this.pattern.replace(/\\/g, "/");
      }
      this.preserveMultipleSlashes = !!options.preserveMultipleSlashes;
      this.regexp = null;
      this.negate = false;
      this.nonegate = !!options.nonegate;
      this.comment = false;
      this.empty = false;
      this.partial = !!options.partial;
      this.nocase = !!this.options.nocase;
      this.windowsNoMagicRoot = options.windowsNoMagicRoot !== void 0 ? options.windowsNoMagicRoot : !!(this.isWindows && this.nocase);
      this.globSet = [];
      this.globParts = [];
      this.set = [];
      this.make();
    }
    hasMagic() {
      if (this.options.magicalBraces && this.set.length > 1) {
        return true;
      }
      for (const pattern of this.set) {
        for (const part of pattern) {
          if (typeof part !== "string")
            return true;
        }
      }
      return false;
    }
    debug(..._) {
    }
    make() {
      const pattern = this.pattern;
      const options = this.options;
      if (!options.nocomment && pattern.charAt(0) === "#") {
        this.comment = true;
        return;
      }
      if (!pattern) {
        this.empty = true;
        return;
      }
      this.parseNegate();
      this.globSet = [...new Set(this.braceExpand())];
      if (options.debug) {
        this.debug = (...args) => console.error(...args);
      }
      this.debug(this.pattern, this.globSet);
      const rawGlobParts = this.globSet.map((s) => this.slashSplit(s));
      this.globParts = this.preprocess(rawGlobParts);
      this.debug(this.pattern, this.globParts);
      let set = this.globParts.map((s, _, __) => {
        if (this.isWindows && this.windowsNoMagicRoot) {
          const isUNC = s[0] === "" && s[1] === "" && (s[2] === "?" || !globMagic.test(s[2])) && !globMagic.test(s[3]);
          const isDrive = /^[a-z]:/i.test(s[0]);
          if (isUNC) {
            return [...s.slice(0, 4), ...s.slice(4).map((ss) => this.parse(ss))];
          } else if (isDrive) {
            return [s[0], ...s.slice(1).map((ss) => this.parse(ss))];
          }
        }
        return s.map((ss) => this.parse(ss));
      });
      this.debug(this.pattern, set);
      this.set = set.filter((s) => s.indexOf(false) === -1);
      if (this.isWindows) {
        for (let i = 0; i < this.set.length; i++) {
          const p = this.set[i];
          if (p[0] === "" && p[1] === "" && this.globParts[i][2] === "?" && typeof p[3] === "string" && /^[a-z]:$/i.test(p[3])) {
            p[2] = "?";
          }
        }
      }
      this.debug(this.pattern, this.set);
    }
    // various transforms to equivalent pattern sets that are
    // faster to process in a filesystem walk.  The goal is to
    // eliminate what we can, and push all ** patterns as far
    // to the right as possible, even if it increases the number
    // of patterns that we have to process.
    preprocess(globParts) {
      if (this.options.noglobstar) {
        for (let i = 0; i < globParts.length; i++) {
          for (let j = 0; j < globParts[i].length; j++) {
            if (globParts[i][j] === "**") {
              globParts[i][j] = "*";
            }
          }
        }
      }
      const { optimizationLevel = 1 } = this.options;
      if (optimizationLevel >= 2) {
        globParts = this.firstPhasePreProcess(globParts);
        globParts = this.secondPhasePreProcess(globParts);
      } else if (optimizationLevel >= 1) {
        globParts = this.levelOneOptimize(globParts);
      } else {
        globParts = this.adjascentGlobstarOptimize(globParts);
      }
      return globParts;
    }
    // just get rid of adjascent ** portions
    adjascentGlobstarOptimize(globParts) {
      return globParts.map((parts) => {
        let gs = -1;
        while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
          let i = gs;
          while (parts[i + 1] === "**") {
            i++;
          }
          if (i !== gs) {
            parts.splice(gs, i - gs);
          }
        }
        return parts;
      });
    }
    // get rid of adjascent ** and resolve .. portions
    levelOneOptimize(globParts) {
      return globParts.map((parts) => {
        parts = parts.reduce((set, part) => {
          const prev = set[set.length - 1];
          if (part === "**" && prev === "**") {
            return set;
          }
          if (part === "..") {
            if (prev && prev !== ".." && prev !== "." && prev !== "**") {
              set.pop();
              return set;
            }
          }
          set.push(part);
          return set;
        }, []);
        return parts.length === 0 ? [""] : parts;
      });
    }
    levelTwoFileOptimize(parts) {
      if (!Array.isArray(parts)) {
        parts = this.slashSplit(parts);
      }
      let didSomething = false;
      do {
        didSomething = false;
        if (!this.preserveMultipleSlashes) {
          for (let i = 1; i < parts.length - 1; i++) {
            const p = parts[i];
            if (i === 1 && p === "" && parts[0] === "")
              continue;
            if (p === "." || p === "") {
              didSomething = true;
              parts.splice(i, 1);
              i--;
            }
          }
          if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
            didSomething = true;
            parts.pop();
          }
        }
        let dd = 0;
        while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
          const p = parts[dd - 1];
          if (p && p !== "." && p !== ".." && p !== "**") {
            didSomething = true;
            parts.splice(dd - 1, 2);
            dd -= 2;
          }
        }
      } while (didSomething);
      return parts.length === 0 ? [""] : parts;
    }
    // First phase: single-pattern processing
    // <pre> is 1 or more portions
    // <rest> is 1 or more portions
    // <p> is any portion other than ., .., '', or **
    // <e> is . or ''
    //
    // **/.. is *brutal* for filesystem walking performance, because
    // it effectively resets the recursive walk each time it occurs,
    // and ** cannot be reduced out by a .. pattern part like a regexp
    // or most strings (other than .., ., and '') can be.
    //
    // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
    // <pre>/<e>/<rest> -> <pre>/<rest>
    // <pre>/<p>/../<rest> -> <pre>/<rest>
    // **/**/<rest> -> **/<rest>
    //
    // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
    // this WOULD be allowed if ** did follow symlinks, or * didn't
    firstPhasePreProcess(globParts) {
      let didSomething = false;
      do {
        didSomething = false;
        for (let parts of globParts) {
          let gs = -1;
          while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
            let gss = gs;
            while (parts[gss + 1] === "**") {
              gss++;
            }
            if (gss > gs) {
              parts.splice(gs + 1, gss - gs);
            }
            let next = parts[gs + 1];
            const p = parts[gs + 2];
            const p2 = parts[gs + 3];
            if (next !== "..")
              continue;
            if (!p || p === "." || p === ".." || !p2 || p2 === "." || p2 === "..") {
              continue;
            }
            didSomething = true;
            parts.splice(gs, 1);
            const other = parts.slice(0);
            other[gs] = "**";
            globParts.push(other);
            gs--;
          }
          if (!this.preserveMultipleSlashes) {
            for (let i = 1; i < parts.length - 1; i++) {
              const p = parts[i];
              if (i === 1 && p === "" && parts[0] === "")
                continue;
              if (p === "." || p === "") {
                didSomething = true;
                parts.splice(i, 1);
                i--;
              }
            }
            if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
              didSomething = true;
              parts.pop();
            }
          }
          let dd = 0;
          while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
            const p = parts[dd - 1];
            if (p && p !== "." && p !== ".." && p !== "**") {
              didSomething = true;
              const needDot = dd === 1 && parts[dd + 1] === "**";
              const splin = needDot ? ["."] : [];
              parts.splice(dd - 1, 2, ...splin);
              if (parts.length === 0)
                parts.push("");
              dd -= 2;
            }
          }
        }
      } while (didSomething);
      return globParts;
    }
    // second phase: multi-pattern dedupes
    // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
    // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
    // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
    //
    // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
    // ^-- not valid because ** doens't follow symlinks
    secondPhasePreProcess(globParts) {
      for (let i = 0; i < globParts.length - 1; i++) {
        for (let j = i + 1; j < globParts.length; j++) {
          const matched = this.partsMatch(globParts[i], globParts[j], !this.preserveMultipleSlashes);
          if (!matched)
            continue;
          globParts[i] = matched;
          globParts[j] = [];
        }
      }
      return globParts.filter((gs) => gs.length);
    }
    partsMatch(a, b, emptyGSMatch = false) {
      let ai = 0;
      let bi = 0;
      let result = [];
      let which = "";
      while (ai < a.length && bi < b.length) {
        if (a[ai] === b[bi]) {
          result.push(which === "b" ? b[bi] : a[ai]);
          ai++;
          bi++;
        } else if (emptyGSMatch && a[ai] === "**" && b[bi] === a[ai + 1]) {
          result.push(a[ai]);
          ai++;
        } else if (emptyGSMatch && b[bi] === "**" && a[ai] === b[bi + 1]) {
          result.push(b[bi]);
          bi++;
        } else if (a[ai] === "*" && b[bi] && (this.options.dot || !b[bi].startsWith(".")) && b[bi] !== "**") {
          if (which === "b")
            return false;
          which = "a";
          result.push(a[ai]);
          ai++;
          bi++;
        } else if (b[bi] === "*" && a[ai] && (this.options.dot || !a[ai].startsWith(".")) && a[ai] !== "**") {
          if (which === "a")
            return false;
          which = "b";
          result.push(b[bi]);
          ai++;
          bi++;
        } else {
          return false;
        }
      }
      return a.length === b.length && result;
    }
    parseNegate() {
      if (this.nonegate)
        return;
      const pattern = this.pattern;
      let negate = false;
      let negateOffset = 0;
      for (let i = 0; i < pattern.length && pattern.charAt(i) === "!"; i++) {
        negate = !negate;
        negateOffset++;
      }
      if (negateOffset)
        this.pattern = pattern.slice(negateOffset);
      this.negate = negate;
    }
    // set partial to true to test if, for example,
    // "/a/b" matches the start of "/*/b/*/d"
    // Partial means, if you run out of file before you run
    // out of pattern, then that's fine, as long as all
    // the parts match.
    matchOne(file, pattern, partial = false) {
      const options = this.options;
      if (this.isWindows) {
        const fileDrive = typeof file[0] === "string" && /^[a-z]:$/i.test(file[0]);
        const fileUNC = !fileDrive && file[0] === "" && file[1] === "" && file[2] === "?" && /^[a-z]:$/i.test(file[3]);
        const patternDrive = typeof pattern[0] === "string" && /^[a-z]:$/i.test(pattern[0]);
        const patternUNC = !patternDrive && pattern[0] === "" && pattern[1] === "" && pattern[2] === "?" && typeof pattern[3] === "string" && /^[a-z]:$/i.test(pattern[3]);
        const fdi = fileUNC ? 3 : fileDrive ? 0 : void 0;
        const pdi = patternUNC ? 3 : patternDrive ? 0 : void 0;
        if (typeof fdi === "number" && typeof pdi === "number") {
          const [fd, pd] = [file[fdi], pattern[pdi]];
          if (fd.toLowerCase() === pd.toLowerCase()) {
            pattern[pdi] = fd;
            if (pdi > fdi) {
              pattern = pattern.slice(pdi);
            } else if (fdi > pdi) {
              file = file.slice(fdi);
            }
          }
        }
      }
      const { optimizationLevel = 1 } = this.options;
      if (optimizationLevel >= 2) {
        file = this.levelTwoFileOptimize(file);
      }
      this.debug("matchOne", this, { file, pattern });
      this.debug("matchOne", file.length, pattern.length);
      for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
        this.debug("matchOne loop");
        var p = pattern[pi];
        var f = file[fi];
        this.debug(pattern, p, f);
        if (p === false) {
          return false;
        }
        if (p === GLOBSTAR) {
          this.debug("GLOBSTAR", [pattern, p, f]);
          var fr = fi;
          var pr = pi + 1;
          if (pr === pl) {
            this.debug("** at the end");
            for (; fi < fl; fi++) {
              if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
                return false;
            }
            return true;
          }
          while (fr < fl) {
            var swallowee = file[fr];
            this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
            if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
              this.debug("globstar found match!", fr, fl, swallowee);
              return true;
            } else {
              if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
                this.debug("dot detected!", file, fr, pattern, pr);
                break;
              }
              this.debug("globstar swallow a segment, and continue");
              fr++;
            }
          }
          if (partial) {
            this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
            if (fr === fl) {
              return true;
            }
          }
          return false;
        }
        let hit;
        if (typeof p === "string") {
          hit = f === p;
          this.debug("string match", p, f, hit);
        } else {
          hit = p.test(f);
          this.debug("pattern match", p, f, hit);
        }
        if (!hit)
          return false;
      }
      if (fi === fl && pi === pl) {
        return true;
      } else if (fi === fl) {
        return partial;
      } else if (pi === pl) {
        return fi === fl - 1 && file[fi] === "";
      } else {
        throw new Error("wtf?");
      }
    }
    braceExpand() {
      return braceExpand(this.pattern, this.options);
    }
    parse(pattern) {
      assertValidPattern(pattern);
      const options = this.options;
      if (pattern === "**")
        return GLOBSTAR;
      if (pattern === "")
        return "";
      let m;
      let fastTest = null;
      if (m = pattern.match(starRE)) {
        fastTest = options.dot ? starTestDot : starTest;
      } else if (m = pattern.match(starDotExtRE)) {
        fastTest = (options.nocase ? options.dot ? starDotExtTestNocaseDot : starDotExtTestNocase : options.dot ? starDotExtTestDot : starDotExtTest)(m[1]);
      } else if (m = pattern.match(qmarksRE)) {
        fastTest = (options.nocase ? options.dot ? qmarksTestNocaseDot : qmarksTestNocase : options.dot ? qmarksTestDot : qmarksTest)(m);
      } else if (m = pattern.match(starDotStarRE)) {
        fastTest = options.dot ? starDotStarTestDot : starDotStarTest;
      } else if (m = pattern.match(dotStarRE)) {
        fastTest = dotStarTest;
      }
      const re = AST.fromGlob(pattern, this.options).toMMPattern();
      return fastTest ? Object.assign(re, { test: fastTest }) : re;
    }
    makeRe() {
      if (this.regexp || this.regexp === false)
        return this.regexp;
      const set = this.set;
      if (!set.length) {
        this.regexp = false;
        return this.regexp;
      }
      const options = this.options;
      const twoStar = options.noglobstar ? star2 : options.dot ? twoStarDot : twoStarNoDot;
      const flags = new Set(options.nocase ? ["i"] : []);
      let re = set.map((pattern) => {
        const pp = pattern.map((p) => {
          if (p instanceof RegExp) {
            for (const f of p.flags.split(""))
              flags.add(f);
          }
          return typeof p === "string" ? regExpEscape2(p) : p === GLOBSTAR ? GLOBSTAR : p._src;
        });
        pp.forEach((p, i) => {
          const next = pp[i + 1];
          const prev = pp[i - 1];
          if (p !== GLOBSTAR || prev === GLOBSTAR) {
            return;
          }
          if (prev === void 0) {
            if (next !== void 0 && next !== GLOBSTAR) {
              pp[i + 1] = "(?:\\/|" + twoStar + "\\/)?" + next;
            } else {
              pp[i] = twoStar;
            }
          } else if (next === void 0) {
            pp[i - 1] = prev + "(?:\\/|" + twoStar + ")?";
          } else if (next !== GLOBSTAR) {
            pp[i - 1] = prev + "(?:\\/|\\/" + twoStar + "\\/)" + next;
            pp[i + 1] = GLOBSTAR;
          }
        });
        return pp.filter((p) => p !== GLOBSTAR).join("/");
      }).join("|");
      const [open, close] = set.length > 1 ? ["(?:", ")"] : ["", ""];
      re = "^" + open + re + close + "$";
      if (this.negate)
        re = "^(?!" + re + ").+$";
      try {
        this.regexp = new RegExp(re, [...flags].join(""));
      } catch (ex) {
        this.regexp = false;
      }
      return this.regexp;
    }
    slashSplit(p) {
      if (this.preserveMultipleSlashes) {
        return p.split("/");
      } else if (this.isWindows && /^\/\/[^\/]+/.test(p)) {
        return ["", ...p.split(/\/+/)];
      } else {
        return p.split(/\/+/);
      }
    }
    match(f, partial = this.partial) {
      this.debug("match", f, this.pattern);
      if (this.comment) {
        return false;
      }
      if (this.empty) {
        return f === "";
      }
      if (f === "/" && partial) {
        return true;
      }
      const options = this.options;
      if (this.isWindows) {
        f = f.split("\\").join("/");
      }
      const ff = this.slashSplit(f);
      this.debug(this.pattern, "split", ff);
      const set = this.set;
      this.debug(this.pattern, "set", set);
      let filename = ff[ff.length - 1];
      if (!filename) {
        for (let i = ff.length - 2; !filename && i >= 0; i--) {
          filename = ff[i];
        }
      }
      for (let i = 0; i < set.length; i++) {
        const pattern = set[i];
        let file = ff;
        if (options.matchBase && pattern.length === 1) {
          file = [filename];
        }
        const hit = this.matchOne(file, pattern, partial);
        if (hit) {
          if (options.flipNegate) {
            return true;
          }
          return !this.negate;
        }
      }
      if (options.flipNegate) {
        return false;
      }
      return this.negate;
    }
    static defaults(def) {
      return minimatch.defaults(def).Minimatch;
    }
  };
  minimatch.AST = AST;
  minimatch.Minimatch = Minimatch;
  minimatch.escape = escape;
  minimatch.unescape = unescape;

  // node_modules/lru-cache/dist/esm/index.js
  var perf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
  var warned = /* @__PURE__ */ new Set();
  var PROCESS = typeof process === "object" && !!process ? process : {};
  var emitWarning = (msg, type, code2, fn) => {
    typeof PROCESS.emitWarning === "function" ? PROCESS.emitWarning(msg, type, code2, fn) : console.error(`[${code2}] ${type}: ${msg}`);
  };
  var AC = globalThis.AbortController;
  var AS = globalThis.AbortSignal;
  if (typeof AC === "undefined") {
    AS = class AbortSignal {
      onabort;
      _onabort = [];
      reason;
      aborted = false;
      addEventListener(_, fn) {
        this._onabort.push(fn);
      }
    };
    AC = class AbortController {
      constructor() {
        warnACPolyfill();
      }
      signal = new AS();
      abort(reason) {
        if (this.signal.aborted)
          return;
        this.signal.reason = reason;
        this.signal.aborted = true;
        for (const fn of this.signal._onabort) {
          fn(reason);
        }
        this.signal.onabort?.(reason);
      }
    };
    let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
    const warnACPolyfill = () => {
      if (!printACPolyfillWarning)
        return;
      printACPolyfillWarning = false;
      emitWarning("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", warnACPolyfill);
    };
  }
  var shouldWarn = (code2) => !warned.has(code2);
  var TYPE = Symbol("type");
  var isPosInt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n);
  var getUintArray = (max) => !isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
  var ZeroArray = class extends Array {
    constructor(size) {
      super(size);
      this.fill(0);
    }
  };
  var Stack = class _Stack {
    heap;
    length;
    // private constructor
    static #constructing = false;
    static create(max) {
      const HeapCls = getUintArray(max);
      if (!HeapCls)
        return [];
      _Stack.#constructing = true;
      const s = new _Stack(max, HeapCls);
      _Stack.#constructing = false;
      return s;
    }
    constructor(max, HeapCls) {
      if (!_Stack.#constructing) {
        throw new TypeError("instantiate Stack using Stack.create(n)");
      }
      this.heap = new HeapCls(max);
      this.length = 0;
    }
    push(n) {
      this.heap[this.length++] = n;
    }
    pop() {
      return this.heap[--this.length];
    }
  };
  var LRUCache = class _LRUCache {
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    #max;
    #maxSize;
    #dispose;
    #disposeAfter;
    #fetchMethod;
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */
    ttl;
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
    ttlResolution;
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
    ttlAutopurge;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
    updateAgeOnGet;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
    updateAgeOnHas;
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */
    allowStale;
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
    noDisposeOnSet;
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
    noUpdateTTL;
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
    maxEntrySize;
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
    sizeCalculation;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
    noDeleteOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
    noDeleteOnStaleGet;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
    allowStaleOnFetchAbort;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
    allowStaleOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
    ignoreFetchAbort;
    // computed properties
    #size;
    #calculatedSize;
    #keyMap;
    #keyList;
    #valList;
    #next;
    #prev;
    #head;
    #tail;
    #free;
    #disposed;
    #sizes;
    #starts;
    #ttls;
    #hasDispose;
    #hasFetchMethod;
    #hasDisposeAfter;
    /**
     * Do not call this method unless you need to inspect the
     * inner workings of the cache.  If anything returned by this
     * object is modified in any way, strange breakage may occur.
     *
     * These fields are private for a reason!
     *
     * @internal
     */
    static unsafeExposeInternals(c) {
      return {
        // properties
        starts: c.#starts,
        ttls: c.#ttls,
        sizes: c.#sizes,
        keyMap: c.#keyMap,
        keyList: c.#keyList,
        valList: c.#valList,
        next: c.#next,
        prev: c.#prev,
        get head() {
          return c.#head;
        },
        get tail() {
          return c.#tail;
        },
        free: c.#free,
        // methods
        isBackgroundFetch: (p) => c.#isBackgroundFetch(p),
        backgroundFetch: (k, index, options, context) => c.#backgroundFetch(k, index, options, context),
        moveToTail: (index) => c.#moveToTail(index),
        indexes: (options) => c.#indexes(options),
        rindexes: (options) => c.#rindexes(options),
        isStale: (index) => c.#isStale(index)
      };
    }
    // Protected read-only members
    /**
     * {@link LRUCache.OptionsBase.max} (read-only)
     */
    get max() {
      return this.#max;
    }
    /**
     * {@link LRUCache.OptionsBase.maxSize} (read-only)
     */
    get maxSize() {
      return this.#maxSize;
    }
    /**
     * The total computed size of items in the cache (read-only)
     */
    get calculatedSize() {
      return this.#calculatedSize;
    }
    /**
     * The number of items stored in the cache (read-only)
     */
    get size() {
      return this.#size;
    }
    /**
     * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
     */
    get fetchMethod() {
      return this.#fetchMethod;
    }
    /**
     * {@link LRUCache.OptionsBase.dispose} (read-only)
     */
    get dispose() {
      return this.#dispose;
    }
    /**
     * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
     */
    get disposeAfter() {
      return this.#disposeAfter;
    }
    constructor(options) {
      const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
      if (max !== 0 && !isPosInt(max)) {
        throw new TypeError("max option must be a nonnegative integer");
      }
      const UintArray = max ? getUintArray(max) : Array;
      if (!UintArray) {
        throw new Error("invalid max value: " + max);
      }
      this.#max = max;
      this.#maxSize = maxSize;
      this.maxEntrySize = maxEntrySize || this.#maxSize;
      this.sizeCalculation = sizeCalculation;
      if (this.sizeCalculation) {
        if (!this.#maxSize && !this.maxEntrySize) {
          throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
        }
        if (typeof this.sizeCalculation !== "function") {
          throw new TypeError("sizeCalculation set to non-function");
        }
      }
      if (fetchMethod !== void 0 && typeof fetchMethod !== "function") {
        throw new TypeError("fetchMethod must be a function if specified");
      }
      this.#fetchMethod = fetchMethod;
      this.#hasFetchMethod = !!fetchMethod;
      this.#keyMap = /* @__PURE__ */ new Map();
      this.#keyList = new Array(max).fill(void 0);
      this.#valList = new Array(max).fill(void 0);
      this.#next = new UintArray(max);
      this.#prev = new UintArray(max);
      this.#head = 0;
      this.#tail = 0;
      this.#free = Stack.create(max);
      this.#size = 0;
      this.#calculatedSize = 0;
      if (typeof dispose === "function") {
        this.#dispose = dispose;
      }
      if (typeof disposeAfter === "function") {
        this.#disposeAfter = disposeAfter;
        this.#disposed = [];
      } else {
        this.#disposeAfter = void 0;
        this.#disposed = void 0;
      }
      this.#hasDispose = !!this.#dispose;
      this.#hasDisposeAfter = !!this.#disposeAfter;
      this.noDisposeOnSet = !!noDisposeOnSet;
      this.noUpdateTTL = !!noUpdateTTL;
      this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
      this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
      this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
      this.ignoreFetchAbort = !!ignoreFetchAbort;
      if (this.maxEntrySize !== 0) {
        if (this.#maxSize !== 0) {
          if (!isPosInt(this.#maxSize)) {
            throw new TypeError("maxSize must be a positive integer if specified");
          }
        }
        if (!isPosInt(this.maxEntrySize)) {
          throw new TypeError("maxEntrySize must be a positive integer if specified");
        }
        this.#initializeSizeTracking();
      }
      this.allowStale = !!allowStale;
      this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
      this.updateAgeOnGet = !!updateAgeOnGet;
      this.updateAgeOnHas = !!updateAgeOnHas;
      this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
      this.ttlAutopurge = !!ttlAutopurge;
      this.ttl = ttl || 0;
      if (this.ttl) {
        if (!isPosInt(this.ttl)) {
          throw new TypeError("ttl must be a positive integer if specified");
        }
        this.#initializeTTLTracking();
      }
      if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
        throw new TypeError("At least one of max, maxSize, or ttl is required");
      }
      if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
        const code2 = "LRU_CACHE_UNBOUNDED";
        if (shouldWarn(code2)) {
          warned.add(code2);
          const msg = "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.";
          emitWarning(msg, "UnboundedCacheWarning", code2, _LRUCache);
        }
      }
    }
    /**
     * Return the remaining TTL time for a given entry key
     */
    getRemainingTTL(key) {
      return this.#keyMap.has(key) ? Infinity : 0;
    }
    #initializeTTLTracking() {
      const ttls = new ZeroArray(this.#max);
      const starts = new ZeroArray(this.#max);
      this.#ttls = ttls;
      this.#starts = starts;
      this.#setItemTTL = (index, ttl, start = perf.now()) => {
        starts[index] = ttl !== 0 ? start : 0;
        ttls[index] = ttl;
        if (ttl !== 0 && this.ttlAutopurge) {
          const t = setTimeout(() => {
            if (this.#isStale(index)) {
              this.delete(this.#keyList[index]);
            }
          }, ttl + 1);
          if (t.unref) {
            t.unref();
          }
        }
      };
      this.#updateItemAge = (index) => {
        starts[index] = ttls[index] !== 0 ? perf.now() : 0;
      };
      this.#statusTTL = (status, index) => {
        if (ttls[index]) {
          const ttl = ttls[index];
          const start = starts[index];
          if (!ttl || !start)
            return;
          status.ttl = ttl;
          status.start = start;
          status.now = cachedNow || getNow();
          const age = status.now - start;
          status.remainingTTL = ttl - age;
        }
      };
      let cachedNow = 0;
      const getNow = () => {
        const n = perf.now();
        if (this.ttlResolution > 0) {
          cachedNow = n;
          const t = setTimeout(() => cachedNow = 0, this.ttlResolution);
          if (t.unref) {
            t.unref();
          }
        }
        return n;
      };
      this.getRemainingTTL = (key) => {
        const index = this.#keyMap.get(key);
        if (index === void 0) {
          return 0;
        }
        const ttl = ttls[index];
        const start = starts[index];
        if (!ttl || !start) {
          return Infinity;
        }
        const age = (cachedNow || getNow()) - start;
        return ttl - age;
      };
      this.#isStale = (index) => {
        const s = starts[index];
        const t = ttls[index];
        return !!t && !!s && (cachedNow || getNow()) - s > t;
      };
    }
    // conditionally set private methods related to TTL
    #updateItemAge = () => {
    };
    #statusTTL = () => {
    };
    #setItemTTL = () => {
    };
    /* c8 ignore stop */
    #isStale = () => false;
    #initializeSizeTracking() {
      const sizes = new ZeroArray(this.#max);
      this.#calculatedSize = 0;
      this.#sizes = sizes;
      this.#removeItemSize = (index) => {
        this.#calculatedSize -= sizes[index];
        sizes[index] = 0;
      };
      this.#requireSize = (k, v, size, sizeCalculation) => {
        if (this.#isBackgroundFetch(v)) {
          return 0;
        }
        if (!isPosInt(size)) {
          if (sizeCalculation) {
            if (typeof sizeCalculation !== "function") {
              throw new TypeError("sizeCalculation must be a function");
            }
            size = sizeCalculation(v, k);
            if (!isPosInt(size)) {
              throw new TypeError("sizeCalculation return invalid (expect positive integer)");
            }
          } else {
            throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
          }
        }
        return size;
      };
      this.#addItemSize = (index, size, status) => {
        sizes[index] = size;
        if (this.#maxSize) {
          const maxSize = this.#maxSize - sizes[index];
          while (this.#calculatedSize > maxSize) {
            this.#evict(true);
          }
        }
        this.#calculatedSize += sizes[index];
        if (status) {
          status.entrySize = size;
          status.totalCalculatedSize = this.#calculatedSize;
        }
      };
    }
    #removeItemSize = (_i) => {
    };
    #addItemSize = (_i, _s, _st) => {
    };
    #requireSize = (_k, _v, size, sizeCalculation) => {
      if (size || sizeCalculation) {
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      }
      return 0;
    };
    *#indexes({ allowStale = this.allowStale } = {}) {
      if (this.#size) {
        for (let i = this.#tail; true; ) {
          if (!this.#isValidIndex(i)) {
            break;
          }
          if (allowStale || !this.#isStale(i)) {
            yield i;
          }
          if (i === this.#head) {
            break;
          } else {
            i = this.#prev[i];
          }
        }
      }
    }
    *#rindexes({ allowStale = this.allowStale } = {}) {
      if (this.#size) {
        for (let i = this.#head; true; ) {
          if (!this.#isValidIndex(i)) {
            break;
          }
          if (allowStale || !this.#isStale(i)) {
            yield i;
          }
          if (i === this.#tail) {
            break;
          } else {
            i = this.#next[i];
          }
        }
      }
    }
    #isValidIndex(index) {
      return index !== void 0 && this.#keyMap.get(this.#keyList[index]) === index;
    }
    /**
     * Return a generator yielding `[key, value]` pairs,
     * in order from most recently used to least recently used.
     */
    *entries() {
      for (const i of this.#indexes()) {
        if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
          yield [this.#keyList[i], this.#valList[i]];
        }
      }
    }
    /**
     * Inverse order version of {@link LRUCache.entries}
     *
     * Return a generator yielding `[key, value]` pairs,
     * in order from least recently used to most recently used.
     */
    *rentries() {
      for (const i of this.#rindexes()) {
        if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
          yield [this.#keyList[i], this.#valList[i]];
        }
      }
    }
    /**
     * Return a generator yielding the keys in the cache,
     * in order from most recently used to least recently used.
     */
    *keys() {
      for (const i of this.#indexes()) {
        const k = this.#keyList[i];
        if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
          yield k;
        }
      }
    }
    /**
     * Inverse order version of {@link LRUCache.keys}
     *
     * Return a generator yielding the keys in the cache,
     * in order from least recently used to most recently used.
     */
    *rkeys() {
      for (const i of this.#rindexes()) {
        const k = this.#keyList[i];
        if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
          yield k;
        }
      }
    }
    /**
     * Return a generator yielding the values in the cache,
     * in order from most recently used to least recently used.
     */
    *values() {
      for (const i of this.#indexes()) {
        const v = this.#valList[i];
        if (v !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
          yield this.#valList[i];
        }
      }
    }
    /**
     * Inverse order version of {@link LRUCache.values}
     *
     * Return a generator yielding the values in the cache,
     * in order from least recently used to most recently used.
     */
    *rvalues() {
      for (const i of this.#rindexes()) {
        const v = this.#valList[i];
        if (v !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
          yield this.#valList[i];
        }
      }
    }
    /**
     * Iterating over the cache itself yields the same results as
     * {@link LRUCache.entries}
     */
    [Symbol.iterator]() {
      return this.entries();
    }
    /**
     * Find a value for which the supplied fn method returns a truthy value,
     * similar to Array.find().  fn is called as fn(value, key, cache).
     */
    find(fn, getOptions = {}) {
      for (const i of this.#indexes()) {
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        if (value === void 0)
          continue;
        if (fn(value, this.#keyList[i], this)) {
          return this.get(this.#keyList[i], getOptions);
        }
      }
    }
    /**
     * Call the supplied function on each item in the cache, in order from
     * most recently used to least recently used.  fn is called as
     * fn(value, key, cache).  Does not update age or recenty of use.
     * Does not iterate over stale values.
     */
    forEach(fn, thisp = this) {
      for (const i of this.#indexes()) {
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        if (value === void 0)
          continue;
        fn.call(thisp, value, this.#keyList[i], this);
      }
    }
    /**
     * The same as {@link LRUCache.forEach} but items are iterated over in
     * reverse order.  (ie, less recently used items are iterated over first.)
     */
    rforEach(fn, thisp = this) {
      for (const i of this.#rindexes()) {
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        if (value === void 0)
          continue;
        fn.call(thisp, value, this.#keyList[i], this);
      }
    }
    /**
     * Delete any stale entries. Returns true if anything was removed,
     * false otherwise.
     */
    purgeStale() {
      let deleted = false;
      for (const i of this.#rindexes({ allowStale: true })) {
        if (this.#isStale(i)) {
          this.delete(this.#keyList[i]);
          deleted = true;
        }
      }
      return deleted;
    }
    /**
     * Get the extended info about a given entry, to get its value, size, and
     * TTL info simultaneously. Like {@link LRUCache#dump}, but just for a
     * single key. Always returns stale values, if their info is found in the
     * cache, so be sure to check for expired TTLs if relevant.
     */
    info(key) {
      const i = this.#keyMap.get(key);
      if (i === void 0)
        return void 0;
      const v = this.#valList[i];
      const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        return void 0;
      const entry = { value };
      if (this.#ttls && this.#starts) {
        const ttl = this.#ttls[i];
        const start = this.#starts[i];
        if (ttl && start) {
          const remain = ttl - (perf.now() - start);
          entry.ttl = remain;
          entry.start = Date.now();
        }
      }
      if (this.#sizes) {
        entry.size = this.#sizes[i];
      }
      return entry;
    }
    /**
     * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
     * passed to cache.load()
     */
    dump() {
      const arr = [];
      for (const i of this.#indexes({ allowStale: true })) {
        const key = this.#keyList[i];
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        if (value === void 0 || key === void 0)
          continue;
        const entry = { value };
        if (this.#ttls && this.#starts) {
          entry.ttl = this.#ttls[i];
          const age = perf.now() - this.#starts[i];
          entry.start = Math.floor(Date.now() - age);
        }
        if (this.#sizes) {
          entry.size = this.#sizes[i];
        }
        arr.unshift([key, entry]);
      }
      return arr;
    }
    /**
     * Reset the cache and load in the items in entries in the order listed.
     * Note that the shape of the resulting cache may be different if the
     * same options are not used in both caches.
     */
    load(arr) {
      this.clear();
      for (const [key, entry] of arr) {
        if (entry.start) {
          const age = Date.now() - entry.start;
          entry.start = perf.now() - age;
        }
        this.set(key, entry.value, entry);
      }
    }
    /**
     * Add a value to the cache.
     *
     * Note: if `undefined` is specified as a value, this is an alias for
     * {@link LRUCache#delete}
     */
    set(k, v, setOptions = {}) {
      if (v === void 0) {
        this.delete(k);
        return this;
      }
      const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
      let { noUpdateTTL = this.noUpdateTTL } = setOptions;
      const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
      if (this.maxEntrySize && size > this.maxEntrySize) {
        if (status) {
          status.set = "miss";
          status.maxEntrySizeExceeded = true;
        }
        this.delete(k);
        return this;
      }
      let index = this.#size === 0 ? void 0 : this.#keyMap.get(k);
      if (index === void 0) {
        index = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
        this.#keyList[index] = k;
        this.#valList[index] = v;
        this.#keyMap.set(k, index);
        this.#next[this.#tail] = index;
        this.#prev[index] = this.#tail;
        this.#tail = index;
        this.#size++;
        this.#addItemSize(index, size, status);
        if (status)
          status.set = "add";
        noUpdateTTL = false;
      } else {
        this.#moveToTail(index);
        const oldVal = this.#valList[index];
        if (v !== oldVal) {
          if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
            oldVal.__abortController.abort(new Error("replaced"));
            const { __staleWhileFetching: s } = oldVal;
            if (s !== void 0 && !noDisposeOnSet) {
              if (this.#hasDispose) {
                this.#dispose?.(s, k, "set");
              }
              if (this.#hasDisposeAfter) {
                this.#disposed?.push([s, k, "set"]);
              }
            }
          } else if (!noDisposeOnSet) {
            if (this.#hasDispose) {
              this.#dispose?.(oldVal, k, "set");
            }
            if (this.#hasDisposeAfter) {
              this.#disposed?.push([oldVal, k, "set"]);
            }
          }
          this.#removeItemSize(index);
          this.#addItemSize(index, size, status);
          this.#valList[index] = v;
          if (status) {
            status.set = "replace";
            const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
            if (oldValue !== void 0)
              status.oldValue = oldValue;
          }
        } else if (status) {
          status.set = "update";
        }
      }
      if (ttl !== 0 && !this.#ttls) {
        this.#initializeTTLTracking();
      }
      if (this.#ttls) {
        if (!noUpdateTTL) {
          this.#setItemTTL(index, ttl, start);
        }
        if (status)
          this.#statusTTL(status, index);
      }
      if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
        const dt = this.#disposed;
        let task;
        while (task = dt?.shift()) {
          this.#disposeAfter?.(...task);
        }
      }
      return this;
    }
    /**
     * Evict the least recently used item, returning its value or
     * `undefined` if cache is empty.
     */
    pop() {
      try {
        while (this.#size) {
          const val = this.#valList[this.#head];
          this.#evict(true);
          if (this.#isBackgroundFetch(val)) {
            if (val.__staleWhileFetching) {
              return val.__staleWhileFetching;
            }
          } else if (val !== void 0) {
            return val;
          }
        }
      } finally {
        if (this.#hasDisposeAfter && this.#disposed) {
          const dt = this.#disposed;
          let task;
          while (task = dt?.shift()) {
            this.#disposeAfter?.(...task);
          }
        }
      }
    }
    #evict(free) {
      const head = this.#head;
      const k = this.#keyList[head];
      const v = this.#valList[head];
      if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
        v.__abortController.abort(new Error("evicted"));
      } else if (this.#hasDispose || this.#hasDisposeAfter) {
        if (this.#hasDispose) {
          this.#dispose?.(v, k, "evict");
        }
        if (this.#hasDisposeAfter) {
          this.#disposed?.push([v, k, "evict"]);
        }
      }
      this.#removeItemSize(head);
      if (free) {
        this.#keyList[head] = void 0;
        this.#valList[head] = void 0;
        this.#free.push(head);
      }
      if (this.#size === 1) {
        this.#head = this.#tail = 0;
        this.#free.length = 0;
      } else {
        this.#head = this.#next[head];
      }
      this.#keyMap.delete(k);
      this.#size--;
      return head;
    }
    /**
     * Check if a key is in the cache, without updating the recency of use.
     * Will return false if the item is stale, even though it is technically
     * in the cache.
     *
     * Will not update item age unless
     * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
     */
    has(k, hasOptions = {}) {
      const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
      const index = this.#keyMap.get(k);
      if (index !== void 0) {
        const v = this.#valList[index];
        if (this.#isBackgroundFetch(v) && v.__staleWhileFetching === void 0) {
          return false;
        }
        if (!this.#isStale(index)) {
          if (updateAgeOnHas) {
            this.#updateItemAge(index);
          }
          if (status) {
            status.has = "hit";
            this.#statusTTL(status, index);
          }
          return true;
        } else if (status) {
          status.has = "stale";
          this.#statusTTL(status, index);
        }
      } else if (status) {
        status.has = "miss";
      }
      return false;
    }
    /**
     * Like {@link LRUCache#get} but doesn't update recency or delete stale
     * items.
     *
     * Returns `undefined` if the item is stale, unless
     * {@link LRUCache.OptionsBase.allowStale} is set.
     */
    peek(k, peekOptions = {}) {
      const { allowStale = this.allowStale } = peekOptions;
      const index = this.#keyMap.get(k);
      if (index === void 0 || !allowStale && this.#isStale(index)) {
        return;
      }
      const v = this.#valList[index];
      return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
    }
    #backgroundFetch(k, index, options, context) {
      const v = index === void 0 ? void 0 : this.#valList[index];
      if (this.#isBackgroundFetch(v)) {
        return v;
      }
      const ac = new AC();
      const { signal } = options;
      signal?.addEventListener("abort", () => ac.abort(signal.reason), {
        signal: ac.signal
      });
      const fetchOpts = {
        signal: ac.signal,
        options,
        context
      };
      const cb = (v2, updateCache = false) => {
        const { aborted } = ac.signal;
        const ignoreAbort = options.ignoreFetchAbort && v2 !== void 0;
        if (options.status) {
          if (aborted && !updateCache) {
            options.status.fetchAborted = true;
            options.status.fetchError = ac.signal.reason;
            if (ignoreAbort)
              options.status.fetchAbortIgnored = true;
          } else {
            options.status.fetchResolved = true;
          }
        }
        if (aborted && !ignoreAbort && !updateCache) {
          return fetchFail(ac.signal.reason);
        }
        const bf2 = p;
        if (this.#valList[index] === p) {
          if (v2 === void 0) {
            if (bf2.__staleWhileFetching) {
              this.#valList[index] = bf2.__staleWhileFetching;
            } else {
              this.delete(k);
            }
          } else {
            if (options.status)
              options.status.fetchUpdated = true;
            this.set(k, v2, fetchOpts.options);
          }
        }
        return v2;
      };
      const eb = (er) => {
        if (options.status) {
          options.status.fetchRejected = true;
          options.status.fetchError = er;
        }
        return fetchFail(er);
      };
      const fetchFail = (er) => {
        const { aborted } = ac.signal;
        const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
        const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
        const noDelete = allowStale || options.noDeleteOnFetchRejection;
        const bf2 = p;
        if (this.#valList[index] === p) {
          const del = !noDelete || bf2.__staleWhileFetching === void 0;
          if (del) {
            this.delete(k);
          } else if (!allowStaleAborted) {
            this.#valList[index] = bf2.__staleWhileFetching;
          }
        }
        if (allowStale) {
          if (options.status && bf2.__staleWhileFetching !== void 0) {
            options.status.returnedStale = true;
          }
          return bf2.__staleWhileFetching;
        } else if (bf2.__returned === bf2) {
          throw er;
        }
      };
      const pcall = (res, rej) => {
        const fmp = this.#fetchMethod?.(k, v, fetchOpts);
        if (fmp && fmp instanceof Promise) {
          fmp.then((v2) => res(v2 === void 0 ? void 0 : v2), rej);
        }
        ac.signal.addEventListener("abort", () => {
          if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
            res(void 0);
            if (options.allowStaleOnFetchAbort) {
              res = (v2) => cb(v2, true);
            }
          }
        });
      };
      if (options.status)
        options.status.fetchDispatched = true;
      const p = new Promise(pcall).then(cb, eb);
      const bf = Object.assign(p, {
        __abortController: ac,
        __staleWhileFetching: v,
        __returned: void 0
      });
      if (index === void 0) {
        this.set(k, bf, { ...fetchOpts.options, status: void 0 });
        index = this.#keyMap.get(k);
      } else {
        this.#valList[index] = bf;
      }
      return bf;
    }
    #isBackgroundFetch(p) {
      if (!this.#hasFetchMethod)
        return false;
      const b = p;
      return !!b && b instanceof Promise && b.hasOwnProperty("__staleWhileFetching") && b.__abortController instanceof AC;
    }
    async fetch(k, fetchOptions = {}) {
      const {
        // get options
        allowStale = this.allowStale,
        updateAgeOnGet = this.updateAgeOnGet,
        noDeleteOnStaleGet = this.noDeleteOnStaleGet,
        // set options
        ttl = this.ttl,
        noDisposeOnSet = this.noDisposeOnSet,
        size = 0,
        sizeCalculation = this.sizeCalculation,
        noUpdateTTL = this.noUpdateTTL,
        // fetch exclusive options
        noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
        allowStaleOnFetchRejection = this.allowStaleOnFetchRejection,
        ignoreFetchAbort = this.ignoreFetchAbort,
        allowStaleOnFetchAbort = this.allowStaleOnFetchAbort,
        context,
        forceRefresh = false,
        status,
        signal
      } = fetchOptions;
      if (!this.#hasFetchMethod) {
        if (status)
          status.fetch = "get";
        return this.get(k, {
          allowStale,
          updateAgeOnGet,
          noDeleteOnStaleGet,
          status
        });
      }
      const options = {
        allowStale,
        updateAgeOnGet,
        noDeleteOnStaleGet,
        ttl,
        noDisposeOnSet,
        size,
        sizeCalculation,
        noUpdateTTL,
        noDeleteOnFetchRejection,
        allowStaleOnFetchRejection,
        allowStaleOnFetchAbort,
        ignoreFetchAbort,
        status,
        signal
      };
      let index = this.#keyMap.get(k);
      if (index === void 0) {
        if (status)
          status.fetch = "miss";
        const p = this.#backgroundFetch(k, index, options, context);
        return p.__returned = p;
      } else {
        const v = this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
          const stale = allowStale && v.__staleWhileFetching !== void 0;
          if (status) {
            status.fetch = "inflight";
            if (stale)
              status.returnedStale = true;
          }
          return stale ? v.__staleWhileFetching : v.__returned = v;
        }
        const isStale = this.#isStale(index);
        if (!forceRefresh && !isStale) {
          if (status)
            status.fetch = "hit";
          this.#moveToTail(index);
          if (updateAgeOnGet) {
            this.#updateItemAge(index);
          }
          if (status)
            this.#statusTTL(status, index);
          return v;
        }
        const p = this.#backgroundFetch(k, index, options, context);
        const hasStale = p.__staleWhileFetching !== void 0;
        const staleVal = hasStale && allowStale;
        if (status) {
          status.fetch = isStale ? "stale" : "refresh";
          if (staleVal && isStale)
            status.returnedStale = true;
        }
        return staleVal ? p.__staleWhileFetching : p.__returned = p;
      }
    }
    /**
     * Return a value from the cache. Will update the recency of the cache
     * entry found.
     *
     * If the key is not found, get() will return `undefined`.
     */
    get(k, getOptions = {}) {
      const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
      const index = this.#keyMap.get(k);
      if (index !== void 0) {
        const value = this.#valList[index];
        const fetching = this.#isBackgroundFetch(value);
        if (status)
          this.#statusTTL(status, index);
        if (this.#isStale(index)) {
          if (status)
            status.get = "stale";
          if (!fetching) {
            if (!noDeleteOnStaleGet) {
              this.delete(k);
            }
            if (status && allowStale)
              status.returnedStale = true;
            return allowStale ? value : void 0;
          } else {
            if (status && allowStale && value.__staleWhileFetching !== void 0) {
              status.returnedStale = true;
            }
            return allowStale ? value.__staleWhileFetching : void 0;
          }
        } else {
          if (status)
            status.get = "hit";
          if (fetching) {
            return value.__staleWhileFetching;
          }
          this.#moveToTail(index);
          if (updateAgeOnGet) {
            this.#updateItemAge(index);
          }
          return value;
        }
      } else if (status) {
        status.get = "miss";
      }
    }
    #connect(p, n) {
      this.#prev[n] = p;
      this.#next[p] = n;
    }
    #moveToTail(index) {
      if (index !== this.#tail) {
        if (index === this.#head) {
          this.#head = this.#next[index];
        } else {
          this.#connect(this.#prev[index], this.#next[index]);
        }
        this.#connect(this.#tail, index);
        this.#tail = index;
      }
    }
    /**
     * Deletes a key out of the cache.
     * Returns true if the key was deleted, false otherwise.
     */
    delete(k) {
      let deleted = false;
      if (this.#size !== 0) {
        const index = this.#keyMap.get(k);
        if (index !== void 0) {
          deleted = true;
          if (this.#size === 1) {
            this.clear();
          } else {
            this.#removeItemSize(index);
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
              v.__abortController.abort(new Error("deleted"));
            } else if (this.#hasDispose || this.#hasDisposeAfter) {
              if (this.#hasDispose) {
                this.#dispose?.(v, k, "delete");
              }
              if (this.#hasDisposeAfter) {
                this.#disposed?.push([v, k, "delete"]);
              }
            }
            this.#keyMap.delete(k);
            this.#keyList[index] = void 0;
            this.#valList[index] = void 0;
            if (index === this.#tail) {
              this.#tail = this.#prev[index];
            } else if (index === this.#head) {
              this.#head = this.#next[index];
            } else {
              const pi = this.#prev[index];
              this.#next[pi] = this.#next[index];
              const ni = this.#next[index];
              this.#prev[ni] = this.#prev[index];
            }
            this.#size--;
            this.#free.push(index);
          }
        }
      }
      if (this.#hasDisposeAfter && this.#disposed?.length) {
        const dt = this.#disposed;
        let task;
        while (task = dt?.shift()) {
          this.#disposeAfter?.(...task);
        }
      }
      return deleted;
    }
    /**
     * Clear the cache entirely, throwing away all values.
     */
    clear() {
      for (const index of this.#rindexes({ allowStale: true })) {
        const v = this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
          v.__abortController.abort(new Error("deleted"));
        } else {
          const k = this.#keyList[index];
          if (this.#hasDispose) {
            this.#dispose?.(v, k, "delete");
          }
          if (this.#hasDisposeAfter) {
            this.#disposed?.push([v, k, "delete"]);
          }
        }
      }
      this.#keyMap.clear();
      this.#valList.fill(void 0);
      this.#keyList.fill(void 0);
      if (this.#ttls && this.#starts) {
        this.#ttls.fill(0);
        this.#starts.fill(0);
      }
      if (this.#sizes) {
        this.#sizes.fill(0);
      }
      this.#head = 0;
      this.#tail = 0;
      this.#free.length = 0;
      this.#calculatedSize = 0;
      this.#size = 0;
      if (this.#hasDisposeAfter && this.#disposed) {
        const dt = this.#disposed;
        let task;
        while (task = dt?.shift()) {
          this.#disposeAfter?.(...task);
        }
      }
    }
  };

  // node_modules/path-scurry/dist/mjs/index.js
  var import_path = __require("path");
  var import_url = __require("url");
  var actualFS = __toESM2(__require("fs"), 1);
  var import_fs = __require("fs");
  var import_promises = __require("fs/promises");

  // node_modules/minipass/dist/esm/index.js
  var import_events = __require("events");
  var import_stream = __toESM2(__require("stream"), 1);
  var import_string_decoder = __require("string_decoder");
  var proc = typeof process === "object" && process ? process : {
    stdout: null,
    stderr: null
  };
  var isStream = (s) => !!s && typeof s === "object" && (s instanceof Minipass || s instanceof import_stream.default || isReadable(s) || isWritable(s));
  var isReadable = (s) => !!s && typeof s === "object" && s instanceof import_events.EventEmitter && typeof s.pipe === "function" && // node core Writable streams have a pipe() method, but it throws
  s.pipe !== import_stream.default.Writable.prototype.pipe;
  var isWritable = (s) => !!s && typeof s === "object" && s instanceof import_events.EventEmitter && typeof s.write === "function" && typeof s.end === "function";
  var EOF = Symbol("EOF");
  var MAYBE_EMIT_END = Symbol("maybeEmitEnd");
  var EMITTED_END = Symbol("emittedEnd");
  var EMITTING_END = Symbol("emittingEnd");
  var EMITTED_ERROR = Symbol("emittedError");
  var CLOSED = Symbol("closed");
  var READ = Symbol("read");
  var FLUSH = Symbol("flush");
  var FLUSHCHUNK = Symbol("flushChunk");
  var ENCODING = Symbol("encoding");
  var DECODER = Symbol("decoder");
  var FLOWING = Symbol("flowing");
  var PAUSED = Symbol("paused");
  var RESUME = Symbol("resume");
  var BUFFER = Symbol("buffer");
  var PIPES = Symbol("pipes");
  var BUFFERLENGTH = Symbol("bufferLength");
  var BUFFERPUSH = Symbol("bufferPush");
  var BUFFERSHIFT = Symbol("bufferShift");
  var OBJECTMODE = Symbol("objectMode");
  var DESTROYED = Symbol("destroyed");
  var ERROR = Symbol("error");
  var EMITDATA = Symbol("emitData");
  var EMITEND = Symbol("emitEnd");
  var EMITEND2 = Symbol("emitEnd2");
  var ASYNC = Symbol("async");
  var ABORT = Symbol("abort");
  var ABORTED = Symbol("aborted");
  var SIGNAL = Symbol("signal");
  var DATALISTENERS = Symbol("dataListeners");
  var DISCARDED = Symbol("discarded");
  var defer = (fn) => Promise.resolve().then(fn);
  var nodefer = (fn) => fn();
  var isEndish = (ev) => ev === "end" || ev === "finish" || ev === "prefinish";
  var isArrayBufferLike = (b) => b instanceof ArrayBuffer || !!b && typeof b === "object" && b.constructor && b.constructor.name === "ArrayBuffer" && b.byteLength >= 0;
  var isArrayBufferView = (b) => !Buffer.isBuffer(b) && ArrayBuffer.isView(b);
  var Pipe = class {
    src;
    dest;
    opts;
    ondrain;
    constructor(src, dest, opts2) {
      this.src = src;
      this.dest = dest;
      this.opts = opts2;
      this.ondrain = () => src[RESUME]();
      this.dest.on("drain", this.ondrain);
    }
    unpipe() {
      this.dest.removeListener("drain", this.ondrain);
    }
    // only here for the prototype
    /* c8 ignore start */
    proxyErrors(_er) {
    }
    /* c8 ignore stop */
    end() {
      this.unpipe();
      if (this.opts.end)
        this.dest.end();
    }
  };
  var PipeProxyErrors = class extends Pipe {
    unpipe() {
      this.src.removeListener("error", this.proxyErrors);
      super.unpipe();
    }
    constructor(src, dest, opts2) {
      super(src, dest, opts2);
      this.proxyErrors = (er) => dest.emit("error", er);
      src.on("error", this.proxyErrors);
    }
  };
  var isObjectModeOptions = (o) => !!o.objectMode;
  var isEncodingOptions = (o) => !o.objectMode && !!o.encoding && o.encoding !== "buffer";
  var Minipass = class extends import_events.EventEmitter {
    [FLOWING] = false;
    [PAUSED] = false;
    [PIPES] = [];
    [BUFFER] = [];
    [OBJECTMODE];
    [ENCODING];
    [ASYNC];
    [DECODER];
    [EOF] = false;
    [EMITTED_END] = false;
    [EMITTING_END] = false;
    [CLOSED] = false;
    [EMITTED_ERROR] = null;
    [BUFFERLENGTH] = 0;
    [DESTROYED] = false;
    [SIGNAL];
    [ABORTED] = false;
    [DATALISTENERS] = 0;
    [DISCARDED] = false;
    /**
     * true if the stream can be written
     */
    writable = true;
    /**
     * true if the stream can be read
     */
    readable = true;
    /**
     * If `RType` is Buffer, then options do not need to be provided.
     * Otherwise, an options object must be provided to specify either
     * {@link Minipass.SharedOptions.objectMode} or
     * {@link Minipass.SharedOptions.encoding}, as appropriate.
     */
    constructor(...args) {
      const options = args[0] || {};
      super();
      if (options.objectMode && typeof options.encoding === "string") {
        throw new TypeError("Encoding and objectMode may not be used together");
      }
      if (isObjectModeOptions(options)) {
        this[OBJECTMODE] = true;
        this[ENCODING] = null;
      } else if (isEncodingOptions(options)) {
        this[ENCODING] = options.encoding;
        this[OBJECTMODE] = false;
      } else {
        this[OBJECTMODE] = false;
        this[ENCODING] = null;
      }
      this[ASYNC] = !!options.async;
      this[DECODER] = this[ENCODING] ? new import_string_decoder.StringDecoder(this[ENCODING]) : null;
      if (options && options.debugExposeBuffer === true) {
        Object.defineProperty(this, "buffer", { get: () => this[BUFFER] });
      }
      if (options && options.debugExposePipes === true) {
        Object.defineProperty(this, "pipes", { get: () => this[PIPES] });
      }
      const { signal } = options;
      if (signal) {
        this[SIGNAL] = signal;
        if (signal.aborted) {
          this[ABORT]();
        } else {
          signal.addEventListener("abort", () => this[ABORT]());
        }
      }
    }
    /**
     * The amount of data stored in the buffer waiting to be read.
     *
     * For Buffer strings, this will be the total byte length.
     * For string encoding streams, this will be the string character length,
     * according to JavaScript's `string.length` logic.
     * For objectMode streams, this is a count of the items waiting to be
     * emitted.
     */
    get bufferLength() {
      return this[BUFFERLENGTH];
    }
    /**
     * The `BufferEncoding` currently in use, or `null`
     */
    get encoding() {
      return this[ENCODING];
    }
    /**
     * @deprecated - This is a read only property
     */
    set encoding(_enc) {
      throw new Error("Encoding must be set at instantiation time");
    }
    /**
     * @deprecated - Encoding may only be set at instantiation time
     */
    setEncoding(_enc) {
      throw new Error("Encoding must be set at instantiation time");
    }
    /**
     * True if this is an objectMode stream
     */
    get objectMode() {
      return this[OBJECTMODE];
    }
    /**
     * @deprecated - This is a read-only property
     */
    set objectMode(_om) {
      throw new Error("objectMode must be set at instantiation time");
    }
    /**
     * true if this is an async stream
     */
    get ["async"]() {
      return this[ASYNC];
    }
    /**
     * Set to true to make this stream async.
     *
     * Once set, it cannot be unset, as this would potentially cause incorrect
     * behavior.  Ie, a sync stream can be made async, but an async stream
     * cannot be safely made sync.
     */
    set ["async"](a) {
      this[ASYNC] = this[ASYNC] || !!a;
    }
    // drop everything and get out of the flow completely
    [ABORT]() {
      this[ABORTED] = true;
      this.emit("abort", this[SIGNAL]?.reason);
      this.destroy(this[SIGNAL]?.reason);
    }
    /**
     * True if the stream has been aborted.
     */
    get aborted() {
      return this[ABORTED];
    }
    /**
     * No-op setter. Stream aborted status is set via the AbortSignal provided
     * in the constructor options.
     */
    set aborted(_) {
    }
    write(chunk, encoding, cb) {
      if (this[ABORTED])
        return false;
      if (this[EOF])
        throw new Error("write after end");
      if (this[DESTROYED]) {
        this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" }));
        return true;
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = "utf8";
      }
      if (!encoding)
        encoding = "utf8";
      const fn = this[ASYNC] ? defer : nodefer;
      if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
        if (isArrayBufferView(chunk)) {
          chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
        } else if (isArrayBufferLike(chunk)) {
          chunk = Buffer.from(chunk);
        } else if (typeof chunk !== "string") {
          throw new Error("Non-contiguous data written to non-objectMode stream");
        }
      }
      if (this[OBJECTMODE]) {
        if (this[FLOWING] && this[BUFFERLENGTH] !== 0)
          this[FLUSH](true);
        if (this[FLOWING])
          this.emit("data", chunk);
        else
          this[BUFFERPUSH](chunk);
        if (this[BUFFERLENGTH] !== 0)
          this.emit("readable");
        if (cb)
          fn(cb);
        return this[FLOWING];
      }
      if (!chunk.length) {
        if (this[BUFFERLENGTH] !== 0)
          this.emit("readable");
        if (cb)
          fn(cb);
        return this[FLOWING];
      }
      if (typeof chunk === "string" && // unless it is a string already ready for us to use
      !(encoding === this[ENCODING] && !this[DECODER]?.lastNeed)) {
        chunk = Buffer.from(chunk, encoding);
      }
      if (Buffer.isBuffer(chunk) && this[ENCODING]) {
        chunk = this[DECODER].write(chunk);
      }
      if (this[FLOWING] && this[BUFFERLENGTH] !== 0)
        this[FLUSH](true);
      if (this[FLOWING])
        this.emit("data", chunk);
      else
        this[BUFFERPUSH](chunk);
      if (this[BUFFERLENGTH] !== 0)
        this.emit("readable");
      if (cb)
        fn(cb);
      return this[FLOWING];
    }
    /**
     * Low-level explicit read method.
     *
     * In objectMode, the argument is ignored, and one item is returned if
     * available.
     *
     * `n` is the number of bytes (or in the case of encoding streams,
     * characters) to consume. If `n` is not provided, then the entire buffer
     * is returned, or `null` is returned if no data is available.
     *
     * If `n` is greater that the amount of data in the internal buffer,
     * then `null` is returned.
     */
    read(n) {
      if (this[DESTROYED])
        return null;
      this[DISCARDED] = false;
      if (this[BUFFERLENGTH] === 0 || n === 0 || n && n > this[BUFFERLENGTH]) {
        this[MAYBE_EMIT_END]();
        return null;
      }
      if (this[OBJECTMODE])
        n = null;
      if (this[BUFFER].length > 1 && !this[OBJECTMODE]) {
        this[BUFFER] = [
          this[ENCODING] ? this[BUFFER].join("") : Buffer.concat(this[BUFFER], this[BUFFERLENGTH])
        ];
      }
      const ret = this[READ](n || null, this[BUFFER][0]);
      this[MAYBE_EMIT_END]();
      return ret;
    }
    [READ](n, chunk) {
      if (this[OBJECTMODE])
        this[BUFFERSHIFT]();
      else {
        const c = chunk;
        if (n === c.length || n === null)
          this[BUFFERSHIFT]();
        else if (typeof c === "string") {
          this[BUFFER][0] = c.slice(n);
          chunk = c.slice(0, n);
          this[BUFFERLENGTH] -= n;
        } else {
          this[BUFFER][0] = c.subarray(n);
          chunk = c.subarray(0, n);
          this[BUFFERLENGTH] -= n;
        }
      }
      this.emit("data", chunk);
      if (!this[BUFFER].length && !this[EOF])
        this.emit("drain");
      return chunk;
    }
    end(chunk, encoding, cb) {
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = void 0;
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = "utf8";
      }
      if (chunk !== void 0)
        this.write(chunk, encoding);
      if (cb)
        this.once("end", cb);
      this[EOF] = true;
      this.writable = false;
      if (this[FLOWING] || !this[PAUSED])
        this[MAYBE_EMIT_END]();
      return this;
    }
    // don't let the internal resume be overwritten
    [RESUME]() {
      if (this[DESTROYED])
        return;
      if (!this[DATALISTENERS] && !this[PIPES].length) {
        this[DISCARDED] = true;
      }
      this[PAUSED] = false;
      this[FLOWING] = true;
      this.emit("resume");
      if (this[BUFFER].length)
        this[FLUSH]();
      else if (this[EOF])
        this[MAYBE_EMIT_END]();
      else
        this.emit("drain");
    }
    /**
     * Resume the stream if it is currently in a paused state
     *
     * If called when there are no pipe destinations or `data` event listeners,
     * this will place the stream in a "discarded" state, where all data will
     * be thrown away. The discarded state is removed if a pipe destination or
     * data handler is added, if pause() is called, or if any synchronous or
     * asynchronous iteration is started.
     */
    resume() {
      return this[RESUME]();
    }
    /**
     * Pause the stream
     */
    pause() {
      this[FLOWING] = false;
      this[PAUSED] = true;
      this[DISCARDED] = false;
    }
    /**
     * true if the stream has been forcibly destroyed
     */
    get destroyed() {
      return this[DESTROYED];
    }
    /**
     * true if the stream is currently in a flowing state, meaning that
     * any writes will be immediately emitted.
     */
    get flowing() {
      return this[FLOWING];
    }
    /**
     * true if the stream is currently in a paused state
     */
    get paused() {
      return this[PAUSED];
    }
    [BUFFERPUSH](chunk) {
      if (this[OBJECTMODE])
        this[BUFFERLENGTH] += 1;
      else
        this[BUFFERLENGTH] += chunk.length;
      this[BUFFER].push(chunk);
    }
    [BUFFERSHIFT]() {
      if (this[OBJECTMODE])
        this[BUFFERLENGTH] -= 1;
      else
        this[BUFFERLENGTH] -= this[BUFFER][0].length;
      return this[BUFFER].shift();
    }
    [FLUSH](noDrain = false) {
      do {
      } while (this[FLUSHCHUNK](this[BUFFERSHIFT]()) && this[BUFFER].length);
      if (!noDrain && !this[BUFFER].length && !this[EOF])
        this.emit("drain");
    }
    [FLUSHCHUNK](chunk) {
      this.emit("data", chunk);
      return this[FLOWING];
    }
    /**
     * Pipe all data emitted by this stream into the destination provided.
     *
     * Triggers the flow of data.
     */
    pipe(dest, opts2) {
      if (this[DESTROYED])
        return dest;
      this[DISCARDED] = false;
      const ended = this[EMITTED_END];
      opts2 = opts2 || {};
      if (dest === proc.stdout || dest === proc.stderr)
        opts2.end = false;
      else
        opts2.end = opts2.end !== false;
      opts2.proxyErrors = !!opts2.proxyErrors;
      if (ended) {
        if (opts2.end)
          dest.end();
      } else {
        this[PIPES].push(!opts2.proxyErrors ? new Pipe(this, dest, opts2) : new PipeProxyErrors(this, dest, opts2));
        if (this[ASYNC])
          defer(() => this[RESUME]());
        else
          this[RESUME]();
      }
      return dest;
    }
    /**
     * Fully unhook a piped destination stream.
     *
     * If the destination stream was the only consumer of this stream (ie,
     * there are no other piped destinations or `'data'` event listeners)
     * then the flow of data will stop until there is another consumer or
     * {@link Minipass#resume} is explicitly called.
     */
    unpipe(dest) {
      const p = this[PIPES].find((p2) => p2.dest === dest);
      if (p) {
        if (this[PIPES].length === 1) {
          if (this[FLOWING] && this[DATALISTENERS] === 0) {
            this[FLOWING] = false;
          }
          this[PIPES] = [];
        } else
          this[PIPES].splice(this[PIPES].indexOf(p), 1);
        p.unpipe();
      }
    }
    /**
     * Alias for {@link Minipass#on}
     */
    addListener(ev, handler) {
      return this.on(ev, handler);
    }
    /**
     * Mostly identical to `EventEmitter.on`, with the following
     * behavior differences to prevent data loss and unnecessary hangs:
     *
     * - Adding a 'data' event handler will trigger the flow of data
     *
     * - Adding a 'readable' event handler when there is data waiting to be read
     *   will cause 'readable' to be emitted immediately.
     *
     * - Adding an 'endish' event handler ('end', 'finish', etc.) which has
     *   already passed will cause the event to be emitted immediately and all
     *   handlers removed.
     *
     * - Adding an 'error' event handler after an error has been emitted will
     *   cause the event to be re-emitted immediately with the error previously
     *   raised.
     */
    on(ev, handler) {
      const ret = super.on(ev, handler);
      if (ev === "data") {
        this[DISCARDED] = false;
        this[DATALISTENERS]++;
        if (!this[PIPES].length && !this[FLOWING]) {
          this[RESUME]();
        }
      } else if (ev === "readable" && this[BUFFERLENGTH] !== 0) {
        super.emit("readable");
      } else if (isEndish(ev) && this[EMITTED_END]) {
        super.emit(ev);
        this.removeAllListeners(ev);
      } else if (ev === "error" && this[EMITTED_ERROR]) {
        const h = handler;
        if (this[ASYNC])
          defer(() => h.call(this, this[EMITTED_ERROR]));
        else
          h.call(this, this[EMITTED_ERROR]);
      }
      return ret;
    }
    /**
     * Alias for {@link Minipass#off}
     */
    removeListener(ev, handler) {
      return this.off(ev, handler);
    }
    /**
     * Mostly identical to `EventEmitter.off`
     *
     * If a 'data' event handler is removed, and it was the last consumer
     * (ie, there are no pipe destinations or other 'data' event listeners),
     * then the flow of data will stop until there is another consumer or
     * {@link Minipass#resume} is explicitly called.
     */
    off(ev, handler) {
      const ret = super.off(ev, handler);
      if (ev === "data") {
        this[DATALISTENERS] = this.listeners("data").length;
        if (this[DATALISTENERS] === 0 && !this[DISCARDED] && !this[PIPES].length) {
          this[FLOWING] = false;
        }
      }
      return ret;
    }
    /**
     * Mostly identical to `EventEmitter.removeAllListeners`
     *
     * If all 'data' event handlers are removed, and they were the last consumer
     * (ie, there are no pipe destinations), then the flow of data will stop
     * until there is another consumer or {@link Minipass#resume} is explicitly
     * called.
     */
    removeAllListeners(ev) {
      const ret = super.removeAllListeners(ev);
      if (ev === "data" || ev === void 0) {
        this[DATALISTENERS] = 0;
        if (!this[DISCARDED] && !this[PIPES].length) {
          this[FLOWING] = false;
        }
      }
      return ret;
    }
    /**
     * true if the 'end' event has been emitted
     */
    get emittedEnd() {
      return this[EMITTED_END];
    }
    [MAYBE_EMIT_END]() {
      if (!this[EMITTING_END] && !this[EMITTED_END] && !this[DESTROYED] && this[BUFFER].length === 0 && this[EOF]) {
        this[EMITTING_END] = true;
        this.emit("end");
        this.emit("prefinish");
        this.emit("finish");
        if (this[CLOSED])
          this.emit("close");
        this[EMITTING_END] = false;
      }
    }
    /**
     * Mostly identical to `EventEmitter.emit`, with the following
     * behavior differences to prevent data loss and unnecessary hangs:
     *
     * If the stream has been destroyed, and the event is something other
     * than 'close' or 'error', then `false` is returned and no handlers
     * are called.
     *
     * If the event is 'end', and has already been emitted, then the event
     * is ignored. If the stream is in a paused or non-flowing state, then
     * the event will be deferred until data flow resumes. If the stream is
     * async, then handlers will be called on the next tick rather than
     * immediately.
     *
     * If the event is 'close', and 'end' has not yet been emitted, then
     * the event will be deferred until after 'end' is emitted.
     *
     * If the event is 'error', and an AbortSignal was provided for the stream,
     * and there are no listeners, then the event is ignored, matching the
     * behavior of node core streams in the presense of an AbortSignal.
     *
     * If the event is 'finish' or 'prefinish', then all listeners will be
     * removed after emitting the event, to prevent double-firing.
     */
    emit(ev, ...args) {
      const data = args[0];
      if (ev !== "error" && ev !== "close" && ev !== DESTROYED && this[DESTROYED]) {
        return false;
      } else if (ev === "data") {
        return !this[OBJECTMODE] && !data ? false : this[ASYNC] ? (defer(() => this[EMITDATA](data)), true) : this[EMITDATA](data);
      } else if (ev === "end") {
        return this[EMITEND]();
      } else if (ev === "close") {
        this[CLOSED] = true;
        if (!this[EMITTED_END] && !this[DESTROYED])
          return false;
        const ret2 = super.emit("close");
        this.removeAllListeners("close");
        return ret2;
      } else if (ev === "error") {
        this[EMITTED_ERROR] = data;
        super.emit(ERROR, data);
        const ret2 = !this[SIGNAL] || this.listeners("error").length ? super.emit("error", data) : false;
        this[MAYBE_EMIT_END]();
        return ret2;
      } else if (ev === "resume") {
        const ret2 = super.emit("resume");
        this[MAYBE_EMIT_END]();
        return ret2;
      } else if (ev === "finish" || ev === "prefinish") {
        const ret2 = super.emit(ev);
        this.removeAllListeners(ev);
        return ret2;
      }
      const ret = super.emit(ev, ...args);
      this[MAYBE_EMIT_END]();
      return ret;
    }
    [EMITDATA](data) {
      for (const p of this[PIPES]) {
        if (p.dest.write(data) === false)
          this.pause();
      }
      const ret = this[DISCARDED] ? false : super.emit("data", data);
      this[MAYBE_EMIT_END]();
      return ret;
    }
    [EMITEND]() {
      if (this[EMITTED_END])
        return false;
      this[EMITTED_END] = true;
      this.readable = false;
      return this[ASYNC] ? (defer(() => this[EMITEND2]()), true) : this[EMITEND2]();
    }
    [EMITEND2]() {
      if (this[DECODER]) {
        const data = this[DECODER].end();
        if (data) {
          for (const p of this[PIPES]) {
            p.dest.write(data);
          }
          if (!this[DISCARDED])
            super.emit("data", data);
        }
      }
      for (const p of this[PIPES]) {
        p.end();
      }
      const ret = super.emit("end");
      this.removeAllListeners("end");
      return ret;
    }
    /**
     * Return a Promise that resolves to an array of all emitted data once
     * the stream ends.
     */
    async collect() {
      const buf = Object.assign([], {
        dataLength: 0
      });
      if (!this[OBJECTMODE])
        buf.dataLength = 0;
      const p = this.promise();
      this.on("data", (c) => {
        buf.push(c);
        if (!this[OBJECTMODE])
          buf.dataLength += c.length;
      });
      await p;
      return buf;
    }
    /**
     * Return a Promise that resolves to the concatenation of all emitted data
     * once the stream ends.
     *
     * Not allowed on objectMode streams.
     */
    async concat() {
      if (this[OBJECTMODE]) {
        throw new Error("cannot concat in objectMode");
      }
      const buf = await this.collect();
      return this[ENCODING] ? buf.join("") : Buffer.concat(buf, buf.dataLength);
    }
    /**
     * Return a void Promise that resolves once the stream ends.
     */
    async promise() {
      return new Promise((resolve10, reject) => {
        this.on(DESTROYED, () => reject(new Error("stream destroyed")));
        this.on("error", (er) => reject(er));
        this.on("end", () => resolve10());
      });
    }
    /**
     * Asynchronous `for await of` iteration.
     *
     * This will continue emitting all chunks until the stream terminates.
     */
    [Symbol.asyncIterator]() {
      this[DISCARDED] = false;
      let stopped = false;
      const stop = async () => {
        this.pause();
        stopped = true;
        return { value: void 0, done: true };
      };
      const next = () => {
        if (stopped)
          return stop();
        const res = this.read();
        if (res !== null)
          return Promise.resolve({ done: false, value: res });
        if (this[EOF])
          return stop();
        let resolve10;
        let reject;
        const onerr = (er) => {
          this.off("data", ondata);
          this.off("end", onend);
          this.off(DESTROYED, ondestroy);
          stop();
          reject(er);
        };
        const ondata = (value) => {
          this.off("error", onerr);
          this.off("end", onend);
          this.off(DESTROYED, ondestroy);
          this.pause();
          resolve10({ value, done: !!this[EOF] });
        };
        const onend = () => {
          this.off("error", onerr);
          this.off("data", ondata);
          this.off(DESTROYED, ondestroy);
          stop();
          resolve10({ done: true, value: void 0 });
        };
        const ondestroy = () => onerr(new Error("stream destroyed"));
        return new Promise((res2, rej) => {
          reject = rej;
          resolve10 = res2;
          this.once(DESTROYED, ondestroy);
          this.once("error", onerr);
          this.once("end", onend);
          this.once("data", ondata);
        });
      };
      return {
        next,
        throw: stop,
        return: stop,
        [Symbol.asyncIterator]() {
          return this;
        }
      };
    }
    /**
     * Synchronous `for of` iteration.
     *
     * The iteration will terminate when the internal buffer runs out, even
     * if the stream has not yet terminated.
     */
    [Symbol.iterator]() {
      this[DISCARDED] = false;
      let stopped = false;
      const stop = () => {
        this.pause();
        this.off(ERROR, stop);
        this.off(DESTROYED, stop);
        this.off("end", stop);
        stopped = true;
        return { done: true, value: void 0 };
      };
      const next = () => {
        if (stopped)
          return stop();
        const value = this.read();
        return value === null ? stop() : { done: false, value };
      };
      this.once("end", stop);
      this.once(ERROR, stop);
      this.once(DESTROYED, stop);
      return {
        next,
        throw: stop,
        return: stop,
        [Symbol.iterator]() {
          return this;
        }
      };
    }
    /**
     * Destroy a stream, preventing it from being used for any further purpose.
     *
     * If the stream has a `close()` method, then it will be called on
     * destruction.
     *
     * After destruction, any attempt to write data, read data, or emit most
     * events will be ignored.
     *
     * If an error argument is provided, then it will be emitted in an
     * 'error' event.
     */
    destroy(er) {
      if (this[DESTROYED]) {
        if (er)
          this.emit("error", er);
        else
          this.emit(DESTROYED);
        return this;
      }
      this[DESTROYED] = true;
      this[DISCARDED] = true;
      this[BUFFER].length = 0;
      this[BUFFERLENGTH] = 0;
      const wc = this;
      if (typeof wc.close === "function" && !this[CLOSED])
        wc.close();
      if (er)
        this.emit("error", er);
      else
        this.emit(DESTROYED);
      return this;
    }
    /**
     * Alias for {@link isStream}
     *
     * Former export location, maintained for backwards compatibility.
     *
     * @deprecated
     */
    static get isStream() {
      return isStream;
    }
  };

  // node_modules/path-scurry/dist/mjs/index.js
  var realpathSync = import_fs.realpathSync.native;
  var defaultFS = {
    lstatSync: import_fs.lstatSync,
    readdir: import_fs.readdir,
    readdirSync: import_fs.readdirSync,
    readlinkSync: import_fs.readlinkSync,
    realpathSync,
    promises: {
      lstat: import_promises.lstat,
      readdir: import_promises.readdir,
      readlink: import_promises.readlink,
      realpath: import_promises.realpath
    }
  };
  var fsFromOption = (fsOption) => !fsOption || fsOption === defaultFS || fsOption === actualFS ? defaultFS : {
    ...defaultFS,
    ...fsOption,
    promises: {
      ...defaultFS.promises,
      ...fsOption.promises || {}
    }
  };
  var uncDriveRegexp = /^\\\\\?\\([a-z]:)\\?$/i;
  var uncToDrive = (rootPath) => rootPath.replace(/\//g, "\\").replace(uncDriveRegexp, "$1\\");
  var eitherSep = /[\\\/]/;
  var UNKNOWN = 0;
  var IFIFO = 1;
  var IFCHR = 2;
  var IFDIR = 4;
  var IFBLK = 6;
  var IFREG = 8;
  var IFLNK = 10;
  var IFSOCK = 12;
  var IFMT = 15;
  var IFMT_UNKNOWN = ~IFMT;
  var READDIR_CALLED = 16;
  var LSTAT_CALLED = 32;
  var ENOTDIR = 64;
  var ENOENT = 128;
  var ENOREADLINK = 256;
  var ENOREALPATH = 512;
  var ENOCHILD = ENOTDIR | ENOENT | ENOREALPATH;
  var TYPEMASK = 1023;
  var entToType = (s) => s.isFile() ? IFREG : s.isDirectory() ? IFDIR : s.isSymbolicLink() ? IFLNK : s.isCharacterDevice() ? IFCHR : s.isBlockDevice() ? IFBLK : s.isSocket() ? IFSOCK : s.isFIFO() ? IFIFO : UNKNOWN;
  var normalizeCache = /* @__PURE__ */ new Map();
  var normalize = (s) => {
    const c = normalizeCache.get(s);
    if (c)
      return c;
    const n = s.normalize("NFKD");
    normalizeCache.set(s, n);
    return n;
  };
  var normalizeNocaseCache = /* @__PURE__ */ new Map();
  var normalizeNocase = (s) => {
    const c = normalizeNocaseCache.get(s);
    if (c)
      return c;
    const n = normalize(s.toLowerCase());
    normalizeNocaseCache.set(s, n);
    return n;
  };
  var ResolveCache = class extends LRUCache {
    constructor() {
      super({ max: 256 });
    }
  };
  var ChildrenCache = class extends LRUCache {
    constructor(maxSize = 16 * 1024) {
      super({
        maxSize,
        // parent + children
        sizeCalculation: (a) => a.length + 1
      });
    }
  };
  var setAsCwd = Symbol("PathScurry setAsCwd");
  var PathBase = class {
    /**
     * the basename of this path
     *
     * **Important**: *always* test the path name against any test string
     * usingthe {@link isNamed} method, and not by directly comparing this
     * string. Otherwise, unicode path strings that the system sees as identical
     * will not be properly treated as the same path, leading to incorrect
     * behavior and possible security issues.
     */
    name;
    /**
     * the Path entry corresponding to the path root.
     *
     * @internal
     */
    root;
    /**
     * All roots found within the current PathScurry family
     *
     * @internal
     */
    roots;
    /**
     * a reference to the parent path, or undefined in the case of root entries
     *
     * @internal
     */
    parent;
    /**
     * boolean indicating whether paths are compared case-insensitively
     * @internal
     */
    nocase;
    // potential default fs override
    #fs;
    // Stats fields
    #dev;
    get dev() {
      return this.#dev;
    }
    #mode;
    get mode() {
      return this.#mode;
    }
    #nlink;
    get nlink() {
      return this.#nlink;
    }
    #uid;
    get uid() {
      return this.#uid;
    }
    #gid;
    get gid() {
      return this.#gid;
    }
    #rdev;
    get rdev() {
      return this.#rdev;
    }
    #blksize;
    get blksize() {
      return this.#blksize;
    }
    #ino;
    get ino() {
      return this.#ino;
    }
    #size;
    get size() {
      return this.#size;
    }
    #blocks;
    get blocks() {
      return this.#blocks;
    }
    #atimeMs;
    get atimeMs() {
      return this.#atimeMs;
    }
    #mtimeMs;
    get mtimeMs() {
      return this.#mtimeMs;
    }
    #ctimeMs;
    get ctimeMs() {
      return this.#ctimeMs;
    }
    #birthtimeMs;
    get birthtimeMs() {
      return this.#birthtimeMs;
    }
    #atime;
    get atime() {
      return this.#atime;
    }
    #mtime;
    get mtime() {
      return this.#mtime;
    }
    #ctime;
    get ctime() {
      return this.#ctime;
    }
    #birthtime;
    get birthtime() {
      return this.#birthtime;
    }
    #matchName;
    #depth;
    #fullpath;
    #fullpathPosix;
    #relative;
    #relativePosix;
    #type;
    #children;
    #linkTarget;
    #realpath;
    /**
     * This property is for compatibility with the Dirent class as of
     * Node v20, where Dirent['path'] refers to the path of the directory
     * that was passed to readdir.  So, somewhat counterintuitively, this
     * property refers to the *parent* path, not the path object itself.
     * For root entries, it's the path to the entry itself.
     */
    get path() {
      return (this.parent || this).fullpath();
    }
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */
    constructor(name, type = UNKNOWN, root, roots, nocase, children, opts2) {
      this.name = name;
      this.#matchName = nocase ? normalizeNocase(name) : normalize(name);
      this.#type = type & TYPEMASK;
      this.nocase = nocase;
      this.roots = roots;
      this.root = root || this;
      this.#children = children;
      this.#fullpath = opts2.fullpath;
      this.#relative = opts2.relative;
      this.#relativePosix = opts2.relativePosix;
      this.parent = opts2.parent;
      if (this.parent) {
        this.#fs = this.parent.#fs;
      } else {
        this.#fs = fsFromOption(opts2.fs);
      }
    }
    /**
     * Returns the depth of the Path object from its root.
     *
     * For example, a path at `/foo/bar` would have a depth of 2.
     */
    depth() {
      if (this.#depth !== void 0)
        return this.#depth;
      if (!this.parent)
        return this.#depth = 0;
      return this.#depth = this.parent.depth() + 1;
    }
    /**
     * @internal
     */
    childrenCache() {
      return this.#children;
    }
    /**
     * Get the Path object referenced by the string path, resolved from this Path
     */
    resolve(path3) {
      if (!path3) {
        return this;
      }
      const rootPath = this.getRootString(path3);
      const dir = path3.substring(rootPath.length);
      const dirParts = dir.split(this.splitSep);
      const result = rootPath ? this.getRoot(rootPath).#resolveParts(dirParts) : this.#resolveParts(dirParts);
      return result;
    }
    #resolveParts(dirParts) {
      let p = this;
      for (const part of dirParts) {
        p = p.child(part);
      }
      return p;
    }
    /**
     * Returns the cached children Path objects, if still available.  If they
     * have fallen out of the cache, then returns an empty array, and resets the
     * READDIR_CALLED bit, so that future calls to readdir() will require an fs
     * lookup.
     *
     * @internal
     */
    children() {
      const cached = this.#children.get(this);
      if (cached) {
        return cached;
      }
      const children = Object.assign([], { provisional: 0 });
      this.#children.set(this, children);
      this.#type &= ~READDIR_CALLED;
      return children;
    }
    /**
     * Resolves a path portion and returns or creates the child Path.
     *
     * Returns `this` if pathPart is `''` or `'.'`, or `parent` if pathPart is
     * `'..'`.
     *
     * This should not be called directly.  If `pathPart` contains any path
     * separators, it will lead to unsafe undefined behavior.
     *
     * Use `Path.resolve()` instead.
     *
     * @internal
     */
    child(pathPart, opts2) {
      if (pathPart === "" || pathPart === ".") {
        return this;
      }
      if (pathPart === "..") {
        return this.parent || this;
      }
      const children = this.children();
      const name = this.nocase ? normalizeNocase(pathPart) : normalize(pathPart);
      for (const p of children) {
        if (p.#matchName === name) {
          return p;
        }
      }
      const s = this.parent ? this.sep : "";
      const fullpath = this.#fullpath ? this.#fullpath + s + pathPart : void 0;
      const pchild = this.newChild(pathPart, UNKNOWN, {
        ...opts2,
        parent: this,
        fullpath
      });
      if (!this.canReaddir()) {
        pchild.#type |= ENOENT;
      }
      children.push(pchild);
      return pchild;
    }
    /**
     * The relative path from the cwd. If it does not share an ancestor with
     * the cwd, then this ends up being equivalent to the fullpath()
     */
    relative() {
      if (this.#relative !== void 0) {
        return this.#relative;
      }
      const name = this.name;
      const p = this.parent;
      if (!p) {
        return this.#relative = this.name;
      }
      const pv = p.relative();
      return pv + (!pv || !p.parent ? "" : this.sep) + name;
    }
    /**
     * The relative path from the cwd, using / as the path separator.
     * If it does not share an ancestor with
     * the cwd, then this ends up being equivalent to the fullpathPosix()
     * On posix systems, this is identical to relative().
     */
    relativePosix() {
      if (this.sep === "/")
        return this.relative();
      if (this.#relativePosix !== void 0)
        return this.#relativePosix;
      const name = this.name;
      const p = this.parent;
      if (!p) {
        return this.#relativePosix = this.fullpathPosix();
      }
      const pv = p.relativePosix();
      return pv + (!pv || !p.parent ? "" : "/") + name;
    }
    /**
     * The fully resolved path string for this Path entry
     */
    fullpath() {
      if (this.#fullpath !== void 0) {
        return this.#fullpath;
      }
      const name = this.name;
      const p = this.parent;
      if (!p) {
        return this.#fullpath = this.name;
      }
      const pv = p.fullpath();
      const fp = pv + (!p.parent ? "" : this.sep) + name;
      return this.#fullpath = fp;
    }
    /**
     * On platforms other than windows, this is identical to fullpath.
     *
     * On windows, this is overridden to return the forward-slash form of the
     * full UNC path.
     */
    fullpathPosix() {
      if (this.#fullpathPosix !== void 0)
        return this.#fullpathPosix;
      if (this.sep === "/")
        return this.#fullpathPosix = this.fullpath();
      if (!this.parent) {
        const p2 = this.fullpath().replace(/\\/g, "/");
        if (/^[a-z]:\//i.test(p2)) {
          return this.#fullpathPosix = `//?/${p2}`;
        } else {
          return this.#fullpathPosix = p2;
        }
      }
      const p = this.parent;
      const pfpp = p.fullpathPosix();
      const fpp = pfpp + (!pfpp || !p.parent ? "" : "/") + this.name;
      return this.#fullpathPosix = fpp;
    }
    /**
     * Is the Path of an unknown type?
     *
     * Note that we might know *something* about it if there has been a previous
     * filesystem operation, for example that it does not exist, or is not a
     * link, or whether it has child entries.
     */
    isUnknown() {
      return (this.#type & IFMT) === UNKNOWN;
    }
    isType(type) {
      return this[`is${type}`]();
    }
    getType() {
      return this.isUnknown() ? "Unknown" : this.isDirectory() ? "Directory" : this.isFile() ? "File" : this.isSymbolicLink() ? "SymbolicLink" : this.isFIFO() ? "FIFO" : this.isCharacterDevice() ? "CharacterDevice" : this.isBlockDevice() ? "BlockDevice" : (
        /* c8 ignore start */
        this.isSocket() ? "Socket" : "Unknown"
      );
    }
    /**
     * Is the Path a regular file?
     */
    isFile() {
      return (this.#type & IFMT) === IFREG;
    }
    /**
     * Is the Path a directory?
     */
    isDirectory() {
      return (this.#type & IFMT) === IFDIR;
    }
    /**
     * Is the path a character device?
     */
    isCharacterDevice() {
      return (this.#type & IFMT) === IFCHR;
    }
    /**
     * Is the path a block device?
     */
    isBlockDevice() {
      return (this.#type & IFMT) === IFBLK;
    }
    /**
     * Is the path a FIFO pipe?
     */
    isFIFO() {
      return (this.#type & IFMT) === IFIFO;
    }
    /**
     * Is the path a socket?
     */
    isSocket() {
      return (this.#type & IFMT) === IFSOCK;
    }
    /**
     * Is the path a symbolic link?
     */
    isSymbolicLink() {
      return (this.#type & IFLNK) === IFLNK;
    }
    /**
     * Return the entry if it has been subject of a successful lstat, or
     * undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* simply
     * mean that we haven't called lstat on it.
     */
    lstatCached() {
      return this.#type & LSTAT_CALLED ? this : void 0;
    }
    /**
     * Return the cached link target if the entry has been the subject of a
     * successful readlink, or undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * readlink() has been called at some point.
     */
    readlinkCached() {
      return this.#linkTarget;
    }
    /**
     * Returns the cached realpath target if the entry has been the subject
     * of a successful realpath, or undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * realpath() has been called at some point.
     */
    realpathCached() {
      return this.#realpath;
    }
    /**
     * Returns the cached child Path entries array if the entry has been the
     * subject of a successful readdir(), or [] otherwise.
     *
     * Does not read the filesystem, so an empty array *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * readdir() has been called recently enough to still be valid.
     */
    readdirCached() {
      const children = this.children();
      return children.slice(0, children.provisional);
    }
    /**
     * Return true if it's worth trying to readlink.  Ie, we don't (yet) have
     * any indication that readlink will definitely fail.
     *
     * Returns false if the path is known to not be a symlink, if a previous
     * readlink failed, or if the entry does not exist.
     */
    canReadlink() {
      if (this.#linkTarget)
        return true;
      if (!this.parent)
        return false;
      const ifmt = this.#type & IFMT;
      return !(ifmt !== UNKNOWN && ifmt !== IFLNK || this.#type & ENOREADLINK || this.#type & ENOENT);
    }
    /**
     * Return true if readdir has previously been successfully called on this
     * path, indicating that cachedReaddir() is likely valid.
     */
    calledReaddir() {
      return !!(this.#type & READDIR_CALLED);
    }
    /**
     * Returns true if the path is known to not exist. That is, a previous lstat
     * or readdir failed to verify its existence when that would have been
     * expected, or a parent entry was marked either enoent or enotdir.
     */
    isENOENT() {
      return !!(this.#type & ENOENT);
    }
    /**
     * Return true if the path is a match for the given path name.  This handles
     * case sensitivity and unicode normalization.
     *
     * Note: even on case-sensitive systems, it is **not** safe to test the
     * equality of the `.name` property to determine whether a given pathname
     * matches, due to unicode normalization mismatches.
     *
     * Always use this method instead of testing the `path.name` property
     * directly.
     */
    isNamed(n) {
      return !this.nocase ? this.#matchName === normalize(n) : this.#matchName === normalizeNocase(n);
    }
    /**
     * Return the Path object corresponding to the target of a symbolic link.
     *
     * If the Path is not a symbolic link, or if the readlink call fails for any
     * reason, `undefined` is returned.
     *
     * Result is cached, and thus may be outdated if the filesystem is mutated.
     */
    async readlink() {
      const target = this.#linkTarget;
      if (target) {
        return target;
      }
      if (!this.canReadlink()) {
        return void 0;
      }
      if (!this.parent) {
        return void 0;
      }
      try {
        const read = await this.#fs.promises.readlink(this.fullpath());
        const linkTarget = this.parent.resolve(read);
        if (linkTarget) {
          return this.#linkTarget = linkTarget;
        }
      } catch (er) {
        this.#readlinkFail(er.code);
        return void 0;
      }
    }
    /**
     * Synchronous {@link PathBase.readlink}
     */
    readlinkSync() {
      const target = this.#linkTarget;
      if (target) {
        return target;
      }
      if (!this.canReadlink()) {
        return void 0;
      }
      if (!this.parent) {
        return void 0;
      }
      try {
        const read = this.#fs.readlinkSync(this.fullpath());
        const linkTarget = this.parent.resolve(read);
        if (linkTarget) {
          return this.#linkTarget = linkTarget;
        }
      } catch (er) {
        this.#readlinkFail(er.code);
        return void 0;
      }
    }
    #readdirSuccess(children) {
      this.#type |= READDIR_CALLED;
      for (let p = children.provisional; p < children.length; p++) {
        children[p].#markENOENT();
      }
    }
    #markENOENT() {
      if (this.#type & ENOENT)
        return;
      this.#type = (this.#type | ENOENT) & IFMT_UNKNOWN;
      this.#markChildrenENOENT();
    }
    #markChildrenENOENT() {
      const children = this.children();
      children.provisional = 0;
      for (const p of children) {
        p.#markENOENT();
      }
    }
    #markENOREALPATH() {
      this.#type |= ENOREALPATH;
      this.#markENOTDIR();
    }
    // save the information when we know the entry is not a dir
    #markENOTDIR() {
      if (this.#type & ENOTDIR)
        return;
      let t = this.#type;
      if ((t & IFMT) === IFDIR)
        t &= IFMT_UNKNOWN;
      this.#type = t | ENOTDIR;
      this.#markChildrenENOENT();
    }
    #readdirFail(code2 = "") {
      if (code2 === "ENOTDIR" || code2 === "EPERM") {
        this.#markENOTDIR();
      } else if (code2 === "ENOENT") {
        this.#markENOENT();
      } else {
        this.children().provisional = 0;
      }
    }
    #lstatFail(code2 = "") {
      if (code2 === "ENOTDIR") {
        const p = this.parent;
        p.#markENOTDIR();
      } else if (code2 === "ENOENT") {
        this.#markENOENT();
      }
    }
    #readlinkFail(code2 = "") {
      let ter = this.#type;
      ter |= ENOREADLINK;
      if (code2 === "ENOENT")
        ter |= ENOENT;
      if (code2 === "EINVAL" || code2 === "UNKNOWN") {
        ter &= IFMT_UNKNOWN;
      }
      this.#type = ter;
      if (code2 === "ENOTDIR" && this.parent) {
        this.parent.#markENOTDIR();
      }
    }
    #readdirAddChild(e, c) {
      return this.#readdirMaybePromoteChild(e, c) || this.#readdirAddNewChild(e, c);
    }
    #readdirAddNewChild(e, c) {
      const type = entToType(e);
      const child = this.newChild(e.name, type, { parent: this });
      const ifmt = child.#type & IFMT;
      if (ifmt !== IFDIR && ifmt !== IFLNK && ifmt !== UNKNOWN) {
        child.#type |= ENOTDIR;
      }
      c.unshift(child);
      c.provisional++;
      return child;
    }
    #readdirMaybePromoteChild(e, c) {
      for (let p = c.provisional; p < c.length; p++) {
        const pchild = c[p];
        const name = this.nocase ? normalizeNocase(e.name) : normalize(e.name);
        if (name !== pchild.#matchName) {
          continue;
        }
        return this.#readdirPromoteChild(e, pchild, p, c);
      }
    }
    #readdirPromoteChild(e, p, index, c) {
      const v = p.name;
      p.#type = p.#type & IFMT_UNKNOWN | entToType(e);
      if (v !== e.name)
        p.name = e.name;
      if (index !== c.provisional) {
        if (index === c.length - 1)
          c.pop();
        else
          c.splice(index, 1);
        c.unshift(p);
      }
      c.provisional++;
      return p;
    }
    /**
     * Call lstat() on this Path, and update all known information that can be
     * determined.
     *
     * Note that unlike `fs.lstat()`, the returned value does not contain some
     * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
     * information is required, you will need to call `fs.lstat` yourself.
     *
     * If the Path refers to a nonexistent file, or if the lstat call fails for
     * any reason, `undefined` is returned.  Otherwise the updated Path object is
     * returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */
    async lstat() {
      if ((this.#type & ENOENT) === 0) {
        try {
          this.#applyStat(await this.#fs.promises.lstat(this.fullpath()));
          return this;
        } catch (er) {
          this.#lstatFail(er.code);
        }
      }
    }
    /**
     * synchronous {@link PathBase.lstat}
     */
    lstatSync() {
      if ((this.#type & ENOENT) === 0) {
        try {
          this.#applyStat(this.#fs.lstatSync(this.fullpath()));
          return this;
        } catch (er) {
          this.#lstatFail(er.code);
        }
      }
    }
    #applyStat(st) {
      const { atime, atimeMs, birthtime, birthtimeMs, blksize, blocks, ctime, ctimeMs, dev, gid, ino, mode, mtime, mtimeMs, nlink, rdev, size, uid } = st;
      this.#atime = atime;
      this.#atimeMs = atimeMs;
      this.#birthtime = birthtime;
      this.#birthtimeMs = birthtimeMs;
      this.#blksize = blksize;
      this.#blocks = blocks;
      this.#ctime = ctime;
      this.#ctimeMs = ctimeMs;
      this.#dev = dev;
      this.#gid = gid;
      this.#ino = ino;
      this.#mode = mode;
      this.#mtime = mtime;
      this.#mtimeMs = mtimeMs;
      this.#nlink = nlink;
      this.#rdev = rdev;
      this.#size = size;
      this.#uid = uid;
      const ifmt = entToType(st);
      this.#type = this.#type & IFMT_UNKNOWN | ifmt | LSTAT_CALLED;
      if (ifmt !== UNKNOWN && ifmt !== IFDIR && ifmt !== IFLNK) {
        this.#type |= ENOTDIR;
      }
    }
    #onReaddirCB = [];
    #readdirCBInFlight = false;
    #callOnReaddirCB(children) {
      this.#readdirCBInFlight = false;
      const cbs = this.#onReaddirCB.slice();
      this.#onReaddirCB.length = 0;
      cbs.forEach((cb) => cb(null, children));
    }
    /**
     * Standard node-style callback interface to get list of directory entries.
     *
     * If the Path cannot or does not contain any children, then an empty array
     * is returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     *
     * @param cb The callback called with (er, entries).  Note that the `er`
     * param is somewhat extraneous, as all readdir() errors are handled and
     * simply result in an empty set of entries being returned.
     * @param allowZalgo Boolean indicating that immediately known results should
     * *not* be deferred with `queueMicrotask`. Defaults to `false`. Release
     * zalgo at your peril, the dark pony lord is devious and unforgiving.
     */
    readdirCB(cb, allowZalgo = false) {
      if (!this.canReaddir()) {
        if (allowZalgo)
          cb(null, []);
        else
          queueMicrotask(() => cb(null, []));
        return;
      }
      const children = this.children();
      if (this.calledReaddir()) {
        const c = children.slice(0, children.provisional);
        if (allowZalgo)
          cb(null, c);
        else
          queueMicrotask(() => cb(null, c));
        return;
      }
      this.#onReaddirCB.push(cb);
      if (this.#readdirCBInFlight) {
        return;
      }
      this.#readdirCBInFlight = true;
      const fullpath = this.fullpath();
      this.#fs.readdir(fullpath, { withFileTypes: true }, (er, entries) => {
        if (er) {
          this.#readdirFail(er.code);
          children.provisional = 0;
        } else {
          for (const e of entries) {
            this.#readdirAddChild(e, children);
          }
          this.#readdirSuccess(children);
        }
        this.#callOnReaddirCB(children.slice(0, children.provisional));
        return;
      });
    }
    #asyncReaddirInFlight;
    /**
     * Return an array of known child entries.
     *
     * If the Path cannot or does not contain any children, then an empty array
     * is returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */
    async readdir() {
      if (!this.canReaddir()) {
        return [];
      }
      const children = this.children();
      if (this.calledReaddir()) {
        return children.slice(0, children.provisional);
      }
      const fullpath = this.fullpath();
      if (this.#asyncReaddirInFlight) {
        await this.#asyncReaddirInFlight;
      } else {
        let resolve10 = () => {
        };
        this.#asyncReaddirInFlight = new Promise((res) => resolve10 = res);
        try {
          for (const e of await this.#fs.promises.readdir(fullpath, {
            withFileTypes: true
          })) {
            this.#readdirAddChild(e, children);
          }
          this.#readdirSuccess(children);
        } catch (er) {
          this.#readdirFail(er.code);
          children.provisional = 0;
        }
        this.#asyncReaddirInFlight = void 0;
        resolve10();
      }
      return children.slice(0, children.provisional);
    }
    /**
     * synchronous {@link PathBase.readdir}
     */
    readdirSync() {
      if (!this.canReaddir()) {
        return [];
      }
      const children = this.children();
      if (this.calledReaddir()) {
        return children.slice(0, children.provisional);
      }
      const fullpath = this.fullpath();
      try {
        for (const e of this.#fs.readdirSync(fullpath, {
          withFileTypes: true
        })) {
          this.#readdirAddChild(e, children);
        }
        this.#readdirSuccess(children);
      } catch (er) {
        this.#readdirFail(er.code);
        children.provisional = 0;
      }
      return children.slice(0, children.provisional);
    }
    canReaddir() {
      if (this.#type & ENOCHILD)
        return false;
      const ifmt = IFMT & this.#type;
      if (!(ifmt === UNKNOWN || ifmt === IFDIR || ifmt === IFLNK)) {
        return false;
      }
      return true;
    }
    shouldWalk(dirs, walkFilter) {
      return (this.#type & IFDIR) === IFDIR && !(this.#type & ENOCHILD) && !dirs.has(this) && (!walkFilter || walkFilter(this));
    }
    /**
     * Return the Path object corresponding to path as resolved
     * by realpath(3).
     *
     * If the realpath call fails for any reason, `undefined` is returned.
     *
     * Result is cached, and thus may be outdated if the filesystem is mutated.
     * On success, returns a Path object.
     */
    async realpath() {
      if (this.#realpath)
        return this.#realpath;
      if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type)
        return void 0;
      try {
        const rp = await this.#fs.promises.realpath(this.fullpath());
        return this.#realpath = this.resolve(rp);
      } catch (_) {
        this.#markENOREALPATH();
      }
    }
    /**
     * Synchronous {@link realpath}
     */
    realpathSync() {
      if (this.#realpath)
        return this.#realpath;
      if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type)
        return void 0;
      try {
        const rp = this.#fs.realpathSync(this.fullpath());
        return this.#realpath = this.resolve(rp);
      } catch (_) {
        this.#markENOREALPATH();
      }
    }
    /**
     * Internal method to mark this Path object as the scurry cwd,
     * called by {@link PathScurry#chdir}
     *
     * @internal
     */
    [setAsCwd](oldCwd) {
      if (oldCwd === this)
        return;
      const changed = /* @__PURE__ */ new Set([]);
      let rp = [];
      let p = this;
      while (p && p.parent) {
        changed.add(p);
        p.#relative = rp.join(this.sep);
        p.#relativePosix = rp.join("/");
        p = p.parent;
        rp.push("..");
      }
      p = oldCwd;
      while (p && p.parent && !changed.has(p)) {
        p.#relative = void 0;
        p.#relativePosix = void 0;
        p = p.parent;
      }
    }
  };
  var PathWin32 = class _PathWin32 extends PathBase {
    /**
     * Separator for generating path strings.
     */
    sep = "\\";
    /**
     * Separator for parsing path strings.
     */
    splitSep = eitherSep;
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */
    constructor(name, type = UNKNOWN, root, roots, nocase, children, opts2) {
      super(name, type, root, roots, nocase, children, opts2);
    }
    /**
     * @internal
     */
    newChild(name, type = UNKNOWN, opts2 = {}) {
      return new _PathWin32(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts2);
    }
    /**
     * @internal
     */
    getRootString(path3) {
      return import_path.win32.parse(path3).root;
    }
    /**
     * @internal
     */
    getRoot(rootPath) {
      rootPath = uncToDrive(rootPath.toUpperCase());
      if (rootPath === this.root.name) {
        return this.root;
      }
      for (const [compare, root] of Object.entries(this.roots)) {
        if (this.sameRoot(rootPath, compare)) {
          return this.roots[rootPath] = root;
        }
      }
      return this.roots[rootPath] = new PathScurryWin32(rootPath, this).root;
    }
    /**
     * @internal
     */
    sameRoot(rootPath, compare = this.root.name) {
      rootPath = rootPath.toUpperCase().replace(/\//g, "\\").replace(uncDriveRegexp, "$1\\");
      return rootPath === compare;
    }
  };
  var PathPosix = class _PathPosix extends PathBase {
    /**
     * separator for parsing path strings
     */
    splitSep = "/";
    /**
     * separator for generating path strings
     */
    sep = "/";
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */
    constructor(name, type = UNKNOWN, root, roots, nocase, children, opts2) {
      super(name, type, root, roots, nocase, children, opts2);
    }
    /**
     * @internal
     */
    getRootString(path3) {
      return path3.startsWith("/") ? "/" : "";
    }
    /**
     * @internal
     */
    getRoot(_rootPath) {
      return this.root;
    }
    /**
     * @internal
     */
    newChild(name, type = UNKNOWN, opts2 = {}) {
      return new _PathPosix(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts2);
    }
  };
  var PathScurryBase = class {
    /**
     * The root Path entry for the current working directory of this Scurry
     */
    root;
    /**
     * The string path for the root of this Scurry's current working directory
     */
    rootPath;
    /**
     * A collection of all roots encountered, referenced by rootPath
     */
    roots;
    /**
     * The Path entry corresponding to this PathScurry's current working directory.
     */
    cwd;
    #resolveCache;
    #resolvePosixCache;
    #children;
    /**
     * Perform path comparisons case-insensitively.
     *
     * Defaults true on Darwin and Windows systems, false elsewhere.
     */
    nocase;
    #fs;
    /**
     * This class should not be instantiated directly.
     *
     * Use PathScurryWin32, PathScurryDarwin, PathScurryPosix, or PathScurry
     *
     * @internal
     */
    constructor(cwd = process.cwd(), pathImpl, sep2, { nocase, childrenCacheSize = 16 * 1024, fs: fs2 = defaultFS } = {}) {
      this.#fs = fsFromOption(fs2);
      if (cwd instanceof URL || cwd.startsWith("file://")) {
        cwd = (0, import_url.fileURLToPath)(cwd);
      }
      const cwdPath = pathImpl.resolve(cwd);
      this.roots = /* @__PURE__ */ Object.create(null);
      this.rootPath = this.parseRootPath(cwdPath);
      this.#resolveCache = new ResolveCache();
      this.#resolvePosixCache = new ResolveCache();
      this.#children = new ChildrenCache(childrenCacheSize);
      const split = cwdPath.substring(this.rootPath.length).split(sep2);
      if (split.length === 1 && !split[0]) {
        split.pop();
      }
      if (nocase === void 0) {
        throw new TypeError("must provide nocase setting to PathScurryBase ctor");
      }
      this.nocase = nocase;
      this.root = this.newRoot(this.#fs);
      this.roots[this.rootPath] = this.root;
      let prev = this.root;
      let len = split.length - 1;
      const joinSep = pathImpl.sep;
      let abs = this.rootPath;
      let sawFirst = false;
      for (const part of split) {
        const l = len--;
        prev = prev.child(part, {
          relative: new Array(l).fill("..").join(joinSep),
          relativePosix: new Array(l).fill("..").join("/"),
          fullpath: abs += (sawFirst ? "" : joinSep) + part
        });
        sawFirst = true;
      }
      this.cwd = prev;
    }
    /**
     * Get the depth of a provided path, string, or the cwd
     */
    depth(path3 = this.cwd) {
      if (typeof path3 === "string") {
        path3 = this.cwd.resolve(path3);
      }
      return path3.depth();
    }
    /**
     * Return the cache of child entries.  Exposed so subclasses can create
     * child Path objects in a platform-specific way.
     *
     * @internal
     */
    childrenCache() {
      return this.#children;
    }
    /**
     * Resolve one or more path strings to a resolved string
     *
     * Same interface as require('path').resolve.
     *
     * Much faster than path.resolve() when called multiple times for the same
     * path, because the resolved Path objects are cached.  Much slower
     * otherwise.
     */
    resolve(...paths) {
      let r = "";
      for (let i = paths.length - 1; i >= 0; i--) {
        const p = paths[i];
        if (!p || p === ".")
          continue;
        r = r ? `${p}/${r}` : p;
        if (this.isAbsolute(p)) {
          break;
        }
      }
      const cached = this.#resolveCache.get(r);
      if (cached !== void 0) {
        return cached;
      }
      const result = this.cwd.resolve(r).fullpath();
      this.#resolveCache.set(r, result);
      return result;
    }
    /**
     * Resolve one or more path strings to a resolved string, returning
     * the posix path.  Identical to .resolve() on posix systems, but on
     * windows will return a forward-slash separated UNC path.
     *
     * Same interface as require('path').resolve.
     *
     * Much faster than path.resolve() when called multiple times for the same
     * path, because the resolved Path objects are cached.  Much slower
     * otherwise.
     */
    resolvePosix(...paths) {
      let r = "";
      for (let i = paths.length - 1; i >= 0; i--) {
        const p = paths[i];
        if (!p || p === ".")
          continue;
        r = r ? `${p}/${r}` : p;
        if (this.isAbsolute(p)) {
          break;
        }
      }
      const cached = this.#resolvePosixCache.get(r);
      if (cached !== void 0) {
        return cached;
      }
      const result = this.cwd.resolve(r).fullpathPosix();
      this.#resolvePosixCache.set(r, result);
      return result;
    }
    /**
     * find the relative path from the cwd to the supplied path string or entry
     */
    relative(entry = this.cwd) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      }
      return entry.relative();
    }
    /**
     * find the relative path from the cwd to the supplied path string or
     * entry, using / as the path delimiter, even on Windows.
     */
    relativePosix(entry = this.cwd) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      }
      return entry.relativePosix();
    }
    /**
     * Return the basename for the provided string or Path object
     */
    basename(entry = this.cwd) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      }
      return entry.name;
    }
    /**
     * Return the dirname for the provided string or Path object
     */
    dirname(entry = this.cwd) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      }
      return (entry.parent || entry).fullpath();
    }
    async readdir(entry = this.cwd, opts2 = {
      withFileTypes: true
    }) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        opts2 = entry;
        entry = this.cwd;
      }
      const { withFileTypes } = opts2;
      if (!entry.canReaddir()) {
        return [];
      } else {
        const p = await entry.readdir();
        return withFileTypes ? p : p.map((e) => e.name);
      }
    }
    readdirSync(entry = this.cwd, opts2 = {
      withFileTypes: true
    }) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        opts2 = entry;
        entry = this.cwd;
      }
      const { withFileTypes = true } = opts2;
      if (!entry.canReaddir()) {
        return [];
      } else if (withFileTypes) {
        return entry.readdirSync();
      } else {
        return entry.readdirSync().map((e) => e.name);
      }
    }
    /**
     * Call lstat() on the string or Path object, and update all known
     * information that can be determined.
     *
     * Note that unlike `fs.lstat()`, the returned value does not contain some
     * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
     * information is required, you will need to call `fs.lstat` yourself.
     *
     * If the Path refers to a nonexistent file, or if the lstat call fails for
     * any reason, `undefined` is returned.  Otherwise the updated Path object is
     * returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */
    async lstat(entry = this.cwd) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      }
      return entry.lstat();
    }
    /**
     * synchronous {@link PathScurryBase.lstat}
     */
    lstatSync(entry = this.cwd) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      }
      return entry.lstatSync();
    }
    async readlink(entry = this.cwd, { withFileTypes } = {
      withFileTypes: false
    }) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        withFileTypes = entry.withFileTypes;
        entry = this.cwd;
      }
      const e = await entry.readlink();
      return withFileTypes ? e : e?.fullpath();
    }
    readlinkSync(entry = this.cwd, { withFileTypes } = {
      withFileTypes: false
    }) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        withFileTypes = entry.withFileTypes;
        entry = this.cwd;
      }
      const e = entry.readlinkSync();
      return withFileTypes ? e : e?.fullpath();
    }
    async realpath(entry = this.cwd, { withFileTypes } = {
      withFileTypes: false
    }) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        withFileTypes = entry.withFileTypes;
        entry = this.cwd;
      }
      const e = await entry.realpath();
      return withFileTypes ? e : e?.fullpath();
    }
    realpathSync(entry = this.cwd, { withFileTypes } = {
      withFileTypes: false
    }) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        withFileTypes = entry.withFileTypes;
        entry = this.cwd;
      }
      const e = entry.realpathSync();
      return withFileTypes ? e : e?.fullpath();
    }
    async walk(entry = this.cwd, opts2 = {}) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        opts2 = entry;
        entry = this.cwd;
      }
      const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts2;
      const results = [];
      if (!filter2 || filter2(entry)) {
        results.push(withFileTypes ? entry : entry.fullpath());
      }
      const dirs = /* @__PURE__ */ new Set();
      const walk = (dir, cb) => {
        dirs.add(dir);
        dir.readdirCB((er, entries) => {
          if (er) {
            return cb(er);
          }
          let len = entries.length;
          if (!len)
            return cb();
          const next = () => {
            if (--len === 0) {
              cb();
            }
          };
          for (const e of entries) {
            if (!filter2 || filter2(e)) {
              results.push(withFileTypes ? e : e.fullpath());
            }
            if (follow && e.isSymbolicLink()) {
              e.realpath().then((r) => r?.isUnknown() ? r.lstat() : r).then((r) => r?.shouldWalk(dirs, walkFilter) ? walk(r, next) : next());
            } else {
              if (e.shouldWalk(dirs, walkFilter)) {
                walk(e, next);
              } else {
                next();
              }
            }
          }
        }, true);
      };
      const start = entry;
      return new Promise((res, rej) => {
        walk(start, (er) => {
          if (er)
            return rej(er);
          res(results);
        });
      });
    }
    walkSync(entry = this.cwd, opts2 = {}) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        opts2 = entry;
        entry = this.cwd;
      }
      const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts2;
      const results = [];
      if (!filter2 || filter2(entry)) {
        results.push(withFileTypes ? entry : entry.fullpath());
      }
      const dirs = /* @__PURE__ */ new Set([entry]);
      for (const dir of dirs) {
        const entries = dir.readdirSync();
        for (const e of entries) {
          if (!filter2 || filter2(e)) {
            results.push(withFileTypes ? e : e.fullpath());
          }
          let r = e;
          if (e.isSymbolicLink()) {
            if (!(follow && (r = e.realpathSync())))
              continue;
            if (r.isUnknown())
              r.lstatSync();
          }
          if (r.shouldWalk(dirs, walkFilter)) {
            dirs.add(r);
          }
        }
      }
      return results;
    }
    /**
     * Support for `for await`
     *
     * Alias for {@link PathScurryBase.iterate}
     *
     * Note: As of Node 19, this is very slow, compared to other methods of
     * walking.  Consider using {@link PathScurryBase.stream} if memory overhead
     * and backpressure are concerns, or {@link PathScurryBase.walk} if not.
     */
    [Symbol.asyncIterator]() {
      return this.iterate();
    }
    iterate(entry = this.cwd, options = {}) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        options = entry;
        entry = this.cwd;
      }
      return this.stream(entry, options)[Symbol.asyncIterator]();
    }
    /**
     * Iterating over a PathScurry performs a synchronous walk.
     *
     * Alias for {@link PathScurryBase.iterateSync}
     */
    [Symbol.iterator]() {
      return this.iterateSync();
    }
    *iterateSync(entry = this.cwd, opts2 = {}) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        opts2 = entry;
        entry = this.cwd;
      }
      const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts2;
      if (!filter2 || filter2(entry)) {
        yield withFileTypes ? entry : entry.fullpath();
      }
      const dirs = /* @__PURE__ */ new Set([entry]);
      for (const dir of dirs) {
        const entries = dir.readdirSync();
        for (const e of entries) {
          if (!filter2 || filter2(e)) {
            yield withFileTypes ? e : e.fullpath();
          }
          let r = e;
          if (e.isSymbolicLink()) {
            if (!(follow && (r = e.realpathSync())))
              continue;
            if (r.isUnknown())
              r.lstatSync();
          }
          if (r.shouldWalk(dirs, walkFilter)) {
            dirs.add(r);
          }
        }
      }
    }
    stream(entry = this.cwd, opts2 = {}) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        opts2 = entry;
        entry = this.cwd;
      }
      const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts2;
      const results = new Minipass({ objectMode: true });
      if (!filter2 || filter2(entry)) {
        results.write(withFileTypes ? entry : entry.fullpath());
      }
      const dirs = /* @__PURE__ */ new Set();
      const queue = [entry];
      let processing = 0;
      const process2 = () => {
        let paused = false;
        while (!paused) {
          const dir = queue.shift();
          if (!dir) {
            if (processing === 0)
              results.end();
            return;
          }
          processing++;
          dirs.add(dir);
          const onReaddir = (er, entries, didRealpaths = false) => {
            if (er)
              return results.emit("error", er);
            if (follow && !didRealpaths) {
              const promises2 = [];
              for (const e of entries) {
                if (e.isSymbolicLink()) {
                  promises2.push(e.realpath().then((r) => r?.isUnknown() ? r.lstat() : r));
                }
              }
              if (promises2.length) {
                Promise.all(promises2).then(() => onReaddir(null, entries, true));
                return;
              }
            }
            for (const e of entries) {
              if (e && (!filter2 || filter2(e))) {
                if (!results.write(withFileTypes ? e : e.fullpath())) {
                  paused = true;
                }
              }
            }
            processing--;
            for (const e of entries) {
              const r = e.realpathCached() || e;
              if (r.shouldWalk(dirs, walkFilter)) {
                queue.push(r);
              }
            }
            if (paused && !results.flowing) {
              results.once("drain", process2);
            } else if (!sync2) {
              process2();
            }
          };
          let sync2 = true;
          dir.readdirCB(onReaddir, true);
          sync2 = false;
        }
      };
      process2();
      return results;
    }
    streamSync(entry = this.cwd, opts2 = {}) {
      if (typeof entry === "string") {
        entry = this.cwd.resolve(entry);
      } else if (!(entry instanceof PathBase)) {
        opts2 = entry;
        entry = this.cwd;
      }
      const { withFileTypes = true, follow = false, filter: filter2, walkFilter } = opts2;
      const results = new Minipass({ objectMode: true });
      const dirs = /* @__PURE__ */ new Set();
      if (!filter2 || filter2(entry)) {
        results.write(withFileTypes ? entry : entry.fullpath());
      }
      const queue = [entry];
      let processing = 0;
      const process2 = () => {
        let paused = false;
        while (!paused) {
          const dir = queue.shift();
          if (!dir) {
            if (processing === 0)
              results.end();
            return;
          }
          processing++;
          dirs.add(dir);
          const entries = dir.readdirSync();
          for (const e of entries) {
            if (!filter2 || filter2(e)) {
              if (!results.write(withFileTypes ? e : e.fullpath())) {
                paused = true;
              }
            }
          }
          processing--;
          for (const e of entries) {
            let r = e;
            if (e.isSymbolicLink()) {
              if (!(follow && (r = e.realpathSync())))
                continue;
              if (r.isUnknown())
                r.lstatSync();
            }
            if (r.shouldWalk(dirs, walkFilter)) {
              queue.push(r);
            }
          }
        }
        if (paused && !results.flowing)
          results.once("drain", process2);
      };
      process2();
      return results;
    }
    chdir(path3 = this.cwd) {
      const oldCwd = this.cwd;
      this.cwd = typeof path3 === "string" ? this.cwd.resolve(path3) : path3;
      this.cwd[setAsCwd](oldCwd);
    }
  };
  var PathScurryWin32 = class extends PathScurryBase {
    /**
     * separator for generating path strings
     */
    sep = "\\";
    constructor(cwd = process.cwd(), opts2 = {}) {
      const { nocase = true } = opts2;
      super(cwd, import_path.win32, "\\", { ...opts2, nocase });
      this.nocase = nocase;
      for (let p = this.cwd; p; p = p.parent) {
        p.nocase = this.nocase;
      }
    }
    /**
     * @internal
     */
    parseRootPath(dir) {
      return import_path.win32.parse(dir).root.toUpperCase();
    }
    /**
     * @internal
     */
    newRoot(fs2) {
      return new PathWin32(this.rootPath, IFDIR, void 0, this.roots, this.nocase, this.childrenCache(), { fs: fs2 });
    }
    /**
     * Return true if the provided path string is an absolute path
     */
    isAbsolute(p) {
      return p.startsWith("/") || p.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(p);
    }
  };
  var PathScurryPosix = class extends PathScurryBase {
    /**
     * separator for generating path strings
     */
    sep = "/";
    constructor(cwd = process.cwd(), opts2 = {}) {
      const { nocase = false } = opts2;
      super(cwd, import_path.posix, "/", { ...opts2, nocase });
      this.nocase = nocase;
    }
    /**
     * @internal
     */
    parseRootPath(_dir) {
      return "/";
    }
    /**
     * @internal
     */
    newRoot(fs2) {
      return new PathPosix(this.rootPath, IFDIR, void 0, this.roots, this.nocase, this.childrenCache(), { fs: fs2 });
    }
    /**
     * Return true if the provided path string is an absolute path
     */
    isAbsolute(p) {
      return p.startsWith("/");
    }
  };
  var PathScurryDarwin = class extends PathScurryPosix {
    constructor(cwd = process.cwd(), opts2 = {}) {
      const { nocase = true } = opts2;
      super(cwd, { ...opts2, nocase });
    }
  };
  var Path = process.platform === "win32" ? PathWin32 : PathPosix;
  var PathScurry = process.platform === "win32" ? PathScurryWin32 : process.platform === "darwin" ? PathScurryDarwin : PathScurryPosix;

  // node_modules/glob/dist/esm/glob.js
  var import_url2 = __require("url");

  // node_modules/glob/dist/esm/pattern.js
  var isPatternList = (pl) => pl.length >= 1;
  var isGlobList = (gl) => gl.length >= 1;
  var Pattern = class _Pattern {
    #patternList;
    #globList;
    #index;
    length;
    #platform;
    #rest;
    #globString;
    #isDrive;
    #isUNC;
    #isAbsolute;
    #followGlobstar = true;
    constructor(patternList, globList, index, platform) {
      if (!isPatternList(patternList)) {
        throw new TypeError("empty pattern list");
      }
      if (!isGlobList(globList)) {
        throw new TypeError("empty glob list");
      }
      if (globList.length !== patternList.length) {
        throw new TypeError("mismatched pattern list and glob list lengths");
      }
      this.length = patternList.length;
      if (index < 0 || index >= this.length) {
        throw new TypeError("index out of range");
      }
      this.#patternList = patternList;
      this.#globList = globList;
      this.#index = index;
      this.#platform = platform;
      if (this.#index === 0) {
        if (this.isUNC()) {
          const [p0, p1, p2, p3, ...prest] = this.#patternList;
          const [g0, g1, g2, g3, ...grest] = this.#globList;
          if (prest[0] === "") {
            prest.shift();
            grest.shift();
          }
          const p = [p0, p1, p2, p3, ""].join("/");
          const g = [g0, g1, g2, g3, ""].join("/");
          this.#patternList = [p, ...prest];
          this.#globList = [g, ...grest];
          this.length = this.#patternList.length;
        } else if (this.isDrive() || this.isAbsolute()) {
          const [p1, ...prest] = this.#patternList;
          const [g1, ...grest] = this.#globList;
          if (prest[0] === "") {
            prest.shift();
            grest.shift();
          }
          const p = p1 + "/";
          const g = g1 + "/";
          this.#patternList = [p, ...prest];
          this.#globList = [g, ...grest];
          this.length = this.#patternList.length;
        }
      }
    }
    /**
     * The first entry in the parsed list of patterns
     */
    pattern() {
      return this.#patternList[this.#index];
    }
    /**
     * true of if pattern() returns a string
     */
    isString() {
      return typeof this.#patternList[this.#index] === "string";
    }
    /**
     * true of if pattern() returns GLOBSTAR
     */
    isGlobstar() {
      return this.#patternList[this.#index] === GLOBSTAR;
    }
    /**
     * true if pattern() returns a regexp
     */
    isRegExp() {
      return this.#patternList[this.#index] instanceof RegExp;
    }
    /**
     * The /-joined set of glob parts that make up this pattern
     */
    globString() {
      return this.#globString = this.#globString || (this.#index === 0 ? this.isAbsolute() ? this.#globList[0] + this.#globList.slice(1).join("/") : this.#globList.join("/") : this.#globList.slice(this.#index).join("/"));
    }
    /**
     * true if there are more pattern parts after this one
     */
    hasMore() {
      return this.length > this.#index + 1;
    }
    /**
     * The rest of the pattern after this part, or null if this is the end
     */
    rest() {
      if (this.#rest !== void 0)
        return this.#rest;
      if (!this.hasMore())
        return this.#rest = null;
      this.#rest = new _Pattern(this.#patternList, this.#globList, this.#index + 1, this.#platform);
      this.#rest.#isAbsolute = this.#isAbsolute;
      this.#rest.#isUNC = this.#isUNC;
      this.#rest.#isDrive = this.#isDrive;
      return this.#rest;
    }
    /**
     * true if the pattern represents a //unc/path/ on windows
     */
    isUNC() {
      const pl = this.#patternList;
      return this.#isUNC !== void 0 ? this.#isUNC : this.#isUNC = this.#platform === "win32" && this.#index === 0 && pl[0] === "" && pl[1] === "" && typeof pl[2] === "string" && !!pl[2] && typeof pl[3] === "string" && !!pl[3];
    }
    // pattern like C:/...
    // split = ['C:', ...]
    // XXX: would be nice to handle patterns like `c:*` to test the cwd
    // in c: for *, but I don't know of a way to even figure out what that
    // cwd is without actually chdir'ing into it?
    /**
     * True if the pattern starts with a drive letter on Windows
     */
    isDrive() {
      const pl = this.#patternList;
      return this.#isDrive !== void 0 ? this.#isDrive : this.#isDrive = this.#platform === "win32" && this.#index === 0 && this.length > 1 && typeof pl[0] === "string" && /^[a-z]:$/i.test(pl[0]);
    }
    // pattern = '/' or '/...' or '/x/...'
    // split = ['', ''] or ['', ...] or ['', 'x', ...]
    // Drive and UNC both considered absolute on windows
    /**
     * True if the pattern is rooted on an absolute path
     */
    isAbsolute() {
      const pl = this.#patternList;
      return this.#isAbsolute !== void 0 ? this.#isAbsolute : this.#isAbsolute = pl[0] === "" && pl.length > 1 || this.isDrive() || this.isUNC();
    }
    /**
     * consume the root of the pattern, and return it
     */
    root() {
      const p = this.#patternList[0];
      return typeof p === "string" && this.isAbsolute() && this.#index === 0 ? p : "";
    }
    /**
     * Check to see if the current globstar pattern is allowed to follow
     * a symbolic link.
     */
    checkFollowGlobstar() {
      return !(this.#index === 0 || !this.isGlobstar() || !this.#followGlobstar);
    }
    /**
     * Mark that the current globstar pattern is following a symbolic link
     */
    markFollowGlobstar() {
      if (this.#index === 0 || !this.isGlobstar() || !this.#followGlobstar)
        return false;
      this.#followGlobstar = false;
      return true;
    }
  };

  // node_modules/glob/dist/esm/ignore.js
  var defaultPlatform2 = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";
  var Ignore = class {
    relative;
    relativeChildren;
    absolute;
    absoluteChildren;
    constructor(ignored, { nobrace, nocase, noext, noglobstar, platform = defaultPlatform2 }) {
      this.relative = [];
      this.absolute = [];
      this.relativeChildren = [];
      this.absoluteChildren = [];
      const mmopts = {
        dot: true,
        nobrace,
        nocase,
        noext,
        noglobstar,
        optimizationLevel: 2,
        platform,
        nocomment: true,
        nonegate: true
      };
      for (const ign of ignored) {
        const mm = new Minimatch(ign, mmopts);
        for (let i = 0; i < mm.set.length; i++) {
          const parsed = mm.set[i];
          const globParts = mm.globParts[i];
          if (!parsed || !globParts) {
            throw new Error("invalid pattern object");
          }
          const p = new Pattern(parsed, globParts, 0, platform);
          const m = new Minimatch(p.globString(), mmopts);
          const children = globParts[globParts.length - 1] === "**";
          const absolute = p.isAbsolute();
          if (absolute)
            this.absolute.push(m);
          else
            this.relative.push(m);
          if (children) {
            if (absolute)
              this.absoluteChildren.push(m);
            else
              this.relativeChildren.push(m);
          }
        }
      }
    }
    ignored(p) {
      const fullpath = p.fullpath();
      const fullpaths = `${fullpath}/`;
      const relative2 = p.relative() || ".";
      const relatives = `${relative2}/`;
      for (const m of this.relative) {
        if (m.match(relative2) || m.match(relatives))
          return true;
      }
      for (const m of this.absolute) {
        if (m.match(fullpath) || m.match(fullpaths))
          return true;
      }
      return false;
    }
    childrenIgnored(p) {
      const fullpath = p.fullpath() + "/";
      const relative2 = (p.relative() || ".") + "/";
      for (const m of this.relativeChildren) {
        if (m.match(relative2))
          return true;
      }
      for (const m of this.absoluteChildren) {
        if (m.match(fullpath))
          return true;
      }
      return false;
    }
  };

  // node_modules/glob/dist/esm/processor.js
  var HasWalkedCache = class _HasWalkedCache {
    store;
    constructor(store = /* @__PURE__ */ new Map()) {
      this.store = store;
    }
    copy() {
      return new _HasWalkedCache(new Map(this.store));
    }
    hasWalked(target, pattern) {
      return this.store.get(target.fullpath())?.has(pattern.globString());
    }
    storeWalked(target, pattern) {
      const fullpath = target.fullpath();
      const cached = this.store.get(fullpath);
      if (cached)
        cached.add(pattern.globString());
      else
        this.store.set(fullpath, /* @__PURE__ */ new Set([pattern.globString()]));
    }
  };
  var MatchRecord = class {
    store = /* @__PURE__ */ new Map();
    add(target, absolute, ifDir) {
      const n = (absolute ? 2 : 0) | (ifDir ? 1 : 0);
      const current = this.store.get(target);
      this.store.set(target, current === void 0 ? n : n & current);
    }
    // match, absolute, ifdir
    entries() {
      return [...this.store.entries()].map(([path3, n]) => [
        path3,
        !!(n & 2),
        !!(n & 1)
      ]);
    }
  };
  var SubWalks = class {
    store = /* @__PURE__ */ new Map();
    add(target, pattern) {
      if (!target.canReaddir()) {
        return;
      }
      const subs = this.store.get(target);
      if (subs) {
        if (!subs.find((p) => p.globString() === pattern.globString())) {
          subs.push(pattern);
        }
      } else
        this.store.set(target, [pattern]);
    }
    get(target) {
      const subs = this.store.get(target);
      if (!subs) {
        throw new Error("attempting to walk unknown path");
      }
      return subs;
    }
    entries() {
      return this.keys().map((k) => [k, this.store.get(k)]);
    }
    keys() {
      return [...this.store.keys()].filter((t) => t.canReaddir());
    }
  };
  var Processor = class _Processor {
    hasWalkedCache;
    matches = new MatchRecord();
    subwalks = new SubWalks();
    patterns;
    follow;
    dot;
    opts;
    constructor(opts2, hasWalkedCache) {
      this.opts = opts2;
      this.follow = !!opts2.follow;
      this.dot = !!opts2.dot;
      this.hasWalkedCache = hasWalkedCache ? hasWalkedCache.copy() : new HasWalkedCache();
    }
    processPatterns(target, patterns) {
      this.patterns = patterns;
      const processingSet = patterns.map((p) => [target, p]);
      for (let [t, pattern] of processingSet) {
        this.hasWalkedCache.storeWalked(t, pattern);
        const root = pattern.root();
        const absolute = pattern.isAbsolute() && this.opts.absolute !== false;
        if (root) {
          t = t.resolve(root === "/" && this.opts.root !== void 0 ? this.opts.root : root);
          const rest2 = pattern.rest();
          if (!rest2) {
            this.matches.add(t, true, false);
            continue;
          } else {
            pattern = rest2;
          }
        }
        if (t.isENOENT())
          continue;
        let p;
        let rest;
        let changed = false;
        while (typeof (p = pattern.pattern()) === "string" && (rest = pattern.rest())) {
          const c = t.resolve(p);
          t = c;
          pattern = rest;
          changed = true;
        }
        p = pattern.pattern();
        rest = pattern.rest();
        if (changed) {
          if (this.hasWalkedCache.hasWalked(t, pattern))
            continue;
          this.hasWalkedCache.storeWalked(t, pattern);
        }
        if (typeof p === "string") {
          const ifDir = p === ".." || p === "" || p === ".";
          this.matches.add(t.resolve(p), absolute, ifDir);
          continue;
        } else if (p === GLOBSTAR) {
          if (!t.isSymbolicLink() || this.follow || pattern.checkFollowGlobstar()) {
            this.subwalks.add(t, pattern);
          }
          const rp = rest?.pattern();
          const rrest = rest?.rest();
          if (!rest || (rp === "" || rp === ".") && !rrest) {
            this.matches.add(t, absolute, rp === "" || rp === ".");
          } else {
            if (rp === "..") {
              const tp = t.parent || t;
              if (!rrest)
                this.matches.add(tp, absolute, true);
              else if (!this.hasWalkedCache.hasWalked(tp, rrest)) {
                this.subwalks.add(tp, rrest);
              }
            }
          }
        } else if (p instanceof RegExp) {
          this.subwalks.add(t, pattern);
        }
      }
      return this;
    }
    subwalkTargets() {
      return this.subwalks.keys();
    }
    child() {
      return new _Processor(this.opts, this.hasWalkedCache);
    }
    // return a new Processor containing the subwalks for each
    // child entry, and a set of matches, and
    // a hasWalkedCache that's a copy of this one
    // then we're going to call
    filterEntries(parent, entries) {
      const patterns = this.subwalks.get(parent);
      const results = this.child();
      for (const e of entries) {
        for (const pattern of patterns) {
          const absolute = pattern.isAbsolute();
          const p = pattern.pattern();
          const rest = pattern.rest();
          if (p === GLOBSTAR) {
            results.testGlobstar(e, pattern, rest, absolute);
          } else if (p instanceof RegExp) {
            results.testRegExp(e, p, rest, absolute);
          } else {
            results.testString(e, p, rest, absolute);
          }
        }
      }
      return results;
    }
    testGlobstar(e, pattern, rest, absolute) {
      if (this.dot || !e.name.startsWith(".")) {
        if (!pattern.hasMore()) {
          this.matches.add(e, absolute, false);
        }
        if (e.canReaddir()) {
          if (this.follow || !e.isSymbolicLink()) {
            this.subwalks.add(e, pattern);
          } else if (e.isSymbolicLink()) {
            if (rest && pattern.checkFollowGlobstar()) {
              this.subwalks.add(e, rest);
            } else if (pattern.markFollowGlobstar()) {
              this.subwalks.add(e, pattern);
            }
          }
        }
      }
      if (rest) {
        const rp = rest.pattern();
        if (typeof rp === "string" && // dots and empty were handled already
        rp !== ".." && rp !== "" && rp !== ".") {
          this.testString(e, rp, rest.rest(), absolute);
        } else if (rp === "..") {
          const ep = e.parent || e;
          this.subwalks.add(ep, rest);
        } else if (rp instanceof RegExp) {
          this.testRegExp(e, rp, rest.rest(), absolute);
        }
      }
    }
    testRegExp(e, p, rest, absolute) {
      if (!p.test(e.name))
        return;
      if (!rest) {
        this.matches.add(e, absolute, false);
      } else {
        this.subwalks.add(e, rest);
      }
    }
    testString(e, p, rest, absolute) {
      if (!e.isNamed(p))
        return;
      if (!rest) {
        this.matches.add(e, absolute, false);
      } else {
        this.subwalks.add(e, rest);
      }
    }
  };

  // node_modules/glob/dist/esm/walker.js
  var makeIgnore = (ignore, opts2) => typeof ignore === "string" ? new Ignore([ignore], opts2) : Array.isArray(ignore) ? new Ignore(ignore, opts2) : ignore;
  var GlobUtil = class {
    path;
    patterns;
    opts;
    seen = /* @__PURE__ */ new Set();
    paused = false;
    aborted = false;
    #onResume = [];
    #ignore;
    #sep;
    signal;
    maxDepth;
    constructor(patterns, path3, opts2) {
      this.patterns = patterns;
      this.path = path3;
      this.opts = opts2;
      this.#sep = !opts2.posix && opts2.platform === "win32" ? "\\" : "/";
      if (opts2.ignore) {
        this.#ignore = makeIgnore(opts2.ignore, opts2);
      }
      this.maxDepth = opts2.maxDepth || Infinity;
      if (opts2.signal) {
        this.signal = opts2.signal;
        this.signal.addEventListener("abort", () => {
          this.#onResume.length = 0;
        });
      }
    }
    #ignored(path3) {
      return this.seen.has(path3) || !!this.#ignore?.ignored?.(path3);
    }
    #childrenIgnored(path3) {
      return !!this.#ignore?.childrenIgnored?.(path3);
    }
    // backpressure mechanism
    pause() {
      this.paused = true;
    }
    resume() {
      if (this.signal?.aborted)
        return;
      this.paused = false;
      let fn = void 0;
      while (!this.paused && (fn = this.#onResume.shift())) {
        fn();
      }
    }
    onResume(fn) {
      if (this.signal?.aborted)
        return;
      if (!this.paused) {
        fn();
      } else {
        this.#onResume.push(fn);
      }
    }
    // do the requisite realpath/stat checking, and return the path
    // to add or undefined to filter it out.
    async matchCheck(e, ifDir) {
      if (ifDir && this.opts.nodir)
        return void 0;
      let rpc;
      if (this.opts.realpath) {
        rpc = e.realpathCached() || await e.realpath();
        if (!rpc)
          return void 0;
        e = rpc;
      }
      const needStat = e.isUnknown() || this.opts.stat;
      return this.matchCheckTest(needStat ? await e.lstat() : e, ifDir);
    }
    matchCheckTest(e, ifDir) {
      return e && (this.maxDepth === Infinity || e.depth() <= this.maxDepth) && (!ifDir || e.canReaddir()) && (!this.opts.nodir || !e.isDirectory()) && !this.#ignored(e) ? e : void 0;
    }
    matchCheckSync(e, ifDir) {
      if (ifDir && this.opts.nodir)
        return void 0;
      let rpc;
      if (this.opts.realpath) {
        rpc = e.realpathCached() || e.realpathSync();
        if (!rpc)
          return void 0;
        e = rpc;
      }
      const needStat = e.isUnknown() || this.opts.stat;
      return this.matchCheckTest(needStat ? e.lstatSync() : e, ifDir);
    }
    matchFinish(e, absolute) {
      if (this.#ignored(e))
        return;
      const abs = this.opts.absolute === void 0 ? absolute : this.opts.absolute;
      this.seen.add(e);
      const mark = this.opts.mark && e.isDirectory() ? this.#sep : "";
      if (this.opts.withFileTypes) {
        this.matchEmit(e);
      } else if (abs) {
        const abs2 = this.opts.posix ? e.fullpathPosix() : e.fullpath();
        this.matchEmit(abs2 + mark);
      } else {
        const rel = this.opts.posix ? e.relativePosix() : e.relative();
        const pre = this.opts.dotRelative && !rel.startsWith(".." + this.#sep) ? "." + this.#sep : "";
        this.matchEmit(!rel ? "." + mark : pre + rel + mark);
      }
    }
    async match(e, absolute, ifDir) {
      const p = await this.matchCheck(e, ifDir);
      if (p)
        this.matchFinish(p, absolute);
    }
    matchSync(e, absolute, ifDir) {
      const p = this.matchCheckSync(e, ifDir);
      if (p)
        this.matchFinish(p, absolute);
    }
    walkCB(target, patterns, cb) {
      if (this.signal?.aborted)
        cb();
      this.walkCB2(target, patterns, new Processor(this.opts), cb);
    }
    walkCB2(target, patterns, processor, cb) {
      if (this.#childrenIgnored(target))
        return cb();
      if (this.signal?.aborted)
        cb();
      if (this.paused) {
        this.onResume(() => this.walkCB2(target, patterns, processor, cb));
        return;
      }
      processor.processPatterns(target, patterns);
      let tasks = 1;
      const next = () => {
        if (--tasks === 0)
          cb();
      };
      for (const [m, absolute, ifDir] of processor.matches.entries()) {
        if (this.#ignored(m))
          continue;
        tasks++;
        this.match(m, absolute, ifDir).then(() => next());
      }
      for (const t of processor.subwalkTargets()) {
        if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
          continue;
        }
        tasks++;
        const childrenCached = t.readdirCached();
        if (t.calledReaddir())
          this.walkCB3(t, childrenCached, processor, next);
        else {
          t.readdirCB((_, entries) => this.walkCB3(t, entries, processor, next), true);
        }
      }
      next();
    }
    walkCB3(target, entries, processor, cb) {
      processor = processor.filterEntries(target, entries);
      let tasks = 1;
      const next = () => {
        if (--tasks === 0)
          cb();
      };
      for (const [m, absolute, ifDir] of processor.matches.entries()) {
        if (this.#ignored(m))
          continue;
        tasks++;
        this.match(m, absolute, ifDir).then(() => next());
      }
      for (const [target2, patterns] of processor.subwalks.entries()) {
        tasks++;
        this.walkCB2(target2, patterns, processor.child(), next);
      }
      next();
    }
    walkCBSync(target, patterns, cb) {
      if (this.signal?.aborted)
        cb();
      this.walkCB2Sync(target, patterns, new Processor(this.opts), cb);
    }
    walkCB2Sync(target, patterns, processor, cb) {
      if (this.#childrenIgnored(target))
        return cb();
      if (this.signal?.aborted)
        cb();
      if (this.paused) {
        this.onResume(() => this.walkCB2Sync(target, patterns, processor, cb));
        return;
      }
      processor.processPatterns(target, patterns);
      let tasks = 1;
      const next = () => {
        if (--tasks === 0)
          cb();
      };
      for (const [m, absolute, ifDir] of processor.matches.entries()) {
        if (this.#ignored(m))
          continue;
        this.matchSync(m, absolute, ifDir);
      }
      for (const t of processor.subwalkTargets()) {
        if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
          continue;
        }
        tasks++;
        const children = t.readdirSync();
        this.walkCB3Sync(t, children, processor, next);
      }
      next();
    }
    walkCB3Sync(target, entries, processor, cb) {
      processor = processor.filterEntries(target, entries);
      let tasks = 1;
      const next = () => {
        if (--tasks === 0)
          cb();
      };
      for (const [m, absolute, ifDir] of processor.matches.entries()) {
        if (this.#ignored(m))
          continue;
        this.matchSync(m, absolute, ifDir);
      }
      for (const [target2, patterns] of processor.subwalks.entries()) {
        tasks++;
        this.walkCB2Sync(target2, patterns, processor.child(), next);
      }
      next();
    }
  };
  var GlobWalker = class extends GlobUtil {
    matches;
    constructor(patterns, path3, opts2) {
      super(patterns, path3, opts2);
      this.matches = /* @__PURE__ */ new Set();
    }
    matchEmit(e) {
      this.matches.add(e);
    }
    async walk() {
      if (this.signal?.aborted)
        throw this.signal.reason;
      if (this.path.isUnknown()) {
        await this.path.lstat();
      }
      await new Promise((res, rej) => {
        this.walkCB(this.path, this.patterns, () => {
          if (this.signal?.aborted) {
            rej(this.signal.reason);
          } else {
            res(this.matches);
          }
        });
      });
      return this.matches;
    }
    walkSync() {
      if (this.signal?.aborted)
        throw this.signal.reason;
      if (this.path.isUnknown()) {
        this.path.lstatSync();
      }
      this.walkCBSync(this.path, this.patterns, () => {
        if (this.signal?.aborted)
          throw this.signal.reason;
      });
      return this.matches;
    }
  };
  var GlobStream = class extends GlobUtil {
    results;
    constructor(patterns, path3, opts2) {
      super(patterns, path3, opts2);
      this.results = new Minipass({
        signal: this.signal,
        objectMode: true
      });
      this.results.on("drain", () => this.resume());
      this.results.on("resume", () => this.resume());
    }
    matchEmit(e) {
      this.results.write(e);
      if (!this.results.flowing)
        this.pause();
    }
    stream() {
      const target = this.path;
      if (target.isUnknown()) {
        target.lstat().then(() => {
          this.walkCB(target, this.patterns, () => this.results.end());
        });
      } else {
        this.walkCB(target, this.patterns, () => this.results.end());
      }
      return this.results;
    }
    streamSync() {
      if (this.path.isUnknown()) {
        this.path.lstatSync();
      }
      this.walkCBSync(this.path, this.patterns, () => this.results.end());
      return this.results;
    }
  };

  // node_modules/glob/dist/esm/glob.js
  var defaultPlatform3 = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";
  var Glob = class {
    absolute;
    cwd;
    root;
    dot;
    dotRelative;
    follow;
    ignore;
    magicalBraces;
    mark;
    matchBase;
    maxDepth;
    nobrace;
    nocase;
    nodir;
    noext;
    noglobstar;
    pattern;
    platform;
    realpath;
    scurry;
    stat;
    signal;
    windowsPathsNoEscape;
    withFileTypes;
    /**
     * The options provided to the constructor.
     */
    opts;
    /**
     * An array of parsed immutable {@link Pattern} objects.
     */
    patterns;
    /**
     * All options are stored as properties on the `Glob` object.
     *
     * See {@link GlobOptions} for full options descriptions.
     *
     * Note that a previous `Glob` object can be passed as the
     * `GlobOptions` to another `Glob` instantiation to re-use settings
     * and caches with a new pattern.
     *
     * Traversal functions can be called multiple times to run the walk
     * again.
     */
    constructor(pattern, opts2) {
      if (!opts2)
        throw new TypeError("glob options required");
      this.withFileTypes = !!opts2.withFileTypes;
      this.signal = opts2.signal;
      this.follow = !!opts2.follow;
      this.dot = !!opts2.dot;
      this.dotRelative = !!opts2.dotRelative;
      this.nodir = !!opts2.nodir;
      this.mark = !!opts2.mark;
      if (!opts2.cwd) {
        this.cwd = "";
      } else if (opts2.cwd instanceof URL || opts2.cwd.startsWith("file://")) {
        opts2.cwd = (0, import_url2.fileURLToPath)(opts2.cwd);
      }
      this.cwd = opts2.cwd || "";
      this.root = opts2.root;
      this.magicalBraces = !!opts2.magicalBraces;
      this.nobrace = !!opts2.nobrace;
      this.noext = !!opts2.noext;
      this.realpath = !!opts2.realpath;
      this.absolute = opts2.absolute;
      this.noglobstar = !!opts2.noglobstar;
      this.matchBase = !!opts2.matchBase;
      this.maxDepth = typeof opts2.maxDepth === "number" ? opts2.maxDepth : Infinity;
      this.stat = !!opts2.stat;
      this.ignore = opts2.ignore;
      if (this.withFileTypes && this.absolute !== void 0) {
        throw new Error("cannot set absolute and withFileTypes:true");
      }
      if (typeof pattern === "string") {
        pattern = [pattern];
      }
      this.windowsPathsNoEscape = !!opts2.windowsPathsNoEscape || opts2.allowWindowsEscape === false;
      if (this.windowsPathsNoEscape) {
        pattern = pattern.map((p) => p.replace(/\\/g, "/"));
      }
      if (this.matchBase) {
        if (opts2.noglobstar) {
          throw new TypeError("base matching requires globstar");
        }
        pattern = pattern.map((p) => p.includes("/") ? p : `./**/${p}`);
      }
      this.pattern = pattern;
      this.platform = opts2.platform || defaultPlatform3;
      this.opts = { ...opts2, platform: this.platform };
      if (opts2.scurry) {
        this.scurry = opts2.scurry;
        if (opts2.nocase !== void 0 && opts2.nocase !== opts2.scurry.nocase) {
          throw new Error("nocase option contradicts provided scurry option");
        }
      } else {
        const Scurry = opts2.platform === "win32" ? PathScurryWin32 : opts2.platform === "darwin" ? PathScurryDarwin : opts2.platform ? PathScurryPosix : PathScurry;
        this.scurry = new Scurry(this.cwd, {
          nocase: opts2.nocase,
          fs: opts2.fs
        });
      }
      this.nocase = this.scurry.nocase;
      const nocaseMagicOnly = this.platform === "darwin" || this.platform === "win32";
      const mmo = {
        // default nocase based on platform
        ...opts2,
        dot: this.dot,
        matchBase: this.matchBase,
        nobrace: this.nobrace,
        nocase: this.nocase,
        nocaseMagicOnly,
        nocomment: true,
        noext: this.noext,
        nonegate: true,
        optimizationLevel: 2,
        platform: this.platform,
        windowsPathsNoEscape: this.windowsPathsNoEscape,
        debug: !!this.opts.debug
      };
      const mms = this.pattern.map((p) => new Minimatch(p, mmo));
      const [matchSet, globParts] = mms.reduce((set, m) => {
        set[0].push(...m.set);
        set[1].push(...m.globParts);
        return set;
      }, [[], []]);
      this.patterns = matchSet.map((set, i) => {
        const g = globParts[i];
        if (!g)
          throw new Error("invalid pattern object");
        return new Pattern(set, g, 0, this.platform);
      });
    }
    async walk() {
      return [
        ...await new GlobWalker(this.patterns, this.scurry.cwd, {
          ...this.opts,
          maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
          platform: this.platform,
          nocase: this.nocase
        }).walk()
      ];
    }
    walkSync() {
      return [
        ...new GlobWalker(this.patterns, this.scurry.cwd, {
          ...this.opts,
          maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
          platform: this.platform,
          nocase: this.nocase
        }).walkSync()
      ];
    }
    stream() {
      return new GlobStream(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
        platform: this.platform,
        nocase: this.nocase
      }).stream();
    }
    streamSync() {
      return new GlobStream(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
        platform: this.platform,
        nocase: this.nocase
      }).streamSync();
    }
    /**
     * Default sync iteration function. Returns a Generator that
     * iterates over the results.
     */
    iterateSync() {
      return this.streamSync()[Symbol.iterator]();
    }
    [Symbol.iterator]() {
      return this.iterateSync();
    }
    /**
     * Default async iteration function. Returns an AsyncGenerator that
     * iterates over the results.
     */
    iterate() {
      return this.stream()[Symbol.asyncIterator]();
    }
    [Symbol.asyncIterator]() {
      return this.iterate();
    }
  };

  // node_modules/glob/dist/esm/has-magic.js
  var hasMagic = (pattern, options = {}) => {
    if (!Array.isArray(pattern)) {
      pattern = [pattern];
    }
    for (const p of pattern) {
      if (new Minimatch(p, options).hasMagic())
        return true;
    }
    return false;
  };

  // node_modules/glob/dist/esm/index.js
  function globStreamSync(pattern, options = {}) {
    return new Glob(pattern, options).streamSync();
  }
  function globStream(pattern, options = {}) {
    return new Glob(pattern, options).stream();
  }
  function globSync(pattern, options = {}) {
    return new Glob(pattern, options).walkSync();
  }
  async function glob_(pattern, options = {}) {
    return new Glob(pattern, options).walk();
  }
  function globIterateSync(pattern, options = {}) {
    return new Glob(pattern, options).iterateSync();
  }
  function globIterate(pattern, options = {}) {
    return new Glob(pattern, options).iterate();
  }
  var streamSync = globStreamSync;
  var stream = Object.assign(globStream, { sync: globStreamSync });
  var iterateSync = globIterateSync;
  var iterate = Object.assign(globIterate, {
    sync: globIterateSync
  });
  var sync = Object.assign(globSync, {
    stream: globStreamSync,
    iterate: globIterateSync
  });
  var glob = Object.assign(glob_, {
    glob: glob_,
    globSync,
    sync,
    globStream,
    stream,
    globStreamSync,
    streamSync,
    globIterate,
    iterate,
    globIterateSync,
    iterateSync,
    Glob,
    hasMagic,
    escape,
    unescape
  });
  glob.glob = glob;

  // node_modules/rimraf/dist/esm/opt-arg.js
  var typeOrUndef = (val, t) => typeof val === "undefined" || typeof val === t;
  var isRimrafOptions = (o) => !!o && typeof o === "object" && typeOrUndef(o.preserveRoot, "boolean") && typeOrUndef(o.tmp, "string") && typeOrUndef(o.maxRetries, "number") && typeOrUndef(o.retryDelay, "number") && typeOrUndef(o.backoff, "number") && typeOrUndef(o.maxBackoff, "number") && (typeOrUndef(o.glob, "boolean") || o.glob && typeof o.glob === "object") && typeOrUndef(o.filter, "function");
  var assertRimrafOptions = (o) => {
    if (!isRimrafOptions(o)) {
      throw new Error("invalid rimraf options");
    }
  };
  var optArgT = (opt) => {
    assertRimrafOptions(opt);
    const { glob: glob2, ...options } = opt;
    if (!glob2) {
      return options;
    }
    const globOpt = glob2 === true ? opt.signal ? { signal: opt.signal } : {} : opt.signal ? {
      signal: opt.signal,
      ...glob2
    } : glob2;
    return {
      ...options,
      glob: {
        ...globOpt,
        // always get absolute paths from glob, to ensure
        // that we are referencing the correct thing.
        absolute: true,
        withFileTypes: false
      }
    };
  };
  var optArg = (opt = {}) => optArgT(opt);
  var optArgSync = (opt = {}) => optArgT(opt);

  // node_modules/rimraf/dist/esm/path-arg.js
  var import_path2 = __require("path");
  var import_util = __require("util");

  // node_modules/rimraf/dist/esm/platform.js
  var platform_default = process.env.__TESTING_RIMRAF_PLATFORM__ || process.platform;

  // node_modules/rimraf/dist/esm/path-arg.js
  var pathArg = (path3, opt = {}) => {
    const type = typeof path3;
    if (type !== "string") {
      const ctor = path3 && type === "object" && path3.constructor;
      const received = ctor && ctor.name ? `an instance of ${ctor.name}` : type === "object" ? (0, import_util.inspect)(path3) : `type ${type} ${path3}`;
      const msg = `The "path" argument must be of type string. Received ${received}`;
      throw Object.assign(new TypeError(msg), {
        path: path3,
        code: "ERR_INVALID_ARG_TYPE"
      });
    }
    if (/\0/.test(path3)) {
      const msg = "path must be a string without null bytes";
      throw Object.assign(new TypeError(msg), {
        path: path3,
        code: "ERR_INVALID_ARG_VALUE"
      });
    }
    path3 = (0, import_path2.resolve)(path3);
    const { root } = (0, import_path2.parse)(path3);
    if (path3 === root && opt.preserveRoot !== false) {
      const msg = "refusing to remove root directory without preserveRoot:false";
      throw Object.assign(new Error(msg), {
        path: path3,
        code: "ERR_PRESERVE_ROOT"
      });
    }
    if (platform_default === "win32") {
      const badWinChars = /[*|"<>?:]/;
      const { root: root2 } = (0, import_path2.parse)(path3);
      if (badWinChars.test(path3.substring(root2.length))) {
        throw Object.assign(new Error("Illegal characters in path."), {
          path: path3,
          code: "EINVAL"
        });
      }
    }
    return path3;
  };
  var path_arg_default = pathArg;

  // node_modules/rimraf/dist/esm/fs.js
  var import_fs2 = __toESM2(__require("fs"), 1);
  var import_fs3 = __require("fs");
  var import_fs4 = __require("fs");
  var readdirSync2 = (path3) => (0, import_fs4.readdirSync)(path3, { withFileTypes: true });
  var chmod = (path3, mode) => new Promise((res, rej) => import_fs2.default.chmod(path3, mode, (er, ...d) => er ? rej(er) : res(...d)));
  var mkdir = (path3, options) => new Promise((res, rej) => import_fs2.default.mkdir(path3, options, (er, made) => er ? rej(er) : res(made)));
  var readdir2 = (path3) => new Promise((res, rej) => import_fs2.default.readdir(path3, { withFileTypes: true }, (er, data) => er ? rej(er) : res(data)));
  var rename = (oldPath, newPath) => new Promise((res, rej) => import_fs2.default.rename(oldPath, newPath, (er, ...d) => er ? rej(er) : res(...d)));
  var rm = (path3, options) => new Promise((res, rej) => import_fs2.default.rm(path3, options, (er, ...d) => er ? rej(er) : res(...d)));
  var rmdir = (path3) => new Promise((res, rej) => import_fs2.default.rmdir(path3, (er, ...d) => er ? rej(er) : res(...d)));
  var stat = (path3) => new Promise((res, rej) => import_fs2.default.stat(path3, (er, data) => er ? rej(er) : res(data)));
  var lstat2 = (path3) => new Promise((res, rej) => import_fs2.default.lstat(path3, (er, data) => er ? rej(er) : res(data)));
  var unlink = (path3) => new Promise((res, rej) => import_fs2.default.unlink(path3, (er, ...d) => er ? rej(er) : res(...d)));
  var promises = {
    chmod,
    mkdir,
    readdir: readdir2,
    rename,
    rm,
    rmdir,
    stat,
    lstat: lstat2,
    unlink
  };

  // node_modules/rimraf/dist/esm/rimraf-posix.js
  var import_path3 = __require("path");

  // node_modules/rimraf/dist/esm/readdir-or-error.js
  var { readdir: readdir3 } = promises;
  var readdirOrError = (path3) => readdir3(path3).catch((er) => er);
  var readdirOrErrorSync = (path3) => {
    try {
      return readdirSync2(path3);
    } catch (er) {
      return er;
    }
  };

  // node_modules/rimraf/dist/esm/ignore-enoent.js
  var ignoreENOENT = async (p) => p.catch((er) => {
    if (er.code !== "ENOENT") {
      throw er;
    }
  });
  var ignoreENOENTSync = (fn) => {
    try {
      return fn();
    } catch (er) {
      if (er?.code !== "ENOENT") {
        throw er;
      }
    }
  };

  // node_modules/rimraf/dist/esm/rimraf-posix.js
  var { lstat: lstat3, rmdir: rmdir2, unlink: unlink2 } = promises;
  var rimrafPosix = async (path3, opt) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    try {
      return await rimrafPosixDir(path3, opt, await lstat3(path3));
    } catch (er) {
      if (er?.code === "ENOENT")
        return true;
      throw er;
    }
  };
  var rimrafPosixSync = (path3, opt) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    try {
      return rimrafPosixDirSync(path3, opt, (0, import_fs3.lstatSync)(path3));
    } catch (er) {
      if (er?.code === "ENOENT")
        return true;
      throw er;
    }
  };
  var rimrafPosixDir = async (path3, opt, ent) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    const entries = ent.isDirectory() ? await readdirOrError(path3) : null;
    if (!Array.isArray(entries)) {
      if (entries) {
        if (entries.code === "ENOENT") {
          return true;
        }
        if (entries.code !== "ENOTDIR") {
          throw entries;
        }
      }
      if (opt.filter && !await opt.filter(path3, ent)) {
        return false;
      }
      await ignoreENOENT(unlink2(path3));
      return true;
    }
    const removedAll = (await Promise.all(entries.map((ent2) => rimrafPosixDir((0, import_path3.resolve)(path3, ent2.name), opt, ent2)))).reduce((a, b) => a && b, true);
    if (!removedAll) {
      return false;
    }
    if (opt.preserveRoot === false && path3 === (0, import_path3.parse)(path3).root) {
      return false;
    }
    if (opt.filter && !await opt.filter(path3, ent)) {
      return false;
    }
    await ignoreENOENT(rmdir2(path3));
    return true;
  };
  var rimrafPosixDirSync = (path3, opt, ent) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    const entries = ent.isDirectory() ? readdirOrErrorSync(path3) : null;
    if (!Array.isArray(entries)) {
      if (entries) {
        if (entries.code === "ENOENT") {
          return true;
        }
        if (entries.code !== "ENOTDIR") {
          throw entries;
        }
      }
      if (opt.filter && !opt.filter(path3, ent)) {
        return false;
      }
      ignoreENOENTSync(() => (0, import_fs3.unlinkSync)(path3));
      return true;
    }
    let removedAll = true;
    for (const ent2 of entries) {
      const p = (0, import_path3.resolve)(path3, ent2.name);
      removedAll = rimrafPosixDirSync(p, opt, ent2) && removedAll;
    }
    if (opt.preserveRoot === false && path3 === (0, import_path3.parse)(path3).root) {
      return false;
    }
    if (!removedAll) {
      return false;
    }
    if (opt.filter && !opt.filter(path3, ent)) {
      return false;
    }
    ignoreENOENTSync(() => (0, import_fs3.rmdirSync)(path3));
    return true;
  };

  // node_modules/rimraf/dist/esm/rimraf-windows.js
  var import_path6 = __require("path");

  // node_modules/rimraf/dist/esm/fix-eperm.js
  var { chmod: chmod2 } = promises;
  var fixEPERM = (fn) => async (path3) => {
    try {
      return await fn(path3);
    } catch (er) {
      const fer = er;
      if (fer?.code === "ENOENT") {
        return;
      }
      if (fer?.code === "EPERM") {
        try {
          await chmod2(path3, 438);
        } catch (er2) {
          const fer2 = er2;
          if (fer2?.code === "ENOENT") {
            return;
          }
          throw er;
        }
        return await fn(path3);
      }
      throw er;
    }
  };
  var fixEPERMSync = (fn) => (path3) => {
    try {
      return fn(path3);
    } catch (er) {
      const fer = er;
      if (fer?.code === "ENOENT") {
        return;
      }
      if (fer?.code === "EPERM") {
        try {
          (0, import_fs3.chmodSync)(path3, 438);
        } catch (er2) {
          const fer2 = er2;
          if (fer2?.code === "ENOENT") {
            return;
          }
          throw er;
        }
        return fn(path3);
      }
      throw er;
    }
  };

  // node_modules/rimraf/dist/esm/retry-busy.js
  var MAXBACKOFF = 200;
  var RATE = 1.2;
  var MAXRETRIES = 10;
  var codes = /* @__PURE__ */ new Set(["EMFILE", "ENFILE", "EBUSY"]);
  var retryBusy = (fn) => {
    const method = async (path3, opt, backoff = 1, total = 0) => {
      const mbo = opt.maxBackoff || MAXBACKOFF;
      const rate = opt.backoff || RATE;
      const max = opt.maxRetries || MAXRETRIES;
      let retries = 0;
      while (true) {
        try {
          return await fn(path3);
        } catch (er) {
          const fer = er;
          if (fer?.path === path3 && fer?.code && codes.has(fer.code)) {
            backoff = Math.ceil(backoff * rate);
            total = backoff + total;
            if (total < mbo) {
              return new Promise((res, rej) => {
                setTimeout(() => {
                  method(path3, opt, backoff, total).then(res, rej);
                }, backoff);
              });
            }
            if (retries < max) {
              retries++;
              continue;
            }
          }
          throw er;
        }
      }
    };
    return method;
  };
  var retryBusySync = (fn) => {
    const method = (path3, opt) => {
      const max = opt.maxRetries || MAXRETRIES;
      let retries = 0;
      while (true) {
        try {
          return fn(path3);
        } catch (er) {
          const fer = er;
          if (fer?.path === path3 && fer?.code && codes.has(fer.code) && retries < max) {
            retries++;
            continue;
          }
          throw er;
        }
      }
    };
    return method;
  };

  // node_modules/rimraf/dist/esm/rimraf-move-remove.js
  var import_path5 = __require("path");

  // node_modules/rimraf/dist/esm/default-tmp.js
  var import_os = __require("os");
  var import_path4 = __require("path");
  var { stat: stat2 } = promises;
  var isDirSync = (path3) => {
    try {
      return (0, import_fs3.statSync)(path3).isDirectory();
    } catch (er) {
      return false;
    }
  };
  var isDir = (path3) => stat2(path3).then((st) => st.isDirectory(), () => false);
  var win32DefaultTmp = async (path3) => {
    const { root } = (0, import_path4.parse)(path3);
    const tmp = (0, import_os.tmpdir)();
    const { root: tmpRoot } = (0, import_path4.parse)(tmp);
    if (root.toLowerCase() === tmpRoot.toLowerCase()) {
      return tmp;
    }
    const driveTmp = (0, import_path4.resolve)(root, "/temp");
    if (await isDir(driveTmp)) {
      return driveTmp;
    }
    return root;
  };
  var win32DefaultTmpSync = (path3) => {
    const { root } = (0, import_path4.parse)(path3);
    const tmp = (0, import_os.tmpdir)();
    const { root: tmpRoot } = (0, import_path4.parse)(tmp);
    if (root.toLowerCase() === tmpRoot.toLowerCase()) {
      return tmp;
    }
    const driveTmp = (0, import_path4.resolve)(root, "/temp");
    if (isDirSync(driveTmp)) {
      return driveTmp;
    }
    return root;
  };
  var posixDefaultTmp = async () => (0, import_os.tmpdir)();
  var posixDefaultTmpSync = () => (0, import_os.tmpdir)();
  var defaultTmp = platform_default === "win32" ? win32DefaultTmp : posixDefaultTmp;
  var defaultTmpSync = platform_default === "win32" ? win32DefaultTmpSync : posixDefaultTmpSync;

  // node_modules/rimraf/dist/esm/rimraf-move-remove.js
  var { lstat: lstat4, rename: rename2, unlink: unlink3, rmdir: rmdir3, chmod: chmod3 } = promises;
  var uniqueFilename = (path3) => `.${(0, import_path5.basename)(path3)}.${Math.random()}`;
  var unlinkFixEPERM = async (path3) => unlink3(path3).catch((er) => {
    if (er.code === "EPERM") {
      return chmod3(path3, 438).then(() => unlink3(path3), (er2) => {
        if (er2.code === "ENOENT") {
          return;
        }
        throw er;
      });
    } else if (er.code === "ENOENT") {
      return;
    }
    throw er;
  });
  var unlinkFixEPERMSync = (path3) => {
    try {
      (0, import_fs3.unlinkSync)(path3);
    } catch (er) {
      if (er?.code === "EPERM") {
        try {
          return (0, import_fs3.chmodSync)(path3, 438);
        } catch (er2) {
          if (er2?.code === "ENOENT") {
            return;
          }
          throw er;
        }
      } else if (er?.code === "ENOENT") {
        return;
      }
      throw er;
    }
  };
  var rimrafMoveRemove = async (path3, opt) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    try {
      return await rimrafMoveRemoveDir(path3, opt, await lstat4(path3));
    } catch (er) {
      if (er?.code === "ENOENT")
        return true;
      throw er;
    }
  };
  var rimrafMoveRemoveDir = async (path3, opt, ent) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    if (!opt.tmp) {
      return rimrafMoveRemoveDir(path3, { ...opt, tmp: await defaultTmp(path3) }, ent);
    }
    if (path3 === opt.tmp && (0, import_path5.parse)(path3).root !== path3) {
      throw new Error("cannot delete temp directory used for deletion");
    }
    const entries = ent.isDirectory() ? await readdirOrError(path3) : null;
    if (!Array.isArray(entries)) {
      if (entries) {
        if (entries.code === "ENOENT") {
          return true;
        }
        if (entries.code !== "ENOTDIR") {
          throw entries;
        }
      }
      if (opt.filter && !await opt.filter(path3, ent)) {
        return false;
      }
      await ignoreENOENT(tmpUnlink(path3, opt.tmp, unlinkFixEPERM));
      return true;
    }
    const removedAll = (await Promise.all(entries.map((ent2) => rimrafMoveRemoveDir((0, import_path5.resolve)(path3, ent2.name), opt, ent2)))).reduce((a, b) => a && b, true);
    if (!removedAll) {
      return false;
    }
    if (opt.preserveRoot === false && path3 === (0, import_path5.parse)(path3).root) {
      return false;
    }
    if (opt.filter && !await opt.filter(path3, ent)) {
      return false;
    }
    await ignoreENOENT(tmpUnlink(path3, opt.tmp, rmdir3));
    return true;
  };
  var tmpUnlink = async (path3, tmp, rm3) => {
    const tmpFile = (0, import_path5.resolve)(tmp, uniqueFilename(path3));
    await rename2(path3, tmpFile);
    return await rm3(tmpFile);
  };
  var rimrafMoveRemoveSync = (path3, opt) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    try {
      return rimrafMoveRemoveDirSync(path3, opt, (0, import_fs3.lstatSync)(path3));
    } catch (er) {
      if (er?.code === "ENOENT")
        return true;
      throw er;
    }
  };
  var rimrafMoveRemoveDirSync = (path3, opt, ent) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    if (!opt.tmp) {
      return rimrafMoveRemoveDirSync(path3, { ...opt, tmp: defaultTmpSync(path3) }, ent);
    }
    const tmp = opt.tmp;
    if (path3 === opt.tmp && (0, import_path5.parse)(path3).root !== path3) {
      throw new Error("cannot delete temp directory used for deletion");
    }
    const entries = ent.isDirectory() ? readdirOrErrorSync(path3) : null;
    if (!Array.isArray(entries)) {
      if (entries) {
        if (entries.code === "ENOENT") {
          return true;
        }
        if (entries.code !== "ENOTDIR") {
          throw entries;
        }
      }
      if (opt.filter && !opt.filter(path3, ent)) {
        return false;
      }
      ignoreENOENTSync(() => tmpUnlinkSync(path3, tmp, unlinkFixEPERMSync));
      return true;
    }
    let removedAll = true;
    for (const ent2 of entries) {
      const p = (0, import_path5.resolve)(path3, ent2.name);
      removedAll = rimrafMoveRemoveDirSync(p, opt, ent2) && removedAll;
    }
    if (!removedAll) {
      return false;
    }
    if (opt.preserveRoot === false && path3 === (0, import_path5.parse)(path3).root) {
      return false;
    }
    if (opt.filter && !opt.filter(path3, ent)) {
      return false;
    }
    ignoreENOENTSync(() => tmpUnlinkSync(path3, tmp, import_fs3.rmdirSync));
    return true;
  };
  var tmpUnlinkSync = (path3, tmp, rmSync2) => {
    const tmpFile = (0, import_path5.resolve)(tmp, uniqueFilename(path3));
    (0, import_fs3.renameSync)(path3, tmpFile);
    return rmSync2(tmpFile);
  };

  // node_modules/rimraf/dist/esm/rimraf-windows.js
  var { unlink: unlink4, rmdir: rmdir4, lstat: lstat5 } = promises;
  var rimrafWindowsFile = retryBusy(fixEPERM(unlink4));
  var rimrafWindowsFileSync = retryBusySync(fixEPERMSync(import_fs3.unlinkSync));
  var rimrafWindowsDirRetry = retryBusy(fixEPERM(rmdir4));
  var rimrafWindowsDirRetrySync = retryBusySync(fixEPERMSync(import_fs3.rmdirSync));
  var rimrafWindowsDirMoveRemoveFallback = async (path3, opt) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    const { filter: filter2, ...options } = opt;
    try {
      return await rimrafWindowsDirRetry(path3, options);
    } catch (er) {
      if (er?.code === "ENOTEMPTY") {
        return await rimrafMoveRemove(path3, options);
      }
      throw er;
    }
  };
  var rimrafWindowsDirMoveRemoveFallbackSync = (path3, opt) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    const { filter: filter2, ...options } = opt;
    try {
      return rimrafWindowsDirRetrySync(path3, options);
    } catch (er) {
      const fer = er;
      if (fer?.code === "ENOTEMPTY") {
        return rimrafMoveRemoveSync(path3, options);
      }
      throw er;
    }
  };
  var START = Symbol("start");
  var CHILD = Symbol("child");
  var FINISH = Symbol("finish");
  var rimrafWindows = async (path3, opt) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    try {
      return await rimrafWindowsDir(path3, opt, await lstat5(path3), START);
    } catch (er) {
      if (er?.code === "ENOENT")
        return true;
      throw er;
    }
  };
  var rimrafWindowsSync = (path3, opt) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    try {
      return rimrafWindowsDirSync(path3, opt, (0, import_fs3.lstatSync)(path3), START);
    } catch (er) {
      if (er?.code === "ENOENT")
        return true;
      throw er;
    }
  };
  var rimrafWindowsDir = async (path3, opt, ent, state = START) => {
    if (opt?.signal?.aborted) {
      throw opt.signal.reason;
    }
    const entries = ent.isDirectory() ? await readdirOrError(path3) : null;
    if (!Array.isArray(entries)) {
      if (entries) {
        if (entries.code === "ENOENT") {
          return true;
        }
        if (entries.code !== "ENOTDIR") {
          throw entries;
        }
      }
      if (opt.filter && !await opt.filter(path3, ent)) {
        return false;
      }
      await ignoreENOENT(rimrafWindowsFile(path3, opt));
      return true;
    }
    const s = state === START ? CHILD : state;
    const removedAll = (await Promise.all(entries.map((ent2) => rimrafWindowsDir((0, import_path6.resolve)(path3, ent2.name), opt, ent2, s)))).reduce((a, b) => a && b, true);
    if (state === START) {
      return rimrafWindowsDir(path3, opt, ent, FINISH);
    } else if (state === FINISH) {
      if (opt.preserveRoot === false && path3 === (0, import_path6.parse)(path3).root) {
        return false;
      }
      if (!removedAll) {
        return false;
      }
      if (opt.filter && !await opt.filter(path3, ent)) {
        return false;
      }
      await ignoreENOENT(rimrafWindowsDirMoveRemoveFallback(path3, opt));
    }
    return true;
  };
  var rimrafWindowsDirSync = (path3, opt, ent, state = START) => {
    const entries = ent.isDirectory() ? readdirOrErrorSync(path3) : null;
    if (!Array.isArray(entries)) {
      if (entries) {
        if (entries.code === "ENOENT") {
          return true;
        }
        if (entries.code !== "ENOTDIR") {
          throw entries;
        }
      }
      if (opt.filter && !opt.filter(path3, ent)) {
        return false;
      }
      ignoreENOENTSync(() => rimrafWindowsFileSync(path3, opt));
      return true;
    }
    let removedAll = true;
    for (const ent2 of entries) {
      const s = state === START ? CHILD : state;
      const p = (0, import_path6.resolve)(path3, ent2.name);
      removedAll = rimrafWindowsDirSync(p, opt, ent2, s) && removedAll;
    }
    if (state === START) {
      return rimrafWindowsDirSync(path3, opt, ent, FINISH);
    } else if (state === FINISH) {
      if (opt.preserveRoot === false && path3 === (0, import_path6.parse)(path3).root) {
        return false;
      }
      if (!removedAll) {
        return false;
      }
      if (opt.filter && !opt.filter(path3, ent)) {
        return false;
      }
      ignoreENOENTSync(() => {
        rimrafWindowsDirMoveRemoveFallbackSync(path3, opt);
      });
    }
    return true;
  };

  // node_modules/rimraf/dist/esm/rimraf-manual.js
  var rimrafManual = platform_default === "win32" ? rimrafWindows : rimrafPosix;
  var rimrafManualSync = platform_default === "win32" ? rimrafWindowsSync : rimrafPosixSync;

  // node_modules/rimraf/dist/esm/rimraf-native.js
  var { rm: rm2 } = promises;
  var rimrafNative = async (path3, opt) => {
    await rm2(path3, {
      ...opt,
      force: true,
      recursive: true
    });
    return true;
  };
  var rimrafNativeSync = (path3, opt) => {
    (0, import_fs3.rmSync)(path3, {
      ...opt,
      force: true,
      recursive: true
    });
    return true;
  };

  // node_modules/rimraf/dist/esm/use-native.js
  var version = process.env.__TESTING_RIMRAF_NODE_VERSION__ || process.version;
  var versArr = version.replace(/^v/, "").split(".");
  var [major = 0, minor = 0] = versArr.map((v) => parseInt(v, 10));
  var hasNative = major > 14 || major === 14 && minor >= 14;
  var useNative = !hasNative || platform_default === "win32" ? () => false : (opt) => !opt?.signal && !opt?.filter;
  var useNativeSync = !hasNative || platform_default === "win32" ? () => false : (opt) => !opt?.signal && !opt?.filter;

  // node_modules/rimraf/dist/esm/index.js
  var wrap = (fn) => async (path3, opt) => {
    const options = optArg(opt);
    if (options.glob) {
      path3 = await glob(path3, options.glob);
    }
    if (Array.isArray(path3)) {
      return !!(await Promise.all(path3.map((p) => fn(path_arg_default(p, options), options)))).reduce((a, b) => a && b, true);
    } else {
      return !!await fn(path_arg_default(path3, options), options);
    }
  };
  var wrapSync = (fn) => (path3, opt) => {
    const options = optArgSync(opt);
    if (options.glob) {
      path3 = globSync(path3, options.glob);
    }
    if (Array.isArray(path3)) {
      return !!path3.map((p) => fn(path_arg_default(p, options), options)).reduce((a, b) => a && b, true);
    } else {
      return !!fn(path_arg_default(path3, options), options);
    }
  };
  var nativeSync = wrapSync(rimrafNativeSync);
  var native = Object.assign(wrap(rimrafNative), { sync: nativeSync });
  var manualSync = wrapSync(rimrafManualSync);
  var manual = Object.assign(wrap(rimrafManual), { sync: manualSync });
  var windowsSync = wrapSync(rimrafWindowsSync);
  var windows = Object.assign(wrap(rimrafWindows), { sync: windowsSync });
  var posixSync = wrapSync(rimrafPosixSync);
  var posix2 = Object.assign(wrap(rimrafPosix), { sync: posixSync });
  var moveRemoveSync = wrapSync(rimrafMoveRemoveSync);
  var moveRemove = Object.assign(wrap(rimrafMoveRemove), {
    sync: moveRemoveSync
  });
  var rimrafSync = wrapSync((path3, opt) => useNativeSync(opt) ? rimrafNativeSync(path3, opt) : rimrafManualSync(path3, opt));
  var rimraf_ = wrap((path3, opt) => useNative(opt) ? rimrafNative(path3, opt) : rimrafManual(path3, opt));
  var rimraf = Object.assign(rimraf_, {
    rimraf: rimraf_,
    sync: rimrafSync,
    rimrafSync,
    manual,
    manualSync,
    native,
    nativeSync,
    posix: posix2,
    posixSync,
    windows,
    windowsSync,
    moveRemove,
    moveRemoveSync
  });
  rimraf.rimraf = rimraf;

  // src/wosbuild.ts
  var import_path12 = __toESM2(__require("path"));

  // node_modules/yargs/lib/platform-shims/esm.mjs
  var import_assert = __require("assert");

  // node_modules/cliui/build/lib/index.js
  var align = {
    right: alignRight,
    center: alignCenter
  };
  var top = 0;
  var right = 1;
  var bottom = 2;
  var left = 3;
  var UI = class {
    constructor(opts2) {
      var _a2;
      this.width = opts2.width;
      this.wrap = (_a2 = opts2.wrap) !== null && _a2 !== void 0 ? _a2 : true;
      this.rows = [];
    }
    span(...args) {
      const cols = this.div(...args);
      cols.span = true;
    }
    resetOutput() {
      this.rows = [];
    }
    div(...args) {
      if (args.length === 0) {
        this.div("");
      }
      if (this.wrap && this.shouldApplyLayoutDSL(...args) && typeof args[0] === "string") {
        return this.applyLayoutDSL(args[0]);
      }
      const cols = args.map((arg) => {
        if (typeof arg === "string") {
          return this.colFromString(arg);
        }
        return arg;
      });
      this.rows.push(cols);
      return cols;
    }
    shouldApplyLayoutDSL(...args) {
      return args.length === 1 && typeof args[0] === "string" && /[\t\n]/.test(args[0]);
    }
    applyLayoutDSL(str) {
      const rows = str.split("\n").map((row) => row.split("	"));
      let leftColumnWidth = 0;
      rows.forEach((columns) => {
        if (columns.length > 1 && mixin.stringWidth(columns[0]) > leftColumnWidth) {
          leftColumnWidth = Math.min(Math.floor(this.width * 0.5), mixin.stringWidth(columns[0]));
        }
      });
      rows.forEach((columns) => {
        this.div(...columns.map((r, i) => {
          return {
            text: r.trim(),
            padding: this.measurePadding(r),
            width: i === 0 && columns.length > 1 ? leftColumnWidth : void 0
          };
        }));
      });
      return this.rows[this.rows.length - 1];
    }
    colFromString(text) {
      return {
        text,
        padding: this.measurePadding(text)
      };
    }
    measurePadding(str) {
      const noAnsi = mixin.stripAnsi(str);
      return [0, noAnsi.match(/\s*$/)[0].length, 0, noAnsi.match(/^\s*/)[0].length];
    }
    toString() {
      const lines = [];
      this.rows.forEach((row) => {
        this.rowToString(row, lines);
      });
      return lines.filter((line) => !line.hidden).map((line) => line.text).join("\n");
    }
    rowToString(row, lines) {
      this.rasterize(row).forEach((rrow, r) => {
        let str = "";
        rrow.forEach((col, c) => {
          const { width } = row[c];
          const wrapWidth = this.negatePadding(row[c]);
          let ts = col;
          if (wrapWidth > mixin.stringWidth(col)) {
            ts += " ".repeat(wrapWidth - mixin.stringWidth(col));
          }
          if (row[c].align && row[c].align !== "left" && this.wrap) {
            const fn = align[row[c].align];
            ts = fn(ts, wrapWidth);
            if (mixin.stringWidth(ts) < wrapWidth) {
              ts += " ".repeat((width || 0) - mixin.stringWidth(ts) - 1);
            }
          }
          const padding = row[c].padding || [0, 0, 0, 0];
          if (padding[left]) {
            str += " ".repeat(padding[left]);
          }
          str += addBorder(row[c], ts, "| ");
          str += ts;
          str += addBorder(row[c], ts, " |");
          if (padding[right]) {
            str += " ".repeat(padding[right]);
          }
          if (r === 0 && lines.length > 0) {
            str = this.renderInline(str, lines[lines.length - 1]);
          }
        });
        lines.push({
          text: str.replace(/ +$/, ""),
          span: row.span
        });
      });
      return lines;
    }
    // if the full 'source' can render in
    // the target line, do so.
    renderInline(source, previousLine) {
      const match2 = source.match(/^ */);
      const leadingWhitespace = match2 ? match2[0].length : 0;
      const target = previousLine.text;
      const targetTextWidth = mixin.stringWidth(target.trimRight());
      if (!previousLine.span) {
        return source;
      }
      if (!this.wrap) {
        previousLine.hidden = true;
        return target + source;
      }
      if (leadingWhitespace < targetTextWidth) {
        return source;
      }
      previousLine.hidden = true;
      return target.trimRight() + " ".repeat(leadingWhitespace - targetTextWidth) + source.trimLeft();
    }
    rasterize(row) {
      const rrows = [];
      const widths = this.columnWidths(row);
      let wrapped;
      row.forEach((col, c) => {
        col.width = widths[c];
        if (this.wrap) {
          wrapped = mixin.wrap(col.text, this.negatePadding(col), { hard: true }).split("\n");
        } else {
          wrapped = col.text.split("\n");
        }
        if (col.border) {
          wrapped.unshift("." + "-".repeat(this.negatePadding(col) + 2) + ".");
          wrapped.push("'" + "-".repeat(this.negatePadding(col) + 2) + "'");
        }
        if (col.padding) {
          wrapped.unshift(...new Array(col.padding[top] || 0).fill(""));
          wrapped.push(...new Array(col.padding[bottom] || 0).fill(""));
        }
        wrapped.forEach((str, r) => {
          if (!rrows[r]) {
            rrows.push([]);
          }
          const rrow = rrows[r];
          for (let i = 0; i < c; i++) {
            if (rrow[i] === void 0) {
              rrow.push("");
            }
          }
          rrow.push(str);
        });
      });
      return rrows;
    }
    negatePadding(col) {
      let wrapWidth = col.width || 0;
      if (col.padding) {
        wrapWidth -= (col.padding[left] || 0) + (col.padding[right] || 0);
      }
      if (col.border) {
        wrapWidth -= 4;
      }
      return wrapWidth;
    }
    columnWidths(row) {
      if (!this.wrap) {
        return row.map((col) => {
          return col.width || mixin.stringWidth(col.text);
        });
      }
      let unset = row.length;
      let remainingWidth = this.width;
      const widths = row.map((col) => {
        if (col.width) {
          unset--;
          remainingWidth -= col.width;
          return col.width;
        }
        return void 0;
      });
      const unsetWidth = unset ? Math.floor(remainingWidth / unset) : 0;
      return widths.map((w, i) => {
        if (w === void 0) {
          return Math.max(unsetWidth, _minWidth(row[i]));
        }
        return w;
      });
    }
  };
  function addBorder(col, ts, style) {
    if (col.border) {
      if (/[.']-+[.']/.test(ts)) {
        return "";
      }
      if (ts.trim().length !== 0) {
        return style;
      }
      return "  ";
    }
    return "";
  }
  function _minWidth(col) {
    const padding = col.padding || [];
    const minWidth = 1 + (padding[left] || 0) + (padding[right] || 0);
    if (col.border) {
      return minWidth + 4;
    }
    return minWidth;
  }
  function getWindowWidth() {
    if (typeof process === "object" && process.stdout && process.stdout.columns) {
      return process.stdout.columns;
    }
    return 80;
  }
  function alignRight(str, width) {
    str = str.trim();
    const strWidth = mixin.stringWidth(str);
    if (strWidth < width) {
      return " ".repeat(width - strWidth) + str;
    }
    return str;
  }
  function alignCenter(str, width) {
    str = str.trim();
    const strWidth = mixin.stringWidth(str);
    if (strWidth >= width) {
      return str;
    }
    return " ".repeat(width - strWidth >> 1) + str;
  }
  var mixin;
  function cliui(opts2, _mixin) {
    mixin = _mixin;
    return new UI({
      width: (opts2 === null || opts2 === void 0 ? void 0 : opts2.width) || getWindowWidth(),
      wrap: opts2 === null || opts2 === void 0 ? void 0 : opts2.wrap
    });
  }

  // node_modules/cliui/build/lib/string-utils.js
  var ansi = new RegExp("\x1B(?:\\[(?:\\d+[ABCDEFGJKSTm]|\\d+;\\d+[Hfm]|\\d+;\\d+;\\d+m|6n|s|u|\\?25[lh])|\\w)", "g");
  function stripAnsi(str) {
    return str.replace(ansi, "");
  }
  function wrap2(str, width) {
    const [start, end] = str.match(ansi) || ["", ""];
    str = stripAnsi(str);
    let wrapped = "";
    for (let i = 0; i < str.length; i++) {
      if (i !== 0 && i % width === 0) {
        wrapped += "\n";
      }
      wrapped += str.charAt(i);
    }
    if (start && end) {
      wrapped = `${start}${wrapped}${end}`;
    }
    return wrapped;
  }

  // node_modules/cliui/index.mjs
  function ui(opts2) {
    return cliui(opts2, {
      stringWidth: (str) => {
        return [...str].length;
      },
      stripAnsi,
      wrap: wrap2
    });
  }

  // node_modules/escalade/sync/index.mjs
  var import_path7 = __require("path");
  var import_fs12 = __require("fs");
  function sync_default(start, callback) {
    let dir = (0, import_path7.resolve)(".", start);
    let tmp, stats = (0, import_fs12.statSync)(dir);
    if (!stats.isDirectory()) {
      dir = (0, import_path7.dirname)(dir);
    }
    while (true) {
      tmp = callback(dir, (0, import_fs12.readdirSync)(dir));
      if (tmp)
        return (0, import_path7.resolve)(dir, tmp);
      dir = (0, import_path7.dirname)(tmp = dir);
      if (tmp === dir)
        break;
    }
  }

  // node_modules/yargs/lib/platform-shims/esm.mjs
  var import_util4 = __require("util");
  var import_fs15 = __require("fs");
  var import_url3 = __require("url");

  // node_modules/yargs-parser/build/lib/index.js
  var import_util2 = __require("util");
  var import_path8 = __require("path");

  // node_modules/yargs-parser/build/lib/string-utils.js
  function camelCase(str) {
    const isCamelCase = str !== str.toLowerCase() && str !== str.toUpperCase();
    if (!isCamelCase) {
      str = str.toLowerCase();
    }
    if (str.indexOf("-") === -1 && str.indexOf("_") === -1) {
      return str;
    } else {
      let camelcase = "";
      let nextChrUpper = false;
      const leadingHyphens = str.match(/^-+/);
      for (let i = leadingHyphens ? leadingHyphens[0].length : 0; i < str.length; i++) {
        let chr = str.charAt(i);
        if (nextChrUpper) {
          nextChrUpper = false;
          chr = chr.toUpperCase();
        }
        if (i !== 0 && (chr === "-" || chr === "_")) {
          nextChrUpper = true;
        } else if (chr !== "-" && chr !== "_") {
          camelcase += chr;
        }
      }
      return camelcase;
    }
  }
  function decamelize(str, joinString) {
    const lowercase = str.toLowerCase();
    joinString = joinString || "-";
    let notCamelcase = "";
    for (let i = 0; i < str.length; i++) {
      const chrLower = lowercase.charAt(i);
      const chrString = str.charAt(i);
      if (chrLower !== chrString && i > 0) {
        notCamelcase += `${joinString}${lowercase.charAt(i)}`;
      } else {
        notCamelcase += chrString;
      }
    }
    return notCamelcase;
  }
  function looksLikeNumber(x) {
    if (x === null || x === void 0)
      return false;
    if (typeof x === "number")
      return true;
    if (/^0x[0-9a-f]+$/i.test(x))
      return true;
    if (/^0[^.]/.test(x))
      return false;
    return /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
  }

  // node_modules/yargs-parser/build/lib/tokenize-arg-string.js
  function tokenizeArgString(argString) {
    if (Array.isArray(argString)) {
      return argString.map((e) => typeof e !== "string" ? e + "" : e);
    }
    argString = argString.trim();
    let i = 0;
    let prevC = null;
    let c = null;
    let opening = null;
    const args = [];
    for (let ii = 0; ii < argString.length; ii++) {
      prevC = c;
      c = argString.charAt(ii);
      if (c === " " && !opening) {
        if (!(prevC === " ")) {
          i++;
        }
        continue;
      }
      if (c === opening) {
        opening = null;
      } else if ((c === "'" || c === '"') && !opening) {
        opening = c;
      }
      if (!args[i])
        args[i] = "";
      args[i] += c;
    }
    return args;
  }

  // node_modules/yargs-parser/build/lib/yargs-parser-types.js
  var DefaultValuesForTypeKey;
  (function(DefaultValuesForTypeKey2) {
    DefaultValuesForTypeKey2["BOOLEAN"] = "boolean";
    DefaultValuesForTypeKey2["STRING"] = "string";
    DefaultValuesForTypeKey2["NUMBER"] = "number";
    DefaultValuesForTypeKey2["ARRAY"] = "array";
  })(DefaultValuesForTypeKey || (DefaultValuesForTypeKey = {}));

  // node_modules/yargs-parser/build/lib/yargs-parser.js
  var mixin2;
  var YargsParser = class {
    constructor(_mixin) {
      mixin2 = _mixin;
    }
    parse(argsInput, options) {
      const opts2 = Object.assign({
        alias: void 0,
        array: void 0,
        boolean: void 0,
        config: void 0,
        configObjects: void 0,
        configuration: void 0,
        coerce: void 0,
        count: void 0,
        default: void 0,
        envPrefix: void 0,
        narg: void 0,
        normalize: void 0,
        string: void 0,
        number: void 0,
        __: void 0,
        key: void 0
      }, options);
      const args = tokenizeArgString(argsInput);
      const inputIsString = typeof argsInput === "string";
      const aliases = combineAliases(Object.assign(/* @__PURE__ */ Object.create(null), opts2.alias));
      const configuration = Object.assign({
        "boolean-negation": true,
        "camel-case-expansion": true,
        "combine-arrays": false,
        "dot-notation": true,
        "duplicate-arguments-array": true,
        "flatten-duplicate-arrays": true,
        "greedy-arrays": true,
        "halt-at-non-option": false,
        "nargs-eats-options": false,
        "negation-prefix": "no-",
        "parse-numbers": true,
        "parse-positional-numbers": true,
        "populate--": false,
        "set-placeholder-key": false,
        "short-option-groups": true,
        "strip-aliased": false,
        "strip-dashed": false,
        "unknown-options-as-args": false
      }, opts2.configuration);
      const defaults2 = Object.assign(/* @__PURE__ */ Object.create(null), opts2.default);
      const configObjects = opts2.configObjects || [];
      const envPrefix = opts2.envPrefix;
      const notFlagsOption = configuration["populate--"];
      const notFlagsArgv = notFlagsOption ? "--" : "_";
      const newAliases = /* @__PURE__ */ Object.create(null);
      const defaulted = /* @__PURE__ */ Object.create(null);
      const __ = opts2.__ || mixin2.format;
      const flags = {
        aliases: /* @__PURE__ */ Object.create(null),
        arrays: /* @__PURE__ */ Object.create(null),
        bools: /* @__PURE__ */ Object.create(null),
        strings: /* @__PURE__ */ Object.create(null),
        numbers: /* @__PURE__ */ Object.create(null),
        counts: /* @__PURE__ */ Object.create(null),
        normalize: /* @__PURE__ */ Object.create(null),
        configs: /* @__PURE__ */ Object.create(null),
        nargs: /* @__PURE__ */ Object.create(null),
        coercions: /* @__PURE__ */ Object.create(null),
        keys: []
      };
      const negative = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/;
      const negatedBoolean = new RegExp("^--" + configuration["negation-prefix"] + "(.+)");
      [].concat(opts2.array || []).filter(Boolean).forEach(function(opt) {
        const key = typeof opt === "object" ? opt.key : opt;
        const assignment = Object.keys(opt).map(function(key2) {
          const arrayFlagKeys = {
            boolean: "bools",
            string: "strings",
            number: "numbers"
          };
          return arrayFlagKeys[key2];
        }).filter(Boolean).pop();
        if (assignment) {
          flags[assignment][key] = true;
        }
        flags.arrays[key] = true;
        flags.keys.push(key);
      });
      [].concat(opts2.boolean || []).filter(Boolean).forEach(function(key) {
        flags.bools[key] = true;
        flags.keys.push(key);
      });
      [].concat(opts2.string || []).filter(Boolean).forEach(function(key) {
        flags.strings[key] = true;
        flags.keys.push(key);
      });
      [].concat(opts2.number || []).filter(Boolean).forEach(function(key) {
        flags.numbers[key] = true;
        flags.keys.push(key);
      });
      [].concat(opts2.count || []).filter(Boolean).forEach(function(key) {
        flags.counts[key] = true;
        flags.keys.push(key);
      });
      [].concat(opts2.normalize || []).filter(Boolean).forEach(function(key) {
        flags.normalize[key] = true;
        flags.keys.push(key);
      });
      if (typeof opts2.narg === "object") {
        Object.entries(opts2.narg).forEach(([key, value]) => {
          if (typeof value === "number") {
            flags.nargs[key] = value;
            flags.keys.push(key);
          }
        });
      }
      if (typeof opts2.coerce === "object") {
        Object.entries(opts2.coerce).forEach(([key, value]) => {
          if (typeof value === "function") {
            flags.coercions[key] = value;
            flags.keys.push(key);
          }
        });
      }
      if (typeof opts2.config !== "undefined") {
        if (Array.isArray(opts2.config) || typeof opts2.config === "string") {
          ;
          [].concat(opts2.config).filter(Boolean).forEach(function(key) {
            flags.configs[key] = true;
          });
        } else if (typeof opts2.config === "object") {
          Object.entries(opts2.config).forEach(([key, value]) => {
            if (typeof value === "boolean" || typeof value === "function") {
              flags.configs[key] = value;
            }
          });
        }
      }
      extendAliases(opts2.key, aliases, opts2.default, flags.arrays);
      Object.keys(defaults2).forEach(function(key) {
        (flags.aliases[key] || []).forEach(function(alias) {
          defaults2[alias] = defaults2[key];
        });
      });
      let error = null;
      checkConfiguration();
      let notFlags = [];
      const argv = Object.assign(/* @__PURE__ */ Object.create(null), { _: [] });
      const argvReturn = {};
      for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        const truncatedArg = arg.replace(/^-{3,}/, "---");
        let broken;
        let key;
        let letters;
        let m;
        let next;
        let value;
        if (arg !== "--" && /^-/.test(arg) && isUnknownOptionAsArg(arg)) {
          pushPositional(arg);
        } else if (truncatedArg.match(/^---+(=|$)/)) {
          pushPositional(arg);
          continue;
        } else if (arg.match(/^--.+=/) || !configuration["short-option-groups"] && arg.match(/^-.+=/)) {
          m = arg.match(/^--?([^=]+)=([\s\S]*)$/);
          if (m !== null && Array.isArray(m) && m.length >= 3) {
            if (checkAllAliases(m[1], flags.arrays)) {
              i = eatArray(i, m[1], args, m[2]);
            } else if (checkAllAliases(m[1], flags.nargs) !== false) {
              i = eatNargs(i, m[1], args, m[2]);
            } else {
              setArg(m[1], m[2], true);
            }
          }
        } else if (arg.match(negatedBoolean) && configuration["boolean-negation"]) {
          m = arg.match(negatedBoolean);
          if (m !== null && Array.isArray(m) && m.length >= 2) {
            key = m[1];
            setArg(key, checkAllAliases(key, flags.arrays) ? [false] : false);
          }
        } else if (arg.match(/^--.+/) || !configuration["short-option-groups"] && arg.match(/^-[^-]+/)) {
          m = arg.match(/^--?(.+)/);
          if (m !== null && Array.isArray(m) && m.length >= 2) {
            key = m[1];
            if (checkAllAliases(key, flags.arrays)) {
              i = eatArray(i, key, args);
            } else if (checkAllAliases(key, flags.nargs) !== false) {
              i = eatNargs(i, key, args);
            } else {
              next = args[i + 1];
              if (next !== void 0 && (!next.match(/^-/) || next.match(negative)) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
                setArg(key, next);
                i++;
              } else if (/^(true|false)$/.test(next)) {
                setArg(key, next);
                i++;
              } else {
                setArg(key, defaultValue(key));
              }
            }
          }
        } else if (arg.match(/^-.\..+=/)) {
          m = arg.match(/^-([^=]+)=([\s\S]*)$/);
          if (m !== null && Array.isArray(m) && m.length >= 3) {
            setArg(m[1], m[2]);
          }
        } else if (arg.match(/^-.\..+/) && !arg.match(negative)) {
          next = args[i + 1];
          m = arg.match(/^-(.\..+)/);
          if (m !== null && Array.isArray(m) && m.length >= 2) {
            key = m[1];
            if (next !== void 0 && !next.match(/^-/) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
              setArg(key, next);
              i++;
            } else {
              setArg(key, defaultValue(key));
            }
          }
        } else if (arg.match(/^-[^-]+/) && !arg.match(negative)) {
          letters = arg.slice(1, -1).split("");
          broken = false;
          for (let j = 0; j < letters.length; j++) {
            next = arg.slice(j + 2);
            if (letters[j + 1] && letters[j + 1] === "=") {
              value = arg.slice(j + 3);
              key = letters[j];
              if (checkAllAliases(key, flags.arrays)) {
                i = eatArray(i, key, args, value);
              } else if (checkAllAliases(key, flags.nargs) !== false) {
                i = eatNargs(i, key, args, value);
              } else {
                setArg(key, value);
              }
              broken = true;
              break;
            }
            if (next === "-") {
              setArg(letters[j], next);
              continue;
            }
            if (/[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) && checkAllAliases(next, flags.bools) === false) {
              setArg(letters[j], next);
              broken = true;
              break;
            }
            if (letters[j + 1] && letters[j + 1].match(/\W/)) {
              setArg(letters[j], next);
              broken = true;
              break;
            } else {
              setArg(letters[j], defaultValue(letters[j]));
            }
          }
          key = arg.slice(-1)[0];
          if (!broken && key !== "-") {
            if (checkAllAliases(key, flags.arrays)) {
              i = eatArray(i, key, args);
            } else if (checkAllAliases(key, flags.nargs) !== false) {
              i = eatNargs(i, key, args);
            } else {
              next = args[i + 1];
              if (next !== void 0 && (!/^(-|--)[^-]/.test(next) || next.match(negative)) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
                setArg(key, next);
                i++;
              } else if (/^(true|false)$/.test(next)) {
                setArg(key, next);
                i++;
              } else {
                setArg(key, defaultValue(key));
              }
            }
          }
        } else if (arg.match(/^-[0-9]$/) && arg.match(negative) && checkAllAliases(arg.slice(1), flags.bools)) {
          key = arg.slice(1);
          setArg(key, defaultValue(key));
        } else if (arg === "--") {
          notFlags = args.slice(i + 1);
          break;
        } else if (configuration["halt-at-non-option"]) {
          notFlags = args.slice(i);
          break;
        } else {
          pushPositional(arg);
        }
      }
      applyEnvVars(argv, true);
      applyEnvVars(argv, false);
      setConfig(argv);
      setConfigObjects();
      applyDefaultsAndAliases(argv, flags.aliases, defaults2, true);
      applyCoercions(argv);
      if (configuration["set-placeholder-key"])
        setPlaceholderKeys(argv);
      Object.keys(flags.counts).forEach(function(key) {
        if (!hasKey(argv, key.split(".")))
          setArg(key, 0);
      });
      if (notFlagsOption && notFlags.length)
        argv[notFlagsArgv] = [];
      notFlags.forEach(function(key) {
        argv[notFlagsArgv].push(key);
      });
      if (configuration["camel-case-expansion"] && configuration["strip-dashed"]) {
        Object.keys(argv).filter((key) => key !== "--" && key.includes("-")).forEach((key) => {
          delete argv[key];
        });
      }
      if (configuration["strip-aliased"]) {
        ;
        [].concat(...Object.keys(aliases).map((k) => aliases[k])).forEach((alias) => {
          if (configuration["camel-case-expansion"] && alias.includes("-")) {
            delete argv[alias.split(".").map((prop) => camelCase(prop)).join(".")];
          }
          delete argv[alias];
        });
      }
      function pushPositional(arg) {
        const maybeCoercedNumber = maybeCoerceNumber("_", arg);
        if (typeof maybeCoercedNumber === "string" || typeof maybeCoercedNumber === "number") {
          argv._.push(maybeCoercedNumber);
        }
      }
      function eatNargs(i, key, args2, argAfterEqualSign) {
        let ii;
        let toEat = checkAllAliases(key, flags.nargs);
        toEat = typeof toEat !== "number" || isNaN(toEat) ? 1 : toEat;
        if (toEat === 0) {
          if (!isUndefined(argAfterEqualSign)) {
            error = Error(__("Argument unexpected for: %s", key));
          }
          setArg(key, defaultValue(key));
          return i;
        }
        let available = isUndefined(argAfterEqualSign) ? 0 : 1;
        if (configuration["nargs-eats-options"]) {
          if (args2.length - (i + 1) + available < toEat) {
            error = Error(__("Not enough arguments following: %s", key));
          }
          available = toEat;
        } else {
          for (ii = i + 1; ii < args2.length; ii++) {
            if (!args2[ii].match(/^-[^0-9]/) || args2[ii].match(negative) || isUnknownOptionAsArg(args2[ii]))
              available++;
            else
              break;
          }
          if (available < toEat)
            error = Error(__("Not enough arguments following: %s", key));
        }
        let consumed = Math.min(available, toEat);
        if (!isUndefined(argAfterEqualSign) && consumed > 0) {
          setArg(key, argAfterEqualSign);
          consumed--;
        }
        for (ii = i + 1; ii < consumed + i + 1; ii++) {
          setArg(key, args2[ii]);
        }
        return i + consumed;
      }
      function eatArray(i, key, args2, argAfterEqualSign) {
        let argsToSet = [];
        let next = argAfterEqualSign || args2[i + 1];
        const nargsCount = checkAllAliases(key, flags.nargs);
        if (checkAllAliases(key, flags.bools) && !/^(true|false)$/.test(next)) {
          argsToSet.push(true);
        } else if (isUndefined(next) || isUndefined(argAfterEqualSign) && /^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next)) {
          if (defaults2[key] !== void 0) {
            const defVal = defaults2[key];
            argsToSet = Array.isArray(defVal) ? defVal : [defVal];
          }
        } else {
          if (!isUndefined(argAfterEqualSign)) {
            argsToSet.push(processValue(key, argAfterEqualSign, true));
          }
          for (let ii = i + 1; ii < args2.length; ii++) {
            if (!configuration["greedy-arrays"] && argsToSet.length > 0 || nargsCount && typeof nargsCount === "number" && argsToSet.length >= nargsCount)
              break;
            next = args2[ii];
            if (/^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next))
              break;
            i = ii;
            argsToSet.push(processValue(key, next, inputIsString));
          }
        }
        if (typeof nargsCount === "number" && (nargsCount && argsToSet.length < nargsCount || isNaN(nargsCount) && argsToSet.length === 0)) {
          error = Error(__("Not enough arguments following: %s", key));
        }
        setArg(key, argsToSet);
        return i;
      }
      function setArg(key, val, shouldStripQuotes = inputIsString) {
        if (/-/.test(key) && configuration["camel-case-expansion"]) {
          const alias = key.split(".").map(function(prop) {
            return camelCase(prop);
          }).join(".");
          addNewAlias(key, alias);
        }
        const value = processValue(key, val, shouldStripQuotes);
        const splitKey = key.split(".");
        setKey(argv, splitKey, value);
        if (flags.aliases[key]) {
          flags.aliases[key].forEach(function(x) {
            const keyProperties = x.split(".");
            setKey(argv, keyProperties, value);
          });
        }
        if (splitKey.length > 1 && configuration["dot-notation"]) {
          ;
          (flags.aliases[splitKey[0]] || []).forEach(function(x) {
            let keyProperties = x.split(".");
            const a = [].concat(splitKey);
            a.shift();
            keyProperties = keyProperties.concat(a);
            if (!(flags.aliases[key] || []).includes(keyProperties.join("."))) {
              setKey(argv, keyProperties, value);
            }
          });
        }
        if (checkAllAliases(key, flags.normalize) && !checkAllAliases(key, flags.arrays)) {
          const keys = [key].concat(flags.aliases[key] || []);
          keys.forEach(function(key2) {
            Object.defineProperty(argvReturn, key2, {
              enumerable: true,
              get() {
                return val;
              },
              set(value2) {
                val = typeof value2 === "string" ? mixin2.normalize(value2) : value2;
              }
            });
          });
        }
      }
      function addNewAlias(key, alias) {
        if (!(flags.aliases[key] && flags.aliases[key].length)) {
          flags.aliases[key] = [alias];
          newAliases[alias] = true;
        }
        if (!(flags.aliases[alias] && flags.aliases[alias].length)) {
          addNewAlias(alias, key);
        }
      }
      function processValue(key, val, shouldStripQuotes) {
        if (shouldStripQuotes) {
          val = stripQuotes(val);
        }
        if (checkAllAliases(key, flags.bools) || checkAllAliases(key, flags.counts)) {
          if (typeof val === "string")
            val = val === "true";
        }
        let value = Array.isArray(val) ? val.map(function(v) {
          return maybeCoerceNumber(key, v);
        }) : maybeCoerceNumber(key, val);
        if (checkAllAliases(key, flags.counts) && (isUndefined(value) || typeof value === "boolean")) {
          value = increment();
        }
        if (checkAllAliases(key, flags.normalize) && checkAllAliases(key, flags.arrays)) {
          if (Array.isArray(val))
            value = val.map((val2) => {
              return mixin2.normalize(val2);
            });
          else
            value = mixin2.normalize(val);
        }
        return value;
      }
      function maybeCoerceNumber(key, value) {
        if (!configuration["parse-positional-numbers"] && key === "_")
          return value;
        if (!checkAllAliases(key, flags.strings) && !checkAllAliases(key, flags.bools) && !Array.isArray(value)) {
          const shouldCoerceNumber = looksLikeNumber(value) && configuration["parse-numbers"] && Number.isSafeInteger(Math.floor(parseFloat(`${value}`)));
          if (shouldCoerceNumber || !isUndefined(value) && checkAllAliases(key, flags.numbers)) {
            value = Number(value);
          }
        }
        return value;
      }
      function setConfig(argv2) {
        const configLookup = /* @__PURE__ */ Object.create(null);
        applyDefaultsAndAliases(configLookup, flags.aliases, defaults2);
        Object.keys(flags.configs).forEach(function(configKey) {
          const configPath = argv2[configKey] || configLookup[configKey];
          if (configPath) {
            try {
              let config = null;
              const resolvedConfigPath = mixin2.resolve(mixin2.cwd(), configPath);
              const resolveConfig = flags.configs[configKey];
              if (typeof resolveConfig === "function") {
                try {
                  config = resolveConfig(resolvedConfigPath);
                } catch (e) {
                  config = e;
                }
                if (config instanceof Error) {
                  error = config;
                  return;
                }
              } else {
                config = mixin2.require(resolvedConfigPath);
              }
              setConfigObject(config);
            } catch (ex) {
              if (ex.name === "PermissionDenied")
                error = ex;
              else if (argv2[configKey])
                error = Error(__("Invalid JSON config file: %s", configPath));
            }
          }
        });
      }
      function setConfigObject(config, prev) {
        Object.keys(config).forEach(function(key) {
          const value = config[key];
          const fullKey = prev ? prev + "." + key : key;
          if (typeof value === "object" && value !== null && !Array.isArray(value) && configuration["dot-notation"]) {
            setConfigObject(value, fullKey);
          } else {
            if (!hasKey(argv, fullKey.split(".")) || checkAllAliases(fullKey, flags.arrays) && configuration["combine-arrays"]) {
              setArg(fullKey, value);
            }
          }
        });
      }
      function setConfigObjects() {
        if (typeof configObjects !== "undefined") {
          configObjects.forEach(function(configObject) {
            setConfigObject(configObject);
          });
        }
      }
      function applyEnvVars(argv2, configOnly) {
        if (typeof envPrefix === "undefined")
          return;
        const prefix = typeof envPrefix === "string" ? envPrefix : "";
        const env2 = mixin2.env();
        Object.keys(env2).forEach(function(envVar) {
          if (prefix === "" || envVar.lastIndexOf(prefix, 0) === 0) {
            const keys = envVar.split("__").map(function(key, i) {
              if (i === 0) {
                key = key.substring(prefix.length);
              }
              return camelCase(key);
            });
            if ((configOnly && flags.configs[keys.join(".")] || !configOnly) && !hasKey(argv2, keys)) {
              setArg(keys.join("."), env2[envVar]);
            }
          }
        });
      }
      function applyCoercions(argv2) {
        let coerce;
        const applied = /* @__PURE__ */ new Set();
        Object.keys(argv2).forEach(function(key) {
          if (!applied.has(key)) {
            coerce = checkAllAliases(key, flags.coercions);
            if (typeof coerce === "function") {
              try {
                const value = maybeCoerceNumber(key, coerce(argv2[key]));
                [].concat(flags.aliases[key] || [], key).forEach((ali) => {
                  applied.add(ali);
                  argv2[ali] = value;
                });
              } catch (err) {
                error = err;
              }
            }
          }
        });
      }
      function setPlaceholderKeys(argv2) {
        flags.keys.forEach((key) => {
          if (~key.indexOf("."))
            return;
          if (typeof argv2[key] === "undefined")
            argv2[key] = void 0;
        });
        return argv2;
      }
      function applyDefaultsAndAliases(obj, aliases2, defaults3, canLog = false) {
        Object.keys(defaults3).forEach(function(key) {
          if (!hasKey(obj, key.split("."))) {
            setKey(obj, key.split("."), defaults3[key]);
            if (canLog)
              defaulted[key] = true;
            (aliases2[key] || []).forEach(function(x) {
              if (hasKey(obj, x.split(".")))
                return;
              setKey(obj, x.split("."), defaults3[key]);
            });
          }
        });
      }
      function hasKey(obj, keys) {
        let o = obj;
        if (!configuration["dot-notation"])
          keys = [keys.join(".")];
        keys.slice(0, -1).forEach(function(key2) {
          o = o[key2] || {};
        });
        const key = keys[keys.length - 1];
        if (typeof o !== "object")
          return false;
        else
          return key in o;
      }
      function setKey(obj, keys, value) {
        let o = obj;
        if (!configuration["dot-notation"])
          keys = [keys.join(".")];
        keys.slice(0, -1).forEach(function(key2) {
          key2 = sanitizeKey(key2);
          if (typeof o === "object" && o[key2] === void 0) {
            o[key2] = {};
          }
          if (typeof o[key2] !== "object" || Array.isArray(o[key2])) {
            if (Array.isArray(o[key2])) {
              o[key2].push({});
            } else {
              o[key2] = [o[key2], {}];
            }
            o = o[key2][o[key2].length - 1];
          } else {
            o = o[key2];
          }
        });
        const key = sanitizeKey(keys[keys.length - 1]);
        const isTypeArray = checkAllAliases(keys.join("."), flags.arrays);
        const isValueArray = Array.isArray(value);
        let duplicate = configuration["duplicate-arguments-array"];
        if (!duplicate && checkAllAliases(key, flags.nargs)) {
          duplicate = true;
          if (!isUndefined(o[key]) && flags.nargs[key] === 1 || Array.isArray(o[key]) && o[key].length === flags.nargs[key]) {
            o[key] = void 0;
          }
        }
        if (value === increment()) {
          o[key] = increment(o[key]);
        } else if (Array.isArray(o[key])) {
          if (duplicate && isTypeArray && isValueArray) {
            o[key] = configuration["flatten-duplicate-arrays"] ? o[key].concat(value) : (Array.isArray(o[key][0]) ? o[key] : [o[key]]).concat([value]);
          } else if (!duplicate && Boolean(isTypeArray) === Boolean(isValueArray)) {
            o[key] = value;
          } else {
            o[key] = o[key].concat([value]);
          }
        } else if (o[key] === void 0 && isTypeArray) {
          o[key] = isValueArray ? value : [value];
        } else if (duplicate && !(o[key] === void 0 || checkAllAliases(key, flags.counts) || checkAllAliases(key, flags.bools))) {
          o[key] = [o[key], value];
        } else {
          o[key] = value;
        }
      }
      function extendAliases(...args2) {
        args2.forEach(function(obj) {
          Object.keys(obj || {}).forEach(function(key) {
            if (flags.aliases[key])
              return;
            flags.aliases[key] = [].concat(aliases[key] || []);
            flags.aliases[key].concat(key).forEach(function(x) {
              if (/-/.test(x) && configuration["camel-case-expansion"]) {
                const c = camelCase(x);
                if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                  flags.aliases[key].push(c);
                  newAliases[c] = true;
                }
              }
            });
            flags.aliases[key].concat(key).forEach(function(x) {
              if (x.length > 1 && /[A-Z]/.test(x) && configuration["camel-case-expansion"]) {
                const c = decamelize(x, "-");
                if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                  flags.aliases[key].push(c);
                  newAliases[c] = true;
                }
              }
            });
            flags.aliases[key].forEach(function(x) {
              flags.aliases[x] = [key].concat(flags.aliases[key].filter(function(y) {
                return x !== y;
              }));
            });
          });
        });
      }
      function checkAllAliases(key, flag) {
        const toCheck = [].concat(flags.aliases[key] || [], key);
        const keys = Object.keys(flag);
        const setAlias = toCheck.find((key2) => keys.includes(key2));
        return setAlias ? flag[setAlias] : false;
      }
      function hasAnyFlag(key) {
        const flagsKeys = Object.keys(flags);
        const toCheck = [].concat(flagsKeys.map((k) => flags[k]));
        return toCheck.some(function(flag) {
          return Array.isArray(flag) ? flag.includes(key) : flag[key];
        });
      }
      function hasFlagsMatching(arg, ...patterns) {
        const toCheck = [].concat(...patterns);
        return toCheck.some(function(pattern) {
          const match2 = arg.match(pattern);
          return match2 && hasAnyFlag(match2[1]);
        });
      }
      function hasAllShortFlags(arg) {
        if (arg.match(negative) || !arg.match(/^-[^-]+/)) {
          return false;
        }
        let hasAllFlags = true;
        let next;
        const letters = arg.slice(1).split("");
        for (let j = 0; j < letters.length; j++) {
          next = arg.slice(j + 2);
          if (!hasAnyFlag(letters[j])) {
            hasAllFlags = false;
            break;
          }
          if (letters[j + 1] && letters[j + 1] === "=" || next === "-" || /[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) || letters[j + 1] && letters[j + 1].match(/\W/)) {
            break;
          }
        }
        return hasAllFlags;
      }
      function isUnknownOptionAsArg(arg) {
        return configuration["unknown-options-as-args"] && isUnknownOption(arg);
      }
      function isUnknownOption(arg) {
        arg = arg.replace(/^-{3,}/, "--");
        if (arg.match(negative)) {
          return false;
        }
        if (hasAllShortFlags(arg)) {
          return false;
        }
        const flagWithEquals = /^-+([^=]+?)=[\s\S]*$/;
        const normalFlag = /^-+([^=]+?)$/;
        const flagEndingInHyphen = /^-+([^=]+?)-$/;
        const flagEndingInDigits = /^-+([^=]+?\d+)$/;
        const flagEndingInNonWordCharacters = /^-+([^=]+?)\W+.*$/;
        return !hasFlagsMatching(arg, flagWithEquals, negatedBoolean, normalFlag, flagEndingInHyphen, flagEndingInDigits, flagEndingInNonWordCharacters);
      }
      function defaultValue(key) {
        if (!checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts) && `${key}` in defaults2) {
          return defaults2[key];
        } else {
          return defaultForType(guessType2(key));
        }
      }
      function defaultForType(type) {
        const def = {
          [DefaultValuesForTypeKey.BOOLEAN]: true,
          [DefaultValuesForTypeKey.STRING]: "",
          [DefaultValuesForTypeKey.NUMBER]: void 0,
          [DefaultValuesForTypeKey.ARRAY]: []
        };
        return def[type];
      }
      function guessType2(key) {
        let type = DefaultValuesForTypeKey.BOOLEAN;
        if (checkAllAliases(key, flags.strings))
          type = DefaultValuesForTypeKey.STRING;
        else if (checkAllAliases(key, flags.numbers))
          type = DefaultValuesForTypeKey.NUMBER;
        else if (checkAllAliases(key, flags.bools))
          type = DefaultValuesForTypeKey.BOOLEAN;
        else if (checkAllAliases(key, flags.arrays))
          type = DefaultValuesForTypeKey.ARRAY;
        return type;
      }
      function isUndefined(num) {
        return num === void 0;
      }
      function checkConfiguration() {
        Object.keys(flags.counts).find((key) => {
          if (checkAllAliases(key, flags.arrays)) {
            error = Error(__("Invalid configuration: %s, opts.count excludes opts.array.", key));
            return true;
          } else if (checkAllAliases(key, flags.nargs)) {
            error = Error(__("Invalid configuration: %s, opts.count excludes opts.narg.", key));
            return true;
          }
          return false;
        });
      }
      return {
        aliases: Object.assign({}, flags.aliases),
        argv: Object.assign(argvReturn, argv),
        configuration,
        defaulted: Object.assign({}, defaulted),
        error,
        newAliases: Object.assign({}, newAliases)
      };
    }
  };
  function combineAliases(aliases) {
    const aliasArrays = [];
    const combined = /* @__PURE__ */ Object.create(null);
    let change = true;
    Object.keys(aliases).forEach(function(key) {
      aliasArrays.push([].concat(aliases[key], key));
    });
    while (change) {
      change = false;
      for (let i = 0; i < aliasArrays.length; i++) {
        for (let ii = i + 1; ii < aliasArrays.length; ii++) {
          const intersect = aliasArrays[i].filter(function(v) {
            return aliasArrays[ii].indexOf(v) !== -1;
          });
          if (intersect.length) {
            aliasArrays[i] = aliasArrays[i].concat(aliasArrays[ii]);
            aliasArrays.splice(ii, 1);
            change = true;
            break;
          }
        }
      }
    }
    aliasArrays.forEach(function(aliasArray) {
      aliasArray = aliasArray.filter(function(v, i, self) {
        return self.indexOf(v) === i;
      });
      const lastAlias = aliasArray.pop();
      if (lastAlias !== void 0 && typeof lastAlias === "string") {
        combined[lastAlias] = aliasArray;
      }
    });
    return combined;
  }
  function increment(orig) {
    return orig !== void 0 ? orig + 1 : 1;
  }
  function sanitizeKey(key) {
    if (key === "__proto__")
      return "___proto___";
    return key;
  }
  function stripQuotes(val) {
    return typeof val === "string" && (val[0] === "'" || val[0] === '"') && val[val.length - 1] === val[0] ? val.substring(1, val.length - 1) : val;
  }

  // node_modules/yargs-parser/build/lib/index.js
  var import_fs13 = __require("fs");
  var _a;
  var _b;
  var _c;
  var minNodeVersion = process && process.env && process.env.YARGS_MIN_NODE_VERSION ? Number(process.env.YARGS_MIN_NODE_VERSION) : 12;
  var nodeVersion = (_b = (_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node) !== null && _b !== void 0 ? _b : (_c = process === null || process === void 0 ? void 0 : process.version) === null || _c === void 0 ? void 0 : _c.slice(1);
  if (nodeVersion) {
    const major2 = Number(nodeVersion.match(/^([^.]+)/)[1]);
    if (major2 < minNodeVersion) {
      throw Error(`yargs parser supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);
    }
  }
  var env = process ? process.env : {};
  var parser = new YargsParser({
    cwd: process.cwd,
    env: () => {
      return env;
    },
    format: import_util2.format,
    normalize: import_path8.normalize,
    resolve: import_path8.resolve,
    // TODO: figure  out a  way to combine ESM and CJS coverage, such  that
    // we can exercise all the lines below:
    require: (path3) => {
      if (typeof __require !== "undefined") {
        return __require(path3);
      } else if (path3.match(/\.json$/)) {
        return JSON.parse((0, import_fs13.readFileSync)(path3, "utf8"));
      } else {
        throw Error("only .json config files are supported in ESM");
      }
    }
  });
  var yargsParser = function Parser(args, opts2) {
    const result = parser.parse(args.slice(), opts2);
    return result.argv;
  };
  yargsParser.detailed = function(args, opts2) {
    return parser.parse(args.slice(), opts2);
  };
  yargsParser.camelCase = camelCase;
  yargsParser.decamelize = decamelize;
  yargsParser.looksLikeNumber = looksLikeNumber;
  var lib_default = yargsParser;

  // node_modules/yargs/lib/platform-shims/esm.mjs
  var import_path10 = __require("path");

  // node_modules/yargs/build/lib/utils/process-argv.js
  function getProcessArgvBinIndex() {
    if (isBundledElectronApp())
      return 0;
    return 1;
  }
  function isBundledElectronApp() {
    return isElectronApp() && !process.defaultApp;
  }
  function isElectronApp() {
    return !!process.versions.electron;
  }
  function getProcessArgvBin() {
    return process.argv[getProcessArgvBinIndex()];
  }

  // node_modules/yargs/build/lib/yerror.js
  var YError = class _YError extends Error {
    constructor(msg) {
      super(msg || "yargs error");
      this.name = "YError";
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, _YError);
      }
    }
  };

  // node_modules/y18n/build/lib/platform-shims/node.js
  var import_fs14 = __require("fs");
  var import_util3 = __require("util");
  var import_path9 = __require("path");
  var node_default = {
    fs: {
      readFileSync: import_fs14.readFileSync,
      writeFile: import_fs14.writeFile
    },
    format: import_util3.format,
    resolve: import_path9.resolve,
    exists: (file) => {
      try {
        return (0, import_fs14.statSync)(file).isFile();
      } catch (err) {
        return false;
      }
    }
  };

  // node_modules/y18n/build/lib/index.js
  var shim;
  var Y18N = class {
    constructor(opts2) {
      opts2 = opts2 || {};
      this.directory = opts2.directory || "./locales";
      this.updateFiles = typeof opts2.updateFiles === "boolean" ? opts2.updateFiles : true;
      this.locale = opts2.locale || "en";
      this.fallbackToLanguage = typeof opts2.fallbackToLanguage === "boolean" ? opts2.fallbackToLanguage : true;
      this.cache = /* @__PURE__ */ Object.create(null);
      this.writeQueue = [];
    }
    __(...args) {
      if (typeof arguments[0] !== "string") {
        return this._taggedLiteral(arguments[0], ...arguments);
      }
      const str = args.shift();
      let cb = function() {
      };
      if (typeof args[args.length - 1] === "function")
        cb = args.pop();
      cb = cb || function() {
      };
      if (!this.cache[this.locale])
        this._readLocaleFile();
      if (!this.cache[this.locale][str] && this.updateFiles) {
        this.cache[this.locale][str] = str;
        this._enqueueWrite({
          directory: this.directory,
          locale: this.locale,
          cb
        });
      } else {
        cb();
      }
      return shim.format.apply(shim.format, [this.cache[this.locale][str] || str].concat(args));
    }
    __n() {
      const args = Array.prototype.slice.call(arguments);
      const singular = args.shift();
      const plural = args.shift();
      const quantity = args.shift();
      let cb = function() {
      };
      if (typeof args[args.length - 1] === "function")
        cb = args.pop();
      if (!this.cache[this.locale])
        this._readLocaleFile();
      let str = quantity === 1 ? singular : plural;
      if (this.cache[this.locale][singular]) {
        const entry = this.cache[this.locale][singular];
        str = entry[quantity === 1 ? "one" : "other"];
      }
      if (!this.cache[this.locale][singular] && this.updateFiles) {
        this.cache[this.locale][singular] = {
          one: singular,
          other: plural
        };
        this._enqueueWrite({
          directory: this.directory,
          locale: this.locale,
          cb
        });
      } else {
        cb();
      }
      const values = [str];
      if (~str.indexOf("%d"))
        values.push(quantity);
      return shim.format.apply(shim.format, values.concat(args));
    }
    setLocale(locale) {
      this.locale = locale;
    }
    getLocale() {
      return this.locale;
    }
    updateLocale(obj) {
      if (!this.cache[this.locale])
        this._readLocaleFile();
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          this.cache[this.locale][key] = obj[key];
        }
      }
    }
    _taggedLiteral(parts, ...args) {
      let str = "";
      parts.forEach(function(part, i) {
        const arg = args[i + 1];
        str += part;
        if (typeof arg !== "undefined") {
          str += "%s";
        }
      });
      return this.__.apply(this, [str].concat([].slice.call(args, 1)));
    }
    _enqueueWrite(work) {
      this.writeQueue.push(work);
      if (this.writeQueue.length === 1)
        this._processWriteQueue();
    }
    _processWriteQueue() {
      const _this = this;
      const work = this.writeQueue[0];
      const directory = work.directory;
      const locale = work.locale;
      const cb = work.cb;
      const languageFile = this._resolveLocaleFile(directory, locale);
      const serializedLocale = JSON.stringify(this.cache[locale], null, 2);
      shim.fs.writeFile(languageFile, serializedLocale, "utf-8", function(err) {
        _this.writeQueue.shift();
        if (_this.writeQueue.length > 0)
          _this._processWriteQueue();
        cb(err);
      });
    }
    _readLocaleFile() {
      let localeLookup = {};
      const languageFile = this._resolveLocaleFile(this.directory, this.locale);
      try {
        if (shim.fs.readFileSync) {
          localeLookup = JSON.parse(shim.fs.readFileSync(languageFile, "utf-8"));
        }
      } catch (err) {
        if (err instanceof SyntaxError) {
          err.message = "syntax error in " + languageFile;
        }
        if (err.code === "ENOENT")
          localeLookup = {};
        else
          throw err;
      }
      this.cache[this.locale] = localeLookup;
    }
    _resolveLocaleFile(directory, locale) {
      let file = shim.resolve(directory, "./", locale + ".json");
      if (this.fallbackToLanguage && !this._fileExistsSync(file) && ~locale.lastIndexOf("_")) {
        const languageFile = shim.resolve(directory, "./", locale.split("_")[0] + ".json");
        if (this._fileExistsSync(languageFile))
          file = languageFile;
      }
      return file;
    }
    _fileExistsSync(file) {
      return shim.exists(file);
    }
  };
  function y18n(opts2, _shim) {
    shim = _shim;
    const y18n3 = new Y18N(opts2);
    return {
      __: y18n3.__.bind(y18n3),
      __n: y18n3.__n.bind(y18n3),
      setLocale: y18n3.setLocale.bind(y18n3),
      getLocale: y18n3.getLocale.bind(y18n3),
      updateLocale: y18n3.updateLocale.bind(y18n3),
      locale: y18n3.locale
    };
  }

  // node_modules/y18n/index.mjs
  var y18n2 = (opts2) => {
    return y18n(opts2, node_default);
  };
  var y18n_default = y18n2;

  // node_modules/yargs/lib/platform-shims/esm.mjs
  var import_meta = {};
  var REQUIRE_ERROR = "require is not supported by ESM";
  var REQUIRE_DIRECTORY_ERROR = "loading a directory of commands is not supported yet for ESM";
  var __dirname2;
  try {
    __dirname2 = (0, import_url3.fileURLToPath)(import_meta.url);
  } catch (e) {
    __dirname2 = process.cwd();
  }
  var mainFilename = __dirname2.substring(0, __dirname2.lastIndexOf("node_modules"));
  var esm_default = {
    assert: {
      notStrictEqual: import_assert.notStrictEqual,
      strictEqual: import_assert.strictEqual
    },
    cliui: ui,
    findUp: sync_default,
    getEnv: (key) => {
      return process.env[key];
    },
    inspect: import_util4.inspect,
    getCallerFile: () => {
      throw new YError(REQUIRE_DIRECTORY_ERROR);
    },
    getProcessArgvBin,
    mainFilename: mainFilename || process.cwd(),
    Parser: lib_default,
    path: {
      basename: import_path10.basename,
      dirname: import_path10.dirname,
      extname: import_path10.extname,
      relative: import_path10.relative,
      resolve: import_path10.resolve
    },
    process: {
      argv: () => process.argv,
      cwd: process.cwd,
      emitWarning: (warning, type) => process.emitWarning(warning, type),
      execPath: () => process.execPath,
      exit: process.exit,
      nextTick: process.nextTick,
      stdColumns: typeof process.stdout.columns !== "undefined" ? process.stdout.columns : null
    },
    readFileSync: import_fs15.readFileSync,
    require: () => {
      throw new YError(REQUIRE_ERROR);
    },
    requireDirectory: () => {
      throw new YError(REQUIRE_DIRECTORY_ERROR);
    },
    stringWidth: (str) => {
      return [...str].length;
    },
    y18n: y18n_default({
      directory: (0, import_path10.resolve)(__dirname2, "../../../locales"),
      updateFiles: false
    })
  };

  // node_modules/yargs/build/lib/typings/common-types.js
  function assertNotStrictEqual(actual, expected, shim3, message) {
    shim3.assert.notStrictEqual(actual, expected, message);
  }
  function assertSingleKey(actual, shim3) {
    shim3.assert.strictEqual(typeof actual, "string");
  }
  function objectKeys(object) {
    return Object.keys(object);
  }

  // node_modules/yargs/build/lib/utils/is-promise.js
  function isPromise(maybePromise) {
    return !!maybePromise && !!maybePromise.then && typeof maybePromise.then === "function";
  }

  // node_modules/yargs/build/lib/parse-command.js
  function parseCommand(cmd) {
    const extraSpacesStrippedCommand = cmd.replace(/\s{2,}/g, " ");
    const splitCommand = extraSpacesStrippedCommand.split(/\s+(?![^[]*]|[^<]*>)/);
    const bregex = /\.*[\][<>]/g;
    const firstCommand = splitCommand.shift();
    if (!firstCommand)
      throw new Error(`No command found in: ${cmd}`);
    const parsedCommand = {
      cmd: firstCommand.replace(bregex, ""),
      demanded: [],
      optional: []
    };
    splitCommand.forEach((cmd2, i) => {
      let variadic = false;
      cmd2 = cmd2.replace(/\s/g, "");
      if (/\.+[\]>]/.test(cmd2) && i === splitCommand.length - 1)
        variadic = true;
      if (/^\[/.test(cmd2)) {
        parsedCommand.optional.push({
          cmd: cmd2.replace(bregex, "").split("|"),
          variadic
        });
      } else {
        parsedCommand.demanded.push({
          cmd: cmd2.replace(bregex, "").split("|"),
          variadic
        });
      }
    });
    return parsedCommand;
  }

  // node_modules/yargs/build/lib/argsert.js
  var positionName = ["first", "second", "third", "fourth", "fifth", "sixth"];
  function argsert(arg1, arg2, arg3) {
    function parseArgs() {
      return typeof arg1 === "object" ? [{ demanded: [], optional: [] }, arg1, arg2] : [
        parseCommand(`cmd ${arg1}`),
        arg2,
        arg3
      ];
    }
    try {
      let position = 0;
      const [parsed, callerArguments, _length] = parseArgs();
      const args = [].slice.call(callerArguments);
      while (args.length && args[args.length - 1] === void 0)
        args.pop();
      const length = _length || args.length;
      if (length < parsed.demanded.length) {
        throw new YError(`Not enough arguments provided. Expected ${parsed.demanded.length} but received ${args.length}.`);
      }
      const totalCommands = parsed.demanded.length + parsed.optional.length;
      if (length > totalCommands) {
        throw new YError(`Too many arguments provided. Expected max ${totalCommands} but received ${length}.`);
      }
      parsed.demanded.forEach((demanded) => {
        const arg = args.shift();
        const observedType = guessType(arg);
        const matchingTypes = demanded.cmd.filter((type) => type === observedType || type === "*");
        if (matchingTypes.length === 0)
          argumentTypeError(observedType, demanded.cmd, position);
        position += 1;
      });
      parsed.optional.forEach((optional) => {
        if (args.length === 0)
          return;
        const arg = args.shift();
        const observedType = guessType(arg);
        const matchingTypes = optional.cmd.filter((type) => type === observedType || type === "*");
        if (matchingTypes.length === 0)
          argumentTypeError(observedType, optional.cmd, position);
        position += 1;
      });
    } catch (err) {
      console.warn(err.stack);
    }
  }
  function guessType(arg) {
    if (Array.isArray(arg)) {
      return "array";
    } else if (arg === null) {
      return "null";
    }
    return typeof arg;
  }
  function argumentTypeError(observedType, allowedTypes, position) {
    throw new YError(`Invalid ${positionName[position] || "manyith"} argument. Expected ${allowedTypes.join(" or ")} but received ${observedType}.`);
  }

  // node_modules/yargs/build/lib/middleware.js
  var GlobalMiddleware = class {
    constructor(yargs) {
      this.globalMiddleware = [];
      this.frozens = [];
      this.yargs = yargs;
    }
    addMiddleware(callback, applyBeforeValidation, global = true, mutates = false) {
      argsert("<array|function> [boolean] [boolean] [boolean]", [callback, applyBeforeValidation, global], arguments.length);
      if (Array.isArray(callback)) {
        for (let i = 0; i < callback.length; i++) {
          if (typeof callback[i] !== "function") {
            throw Error("middleware must be a function");
          }
          const m = callback[i];
          m.applyBeforeValidation = applyBeforeValidation;
          m.global = global;
        }
        Array.prototype.push.apply(this.globalMiddleware, callback);
      } else if (typeof callback === "function") {
        const m = callback;
        m.applyBeforeValidation = applyBeforeValidation;
        m.global = global;
        m.mutates = mutates;
        this.globalMiddleware.push(callback);
      }
      return this.yargs;
    }
    addCoerceMiddleware(callback, option) {
      const aliases = this.yargs.getAliases();
      this.globalMiddleware = this.globalMiddleware.filter((m) => {
        const toCheck = [...aliases[option] || [], option];
        if (!m.option)
          return true;
        else
          return !toCheck.includes(m.option);
      });
      callback.option = option;
      return this.addMiddleware(callback, true, true, true);
    }
    getMiddleware() {
      return this.globalMiddleware;
    }
    freeze() {
      this.frozens.push([...this.globalMiddleware]);
    }
    unfreeze() {
      const frozen = this.frozens.pop();
      if (frozen !== void 0)
        this.globalMiddleware = frozen;
    }
    reset() {
      this.globalMiddleware = this.globalMiddleware.filter((m) => m.global);
    }
  };
  function commandMiddlewareFactory(commandMiddleware) {
    if (!commandMiddleware)
      return [];
    return commandMiddleware.map((middleware) => {
      middleware.applyBeforeValidation = false;
      return middleware;
    });
  }
  function applyMiddleware(argv, yargs, middlewares, beforeValidation) {
    return middlewares.reduce((acc, middleware) => {
      if (middleware.applyBeforeValidation !== beforeValidation) {
        return acc;
      }
      if (middleware.mutates) {
        if (middleware.applied)
          return acc;
        middleware.applied = true;
      }
      if (isPromise(acc)) {
        return acc.then((initialObj) => Promise.all([initialObj, middleware(initialObj, yargs)])).then(([initialObj, middlewareObj]) => Object.assign(initialObj, middlewareObj));
      } else {
        const result = middleware(acc, yargs);
        return isPromise(result) ? result.then((middlewareObj) => Object.assign(acc, middlewareObj)) : Object.assign(acc, result);
      }
    }, argv);
  }

  // node_modules/yargs/build/lib/utils/maybe-async-result.js
  function maybeAsyncResult(getResult, resultHandler, errorHandler = (err) => {
    throw err;
  }) {
    try {
      const result = isFunction(getResult) ? getResult() : getResult;
      return isPromise(result) ? result.then((result2) => resultHandler(result2)) : resultHandler(result);
    } catch (err) {
      return errorHandler(err);
    }
  }
  function isFunction(arg) {
    return typeof arg === "function";
  }

  // node_modules/yargs/build/lib/utils/which-module.js
  function whichModule(exported) {
    if (typeof __require === "undefined")
      return null;
    for (let i = 0, files = Object.keys(__require.cache), mod; i < files.length; i++) {
      mod = __require.cache[files[i]];
      if (mod.exports === exported)
        return mod;
    }
    return null;
  }

  // node_modules/yargs/build/lib/command.js
  var DEFAULT_MARKER = /(^\*)|(^\$0)/;
  var CommandInstance = class {
    constructor(usage2, validation2, globalMiddleware, shim3) {
      this.requireCache = /* @__PURE__ */ new Set();
      this.handlers = {};
      this.aliasMap = {};
      this.frozens = [];
      this.shim = shim3;
      this.usage = usage2;
      this.globalMiddleware = globalMiddleware;
      this.validation = validation2;
    }
    addDirectory(dir, req, callerFile, opts2) {
      opts2 = opts2 || {};
      if (typeof opts2.recurse !== "boolean")
        opts2.recurse = false;
      if (!Array.isArray(opts2.extensions))
        opts2.extensions = ["js"];
      const parentVisit = typeof opts2.visit === "function" ? opts2.visit : (o) => o;
      opts2.visit = (obj, joined, filename) => {
        const visited = parentVisit(obj, joined, filename);
        if (visited) {
          if (this.requireCache.has(joined))
            return visited;
          else
            this.requireCache.add(joined);
          this.addHandler(visited);
        }
        return visited;
      };
      this.shim.requireDirectory({ require: req, filename: callerFile }, dir, opts2);
    }
    addHandler(cmd, description, builder, handler, commandMiddleware, deprecated) {
      let aliases = [];
      const middlewares = commandMiddlewareFactory(commandMiddleware);
      handler = handler || (() => {
      });
      if (Array.isArray(cmd)) {
        if (isCommandAndAliases(cmd)) {
          [cmd, ...aliases] = cmd;
        } else {
          for (const command2 of cmd) {
            this.addHandler(command2);
          }
        }
      } else if (isCommandHandlerDefinition(cmd)) {
        let command2 = Array.isArray(cmd.command) || typeof cmd.command === "string" ? cmd.command : this.moduleName(cmd);
        if (cmd.aliases)
          command2 = [].concat(command2).concat(cmd.aliases);
        this.addHandler(command2, this.extractDesc(cmd), cmd.builder, cmd.handler, cmd.middlewares, cmd.deprecated);
        return;
      } else if (isCommandBuilderDefinition(builder)) {
        this.addHandler([cmd].concat(aliases), description, builder.builder, builder.handler, builder.middlewares, builder.deprecated);
        return;
      }
      if (typeof cmd === "string") {
        const parsedCommand = parseCommand(cmd);
        aliases = aliases.map((alias) => parseCommand(alias).cmd);
        let isDefault = false;
        const parsedAliases = [parsedCommand.cmd].concat(aliases).filter((c) => {
          if (DEFAULT_MARKER.test(c)) {
            isDefault = true;
            return false;
          }
          return true;
        });
        if (parsedAliases.length === 0 && isDefault)
          parsedAliases.push("$0");
        if (isDefault) {
          parsedCommand.cmd = parsedAliases[0];
          aliases = parsedAliases.slice(1);
          cmd = cmd.replace(DEFAULT_MARKER, parsedCommand.cmd);
        }
        aliases.forEach((alias) => {
          this.aliasMap[alias] = parsedCommand.cmd;
        });
        if (description !== false) {
          this.usage.command(cmd, description, isDefault, aliases, deprecated);
        }
        this.handlers[parsedCommand.cmd] = {
          original: cmd,
          description,
          handler,
          builder: builder || {},
          middlewares,
          deprecated,
          demanded: parsedCommand.demanded,
          optional: parsedCommand.optional
        };
        if (isDefault)
          this.defaultCommand = this.handlers[parsedCommand.cmd];
      }
    }
    getCommandHandlers() {
      return this.handlers;
    }
    getCommands() {
      return Object.keys(this.handlers).concat(Object.keys(this.aliasMap));
    }
    hasDefaultCommand() {
      return !!this.defaultCommand;
    }
    runCommand(command2, yargs, parsed, commandIndex, helpOnly, helpOrVersionSet) {
      const commandHandler = this.handlers[command2] || this.handlers[this.aliasMap[command2]] || this.defaultCommand;
      const currentContext = yargs.getInternalMethods().getContext();
      const parentCommands = currentContext.commands.slice();
      const isDefaultCommand = !command2;
      if (command2) {
        currentContext.commands.push(command2);
        currentContext.fullCommands.push(commandHandler.original);
      }
      const builderResult = this.applyBuilderUpdateUsageAndParse(isDefaultCommand, commandHandler, yargs, parsed.aliases, parentCommands, commandIndex, helpOnly, helpOrVersionSet);
      return isPromise(builderResult) ? builderResult.then((result) => this.applyMiddlewareAndGetResult(isDefaultCommand, commandHandler, result.innerArgv, currentContext, helpOnly, result.aliases, yargs)) : this.applyMiddlewareAndGetResult(isDefaultCommand, commandHandler, builderResult.innerArgv, currentContext, helpOnly, builderResult.aliases, yargs);
    }
    applyBuilderUpdateUsageAndParse(isDefaultCommand, commandHandler, yargs, aliases, parentCommands, commandIndex, helpOnly, helpOrVersionSet) {
      const builder = commandHandler.builder;
      let innerYargs = yargs;
      if (isCommandBuilderCallback(builder)) {
        yargs.getInternalMethods().getUsageInstance().freeze();
        const builderOutput = builder(yargs.getInternalMethods().reset(aliases), helpOrVersionSet);
        if (isPromise(builderOutput)) {
          return builderOutput.then((output) => {
            innerYargs = isYargsInstance(output) ? output : yargs;
            return this.parseAndUpdateUsage(isDefaultCommand, commandHandler, innerYargs, parentCommands, commandIndex, helpOnly);
          });
        }
      } else if (isCommandBuilderOptionDefinitions(builder)) {
        yargs.getInternalMethods().getUsageInstance().freeze();
        innerYargs = yargs.getInternalMethods().reset(aliases);
        Object.keys(commandHandler.builder).forEach((key) => {
          innerYargs.option(key, builder[key]);
        });
      }
      return this.parseAndUpdateUsage(isDefaultCommand, commandHandler, innerYargs, parentCommands, commandIndex, helpOnly);
    }
    parseAndUpdateUsage(isDefaultCommand, commandHandler, innerYargs, parentCommands, commandIndex, helpOnly) {
      if (isDefaultCommand)
        innerYargs.getInternalMethods().getUsageInstance().unfreeze(true);
      if (this.shouldUpdateUsage(innerYargs)) {
        innerYargs.getInternalMethods().getUsageInstance().usage(this.usageFromParentCommandsCommandHandler(parentCommands, commandHandler), commandHandler.description);
      }
      const innerArgv = innerYargs.getInternalMethods().runYargsParserAndExecuteCommands(null, void 0, true, commandIndex, helpOnly);
      return isPromise(innerArgv) ? innerArgv.then((argv) => ({
        aliases: innerYargs.parsed.aliases,
        innerArgv: argv
      })) : {
        aliases: innerYargs.parsed.aliases,
        innerArgv
      };
    }
    shouldUpdateUsage(yargs) {
      return !yargs.getInternalMethods().getUsageInstance().getUsageDisabled() && yargs.getInternalMethods().getUsageInstance().getUsage().length === 0;
    }
    usageFromParentCommandsCommandHandler(parentCommands, commandHandler) {
      const c = DEFAULT_MARKER.test(commandHandler.original) ? commandHandler.original.replace(DEFAULT_MARKER, "").trim() : commandHandler.original;
      const pc = parentCommands.filter((c2) => {
        return !DEFAULT_MARKER.test(c2);
      });
      pc.push(c);
      return `$0 ${pc.join(" ")}`;
    }
    handleValidationAndGetResult(isDefaultCommand, commandHandler, innerArgv, currentContext, aliases, yargs, middlewares, positionalMap) {
      if (!yargs.getInternalMethods().getHasOutput()) {
        const validation2 = yargs.getInternalMethods().runValidation(aliases, positionalMap, yargs.parsed.error, isDefaultCommand);
        innerArgv = maybeAsyncResult(innerArgv, (result) => {
          validation2(result);
          return result;
        });
      }
      if (commandHandler.handler && !yargs.getInternalMethods().getHasOutput()) {
        yargs.getInternalMethods().setHasOutput();
        const populateDoubleDash = !!yargs.getOptions().configuration["populate--"];
        yargs.getInternalMethods().postProcess(innerArgv, populateDoubleDash, false, false);
        innerArgv = applyMiddleware(innerArgv, yargs, middlewares, false);
        innerArgv = maybeAsyncResult(innerArgv, (result) => {
          const handlerResult = commandHandler.handler(result);
          return isPromise(handlerResult) ? handlerResult.then(() => result) : result;
        });
        if (!isDefaultCommand) {
          yargs.getInternalMethods().getUsageInstance().cacheHelpMessage();
        }
        if (isPromise(innerArgv) && !yargs.getInternalMethods().hasParseCallback()) {
          innerArgv.catch((error) => {
            try {
              yargs.getInternalMethods().getUsageInstance().fail(null, error);
            } catch (_err) {
            }
          });
        }
      }
      if (!isDefaultCommand) {
        currentContext.commands.pop();
        currentContext.fullCommands.pop();
      }
      return innerArgv;
    }
    applyMiddlewareAndGetResult(isDefaultCommand, commandHandler, innerArgv, currentContext, helpOnly, aliases, yargs) {
      let positionalMap = {};
      if (helpOnly)
        return innerArgv;
      if (!yargs.getInternalMethods().getHasOutput()) {
        positionalMap = this.populatePositionals(commandHandler, innerArgv, currentContext, yargs);
      }
      const middlewares = this.globalMiddleware.getMiddleware().slice(0).concat(commandHandler.middlewares);
      const maybePromiseArgv = applyMiddleware(innerArgv, yargs, middlewares, true);
      return isPromise(maybePromiseArgv) ? maybePromiseArgv.then((resolvedInnerArgv) => this.handleValidationAndGetResult(isDefaultCommand, commandHandler, resolvedInnerArgv, currentContext, aliases, yargs, middlewares, positionalMap)) : this.handleValidationAndGetResult(isDefaultCommand, commandHandler, maybePromiseArgv, currentContext, aliases, yargs, middlewares, positionalMap);
    }
    populatePositionals(commandHandler, argv, context, yargs) {
      argv._ = argv._.slice(context.commands.length);
      const demanded = commandHandler.demanded.slice(0);
      const optional = commandHandler.optional.slice(0);
      const positionalMap = {};
      this.validation.positionalCount(demanded.length, argv._.length);
      while (demanded.length) {
        const demand = demanded.shift();
        this.populatePositional(demand, argv, positionalMap);
      }
      while (optional.length) {
        const maybe = optional.shift();
        this.populatePositional(maybe, argv, positionalMap);
      }
      argv._ = context.commands.concat(argv._.map((a) => "" + a));
      this.postProcessPositionals(argv, positionalMap, this.cmdToParseOptions(commandHandler.original), yargs);
      return positionalMap;
    }
    populatePositional(positional, argv, positionalMap) {
      const cmd = positional.cmd[0];
      if (positional.variadic) {
        positionalMap[cmd] = argv._.splice(0).map(String);
      } else {
        if (argv._.length)
          positionalMap[cmd] = [String(argv._.shift())];
      }
    }
    cmdToParseOptions(cmdString) {
      const parseOptions = {
        array: [],
        default: {},
        alias: {},
        demand: {}
      };
      const parsed = parseCommand(cmdString);
      parsed.demanded.forEach((d) => {
        const [cmd, ...aliases] = d.cmd;
        if (d.variadic) {
          parseOptions.array.push(cmd);
          parseOptions.default[cmd] = [];
        }
        parseOptions.alias[cmd] = aliases;
        parseOptions.demand[cmd] = true;
      });
      parsed.optional.forEach((o) => {
        const [cmd, ...aliases] = o.cmd;
        if (o.variadic) {
          parseOptions.array.push(cmd);
          parseOptions.default[cmd] = [];
        }
        parseOptions.alias[cmd] = aliases;
      });
      return parseOptions;
    }
    postProcessPositionals(argv, positionalMap, parseOptions, yargs) {
      const options = Object.assign({}, yargs.getOptions());
      options.default = Object.assign(parseOptions.default, options.default);
      for (const key of Object.keys(parseOptions.alias)) {
        options.alias[key] = (options.alias[key] || []).concat(parseOptions.alias[key]);
      }
      options.array = options.array.concat(parseOptions.array);
      options.config = {};
      const unparsed = [];
      Object.keys(positionalMap).forEach((key) => {
        positionalMap[key].map((value) => {
          if (options.configuration["unknown-options-as-args"])
            options.key[key] = true;
          unparsed.push(`--${key}`);
          unparsed.push(value);
        });
      });
      if (!unparsed.length)
        return;
      const config = Object.assign({}, options.configuration, {
        "populate--": false
      });
      const parsed = this.shim.Parser.detailed(unparsed, Object.assign({}, options, {
        configuration: config
      }));
      if (parsed.error) {
        yargs.getInternalMethods().getUsageInstance().fail(parsed.error.message, parsed.error);
      } else {
        const positionalKeys = Object.keys(positionalMap);
        Object.keys(positionalMap).forEach((key) => {
          positionalKeys.push(...parsed.aliases[key]);
        });
        Object.keys(parsed.argv).forEach((key) => {
          if (positionalKeys.includes(key)) {
            if (!positionalMap[key])
              positionalMap[key] = parsed.argv[key];
            if (!this.isInConfigs(yargs, key) && !this.isDefaulted(yargs, key) && Object.prototype.hasOwnProperty.call(argv, key) && Object.prototype.hasOwnProperty.call(parsed.argv, key) && (Array.isArray(argv[key]) || Array.isArray(parsed.argv[key]))) {
              argv[key] = [].concat(argv[key], parsed.argv[key]);
            } else {
              argv[key] = parsed.argv[key];
            }
          }
        });
      }
    }
    isDefaulted(yargs, key) {
      const { default: defaults2 } = yargs.getOptions();
      return Object.prototype.hasOwnProperty.call(defaults2, key) || Object.prototype.hasOwnProperty.call(defaults2, this.shim.Parser.camelCase(key));
    }
    isInConfigs(yargs, key) {
      const { configObjects } = yargs.getOptions();
      return configObjects.some((c) => Object.prototype.hasOwnProperty.call(c, key)) || configObjects.some((c) => Object.prototype.hasOwnProperty.call(c, this.shim.Parser.camelCase(key)));
    }
    runDefaultBuilderOn(yargs) {
      if (!this.defaultCommand)
        return;
      if (this.shouldUpdateUsage(yargs)) {
        const commandString = DEFAULT_MARKER.test(this.defaultCommand.original) ? this.defaultCommand.original : this.defaultCommand.original.replace(/^[^[\]<>]*/, "$0 ");
        yargs.getInternalMethods().getUsageInstance().usage(commandString, this.defaultCommand.description);
      }
      const builder = this.defaultCommand.builder;
      if (isCommandBuilderCallback(builder)) {
        return builder(yargs, true);
      } else if (!isCommandBuilderDefinition(builder)) {
        Object.keys(builder).forEach((key) => {
          yargs.option(key, builder[key]);
        });
      }
      return void 0;
    }
    moduleName(obj) {
      const mod = whichModule(obj);
      if (!mod)
        throw new Error(`No command name given for module: ${this.shim.inspect(obj)}`);
      return this.commandFromFilename(mod.filename);
    }
    commandFromFilename(filename) {
      return this.shim.path.basename(filename, this.shim.path.extname(filename));
    }
    extractDesc({ describe, description, desc }) {
      for (const test of [describe, description, desc]) {
        if (typeof test === "string" || test === false)
          return test;
        assertNotStrictEqual(test, true, this.shim);
      }
      return false;
    }
    freeze() {
      this.frozens.push({
        handlers: this.handlers,
        aliasMap: this.aliasMap,
        defaultCommand: this.defaultCommand
      });
    }
    unfreeze() {
      const frozen = this.frozens.pop();
      assertNotStrictEqual(frozen, void 0, this.shim);
      ({
        handlers: this.handlers,
        aliasMap: this.aliasMap,
        defaultCommand: this.defaultCommand
      } = frozen);
    }
    reset() {
      this.handlers = {};
      this.aliasMap = {};
      this.defaultCommand = void 0;
      this.requireCache = /* @__PURE__ */ new Set();
      return this;
    }
  };
  function command(usage2, validation2, globalMiddleware, shim3) {
    return new CommandInstance(usage2, validation2, globalMiddleware, shim3);
  }
  function isCommandBuilderDefinition(builder) {
    return typeof builder === "object" && !!builder.builder && typeof builder.handler === "function";
  }
  function isCommandAndAliases(cmd) {
    return cmd.every((c) => typeof c === "string");
  }
  function isCommandBuilderCallback(builder) {
    return typeof builder === "function";
  }
  function isCommandBuilderOptionDefinitions(builder) {
    return typeof builder === "object";
  }
  function isCommandHandlerDefinition(cmd) {
    return typeof cmd === "object" && !Array.isArray(cmd);
  }

  // node_modules/yargs/build/lib/utils/obj-filter.js
  function objFilter(original = {}, filter2 = () => true) {
    const obj = {};
    objectKeys(original).forEach((key) => {
      if (filter2(key, original[key])) {
        obj[key] = original[key];
      }
    });
    return obj;
  }

  // node_modules/yargs/build/lib/utils/set-blocking.js
  function setBlocking(blocking) {
    if (typeof process === "undefined")
      return;
    [process.stdout, process.stderr].forEach((_stream) => {
      const stream2 = _stream;
      if (stream2._handle && stream2.isTTY && typeof stream2._handle.setBlocking === "function") {
        stream2._handle.setBlocking(blocking);
      }
    });
  }

  // node_modules/yargs/build/lib/usage.js
  function isBoolean(fail) {
    return typeof fail === "boolean";
  }
  function usage(yargs, shim3) {
    const __ = shim3.y18n.__;
    const self = {};
    const fails = [];
    self.failFn = function failFn(f) {
      fails.push(f);
    };
    let failMessage = null;
    let globalFailMessage = null;
    let showHelpOnFail = true;
    self.showHelpOnFail = function showHelpOnFailFn(arg1 = true, arg2) {
      const [enabled, message] = typeof arg1 === "string" ? [true, arg1] : [arg1, arg2];
      if (yargs.getInternalMethods().isGlobalContext()) {
        globalFailMessage = message;
      }
      failMessage = message;
      showHelpOnFail = enabled;
      return self;
    };
    let failureOutput = false;
    self.fail = function fail(msg, err) {
      const logger = yargs.getInternalMethods().getLoggerInstance();
      if (fails.length) {
        for (let i = fails.length - 1; i >= 0; --i) {
          const fail2 = fails[i];
          if (isBoolean(fail2)) {
            if (err)
              throw err;
            else if (msg)
              throw Error(msg);
          } else {
            fail2(msg, err, self);
          }
        }
      } else {
        if (yargs.getExitProcess())
          setBlocking(true);
        if (!failureOutput) {
          failureOutput = true;
          if (showHelpOnFail) {
            yargs.showHelp("error");
            logger.error();
          }
          if (msg || err)
            logger.error(msg || err);
          const globalOrCommandFailMessage = failMessage || globalFailMessage;
          if (globalOrCommandFailMessage) {
            if (msg || err)
              logger.error("");
            logger.error(globalOrCommandFailMessage);
          }
        }
        err = err || new YError(msg);
        if (yargs.getExitProcess()) {
          return yargs.exit(1);
        } else if (yargs.getInternalMethods().hasParseCallback()) {
          return yargs.exit(1, err);
        } else {
          throw err;
        }
      }
    };
    let usages = [];
    let usageDisabled = false;
    self.usage = (msg, description) => {
      if (msg === null) {
        usageDisabled = true;
        usages = [];
        return self;
      }
      usageDisabled = false;
      usages.push([msg, description || ""]);
      return self;
    };
    self.getUsage = () => {
      return usages;
    };
    self.getUsageDisabled = () => {
      return usageDisabled;
    };
    self.getPositionalGroupName = () => {
      return __("Positionals:");
    };
    let examples = [];
    self.example = (cmd, description) => {
      examples.push([cmd, description || ""]);
    };
    let commands = [];
    self.command = function command2(cmd, description, isDefault, aliases, deprecated = false) {
      if (isDefault) {
        commands = commands.map((cmdArray) => {
          cmdArray[2] = false;
          return cmdArray;
        });
      }
      commands.push([cmd, description || "", isDefault, aliases, deprecated]);
    };
    self.getCommands = () => commands;
    let descriptions = {};
    self.describe = function describe(keyOrKeys, desc) {
      if (Array.isArray(keyOrKeys)) {
        keyOrKeys.forEach((k) => {
          self.describe(k, desc);
        });
      } else if (typeof keyOrKeys === "object") {
        Object.keys(keyOrKeys).forEach((k) => {
          self.describe(k, keyOrKeys[k]);
        });
      } else {
        descriptions[keyOrKeys] = desc;
      }
    };
    self.getDescriptions = () => descriptions;
    let epilogs = [];
    self.epilog = (msg) => {
      epilogs.push(msg);
    };
    let wrapSet = false;
    let wrap3;
    self.wrap = (cols) => {
      wrapSet = true;
      wrap3 = cols;
    };
    self.getWrap = () => {
      if (shim3.getEnv("YARGS_DISABLE_WRAP")) {
        return null;
      }
      if (!wrapSet) {
        wrap3 = windowWidth();
        wrapSet = true;
      }
      return wrap3;
    };
    const deferY18nLookupPrefix = "__yargsString__:";
    self.deferY18nLookup = (str) => deferY18nLookupPrefix + str;
    self.help = function help() {
      if (cachedHelpMessage)
        return cachedHelpMessage;
      normalizeAliases();
      const base$0 = yargs.customScriptName ? yargs.$0 : shim3.path.basename(yargs.$0);
      const demandedOptions = yargs.getDemandedOptions();
      const demandedCommands = yargs.getDemandedCommands();
      const deprecatedOptions = yargs.getDeprecatedOptions();
      const groups = yargs.getGroups();
      const options = yargs.getOptions();
      let keys = [];
      keys = keys.concat(Object.keys(descriptions));
      keys = keys.concat(Object.keys(demandedOptions));
      keys = keys.concat(Object.keys(demandedCommands));
      keys = keys.concat(Object.keys(options.default));
      keys = keys.filter(filterHiddenOptions);
      keys = Object.keys(keys.reduce((acc, key) => {
        if (key !== "_")
          acc[key] = true;
        return acc;
      }, {}));
      const theWrap = self.getWrap();
      const ui2 = shim3.cliui({
        width: theWrap,
        wrap: !!theWrap
      });
      if (!usageDisabled) {
        if (usages.length) {
          usages.forEach((usage2) => {
            ui2.div({ text: `${usage2[0].replace(/\$0/g, base$0)}` });
            if (usage2[1]) {
              ui2.div({ text: `${usage2[1]}`, padding: [1, 0, 0, 0] });
            }
          });
          ui2.div();
        } else if (commands.length) {
          let u = null;
          if (demandedCommands._) {
            u = `${base$0} <${__("command")}>
`;
          } else {
            u = `${base$0} [${__("command")}]
`;
          }
          ui2.div(`${u}`);
        }
      }
      if (commands.length > 1 || commands.length === 1 && !commands[0][2]) {
        ui2.div(__("Commands:"));
        const context = yargs.getInternalMethods().getContext();
        const parentCommands = context.commands.length ? `${context.commands.join(" ")} ` : "";
        if (yargs.getInternalMethods().getParserConfiguration()["sort-commands"] === true) {
          commands = commands.sort((a, b) => a[0].localeCompare(b[0]));
        }
        const prefix = base$0 ? `${base$0} ` : "";
        commands.forEach((command2) => {
          const commandString = `${prefix}${parentCommands}${command2[0].replace(/^\$0 ?/, "")}`;
          ui2.span({
            text: commandString,
            padding: [0, 2, 0, 2],
            width: maxWidth(commands, theWrap, `${base$0}${parentCommands}`) + 4
          }, { text: command2[1] });
          const hints = [];
          if (command2[2])
            hints.push(`[${__("default")}]`);
          if (command2[3] && command2[3].length) {
            hints.push(`[${__("aliases:")} ${command2[3].join(", ")}]`);
          }
          if (command2[4]) {
            if (typeof command2[4] === "string") {
              hints.push(`[${__("deprecated: %s", command2[4])}]`);
            } else {
              hints.push(`[${__("deprecated")}]`);
            }
          }
          if (hints.length) {
            ui2.div({
              text: hints.join(" "),
              padding: [0, 0, 0, 2],
              align: "right"
            });
          } else {
            ui2.div();
          }
        });
        ui2.div();
      }
      const aliasKeys = (Object.keys(options.alias) || []).concat(Object.keys(yargs.parsed.newAliases) || []);
      keys = keys.filter((key) => !yargs.parsed.newAliases[key] && aliasKeys.every((alias) => (options.alias[alias] || []).indexOf(key) === -1));
      const defaultGroup = __("Options:");
      if (!groups[defaultGroup])
        groups[defaultGroup] = [];
      addUngroupedKeys(keys, options.alias, groups, defaultGroup);
      const isLongSwitch = (sw) => /^--/.test(getText(sw));
      const displayedGroups = Object.keys(groups).filter((groupName) => groups[groupName].length > 0).map((groupName) => {
        const normalizedKeys = groups[groupName].filter(filterHiddenOptions).map((key) => {
          if (aliasKeys.includes(key))
            return key;
          for (let i = 0, aliasKey; (aliasKey = aliasKeys[i]) !== void 0; i++) {
            if ((options.alias[aliasKey] || []).includes(key))
              return aliasKey;
          }
          return key;
        });
        return { groupName, normalizedKeys };
      }).filter(({ normalizedKeys }) => normalizedKeys.length > 0).map(({ groupName, normalizedKeys }) => {
        const switches = normalizedKeys.reduce((acc, key) => {
          acc[key] = [key].concat(options.alias[key] || []).map((sw) => {
            if (groupName === self.getPositionalGroupName())
              return sw;
            else {
              return (/^[0-9]$/.test(sw) ? options.boolean.includes(key) ? "-" : "--" : sw.length > 1 ? "--" : "-") + sw;
            }
          }).sort((sw1, sw2) => isLongSwitch(sw1) === isLongSwitch(sw2) ? 0 : isLongSwitch(sw1) ? 1 : -1).join(", ");
          return acc;
        }, {});
        return { groupName, normalizedKeys, switches };
      });
      const shortSwitchesUsed = displayedGroups.filter(({ groupName }) => groupName !== self.getPositionalGroupName()).some(({ normalizedKeys, switches }) => !normalizedKeys.every((key) => isLongSwitch(switches[key])));
      if (shortSwitchesUsed) {
        displayedGroups.filter(({ groupName }) => groupName !== self.getPositionalGroupName()).forEach(({ normalizedKeys, switches }) => {
          normalizedKeys.forEach((key) => {
            if (isLongSwitch(switches[key])) {
              switches[key] = addIndentation(switches[key], "-x, ".length);
            }
          });
        });
      }
      displayedGroups.forEach(({ groupName, normalizedKeys, switches }) => {
        ui2.div(groupName);
        normalizedKeys.forEach((key) => {
          const kswitch = switches[key];
          let desc = descriptions[key] || "";
          let type = null;
          if (desc.includes(deferY18nLookupPrefix))
            desc = __(desc.substring(deferY18nLookupPrefix.length));
          if (options.boolean.includes(key))
            type = `[${__("boolean")}]`;
          if (options.count.includes(key))
            type = `[${__("count")}]`;
          if (options.string.includes(key))
            type = `[${__("string")}]`;
          if (options.normalize.includes(key))
            type = `[${__("string")}]`;
          if (options.array.includes(key))
            type = `[${__("array")}]`;
          if (options.number.includes(key))
            type = `[${__("number")}]`;
          const deprecatedExtra = (deprecated) => typeof deprecated === "string" ? `[${__("deprecated: %s", deprecated)}]` : `[${__("deprecated")}]`;
          const extra = [
            key in deprecatedOptions ? deprecatedExtra(deprecatedOptions[key]) : null,
            type,
            key in demandedOptions ? `[${__("required")}]` : null,
            options.choices && options.choices[key] ? `[${__("choices:")} ${self.stringifiedValues(options.choices[key])}]` : null,
            defaultString(options.default[key], options.defaultDescription[key])
          ].filter(Boolean).join(" ");
          ui2.span({
            text: getText(kswitch),
            padding: [0, 2, 0, 2 + getIndentation(kswitch)],
            width: maxWidth(switches, theWrap) + 4
          }, desc);
          const shouldHideOptionExtras = yargs.getInternalMethods().getUsageConfiguration()["hide-types"] === true;
          if (extra && !shouldHideOptionExtras)
            ui2.div({ text: extra, padding: [0, 0, 0, 2], align: "right" });
          else
            ui2.div();
        });
        ui2.div();
      });
      if (examples.length) {
        ui2.div(__("Examples:"));
        examples.forEach((example) => {
          example[0] = example[0].replace(/\$0/g, base$0);
        });
        examples.forEach((example) => {
          if (example[1] === "") {
            ui2.div({
              text: example[0],
              padding: [0, 2, 0, 2]
            });
          } else {
            ui2.div({
              text: example[0],
              padding: [0, 2, 0, 2],
              width: maxWidth(examples, theWrap) + 4
            }, {
              text: example[1]
            });
          }
        });
        ui2.div();
      }
      if (epilogs.length > 0) {
        const e = epilogs.map((epilog) => epilog.replace(/\$0/g, base$0)).join("\n");
        ui2.div(`${e}
`);
      }
      return ui2.toString().replace(/\s*$/, "");
    };
    function maxWidth(table, theWrap, modifier) {
      let width = 0;
      if (!Array.isArray(table)) {
        table = Object.values(table).map((v) => [v]);
      }
      table.forEach((v) => {
        width = Math.max(shim3.stringWidth(modifier ? `${modifier} ${getText(v[0])}` : getText(v[0])) + getIndentation(v[0]), width);
      });
      if (theWrap)
        width = Math.min(width, parseInt((theWrap * 0.5).toString(), 10));
      return width;
    }
    function normalizeAliases() {
      const demandedOptions = yargs.getDemandedOptions();
      const options = yargs.getOptions();
      (Object.keys(options.alias) || []).forEach((key) => {
        options.alias[key].forEach((alias) => {
          if (descriptions[alias])
            self.describe(key, descriptions[alias]);
          if (alias in demandedOptions)
            yargs.demandOption(key, demandedOptions[alias]);
          if (options.boolean.includes(alias))
            yargs.boolean(key);
          if (options.count.includes(alias))
            yargs.count(key);
          if (options.string.includes(alias))
            yargs.string(key);
          if (options.normalize.includes(alias))
            yargs.normalize(key);
          if (options.array.includes(alias))
            yargs.array(key);
          if (options.number.includes(alias))
            yargs.number(key);
        });
      });
    }
    let cachedHelpMessage;
    self.cacheHelpMessage = function() {
      cachedHelpMessage = this.help();
    };
    self.clearCachedHelpMessage = function() {
      cachedHelpMessage = void 0;
    };
    self.hasCachedHelpMessage = function() {
      return !!cachedHelpMessage;
    };
    function addUngroupedKeys(keys, aliases, groups, defaultGroup) {
      let groupedKeys = [];
      let toCheck = null;
      Object.keys(groups).forEach((group) => {
        groupedKeys = groupedKeys.concat(groups[group]);
      });
      keys.forEach((key) => {
        toCheck = [key].concat(aliases[key]);
        if (!toCheck.some((k) => groupedKeys.indexOf(k) !== -1)) {
          groups[defaultGroup].push(key);
        }
      });
      return groupedKeys;
    }
    function filterHiddenOptions(key) {
      return yargs.getOptions().hiddenOptions.indexOf(key) < 0 || yargs.parsed.argv[yargs.getOptions().showHiddenOpt];
    }
    self.showHelp = (level) => {
      const logger = yargs.getInternalMethods().getLoggerInstance();
      if (!level)
        level = "error";
      const emit = typeof level === "function" ? level : logger[level];
      emit(self.help());
    };
    self.functionDescription = (fn) => {
      const description = fn.name ? shim3.Parser.decamelize(fn.name, "-") : __("generated-value");
      return ["(", description, ")"].join("");
    };
    self.stringifiedValues = function stringifiedValues(values, separator) {
      let string = "";
      const sep2 = separator || ", ";
      const array = [].concat(values);
      if (!values || !array.length)
        return string;
      array.forEach((value) => {
        if (string.length)
          string += sep2;
        string += JSON.stringify(value);
      });
      return string;
    };
    function defaultString(value, defaultDescription) {
      let string = `[${__("default:")} `;
      if (value === void 0 && !defaultDescription)
        return null;
      if (defaultDescription) {
        string += defaultDescription;
      } else {
        switch (typeof value) {
          case "string":
            string += `"${value}"`;
            break;
          case "object":
            string += JSON.stringify(value);
            break;
          default:
            string += value;
        }
      }
      return `${string}]`;
    }
    function windowWidth() {
      const maxWidth2 = 80;
      if (shim3.process.stdColumns) {
        return Math.min(maxWidth2, shim3.process.stdColumns);
      } else {
        return maxWidth2;
      }
    }
    let version2 = null;
    self.version = (ver) => {
      version2 = ver;
    };
    self.showVersion = (level) => {
      const logger = yargs.getInternalMethods().getLoggerInstance();
      if (!level)
        level = "error";
      const emit = typeof level === "function" ? level : logger[level];
      emit(version2);
    };
    self.reset = function reset(localLookup) {
      failMessage = null;
      failureOutput = false;
      usages = [];
      usageDisabled = false;
      epilogs = [];
      examples = [];
      commands = [];
      descriptions = objFilter(descriptions, (k) => !localLookup[k]);
      return self;
    };
    const frozens = [];
    self.freeze = function freeze() {
      frozens.push({
        failMessage,
        failureOutput,
        usages,
        usageDisabled,
        epilogs,
        examples,
        commands,
        descriptions
      });
    };
    self.unfreeze = function unfreeze(defaultCommand = false) {
      const frozen = frozens.pop();
      if (!frozen)
        return;
      if (defaultCommand) {
        descriptions = { ...frozen.descriptions, ...descriptions };
        commands = [...frozen.commands, ...commands];
        usages = [...frozen.usages, ...usages];
        examples = [...frozen.examples, ...examples];
        epilogs = [...frozen.epilogs, ...epilogs];
      } else {
        ({
          failMessage,
          failureOutput,
          usages,
          usageDisabled,
          epilogs,
          examples,
          commands,
          descriptions
        } = frozen);
      }
    };
    return self;
  }
  function isIndentedText(text) {
    return typeof text === "object";
  }
  function addIndentation(text, indent) {
    return isIndentedText(text) ? { text: text.text, indentation: text.indentation + indent } : { text, indentation: indent };
  }
  function getIndentation(text) {
    return isIndentedText(text) ? text.indentation : 0;
  }
  function getText(text) {
    return isIndentedText(text) ? text.text : text;
  }

  // node_modules/yargs/build/lib/completion-templates.js
  var completionShTemplate = `###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.bashrc
#    or {{app_path}} {{completion_command}} >> ~/.bash_profile on OSX.
#
_{{app_name}}_yargs_completions()
{
    local cur_word args type_list

    cur_word="\${COMP_WORDS[COMP_CWORD]}"
    args=("\${COMP_WORDS[@]}")

    # ask yargs to generate completions.
    type_list=$({{app_path}} --get-yargs-completions "\${args[@]}")

    COMPREPLY=( $(compgen -W "\${type_list}" -- \${cur_word}) )

    # if no match was found, fall back to filename completion
    if [ \${#COMPREPLY[@]} -eq 0 ]; then
      COMPREPLY=()
    fi

    return 0
}
complete -o bashdefault -o default -F _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`;
  var completionZshTemplate = `#compdef {{app_name}}
###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.zshrc
#    or {{app_path}} {{completion_command}} >> ~/.zprofile on OSX.
#
_{{app_name}}_yargs_completions()
{
  local reply
  local si=$IFS
  IFS=$'
' reply=($(COMP_CWORD="$((CURRENT-1))" COMP_LINE="$BUFFER" COMP_POINT="$CURSOR" {{app_path}} --get-yargs-completions "\${words[@]}"))
  IFS=$si
  _describe 'values' reply
}
compdef _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`;

  // node_modules/yargs/build/lib/completion.js
  var Completion = class {
    constructor(yargs, usage2, command2, shim3) {
      var _a2, _b2, _c2;
      this.yargs = yargs;
      this.usage = usage2;
      this.command = command2;
      this.shim = shim3;
      this.completionKey = "get-yargs-completions";
      this.aliases = null;
      this.customCompletionFunction = null;
      this.indexAfterLastReset = 0;
      this.zshShell = (_c2 = ((_a2 = this.shim.getEnv("SHELL")) === null || _a2 === void 0 ? void 0 : _a2.includes("zsh")) || ((_b2 = this.shim.getEnv("ZSH_NAME")) === null || _b2 === void 0 ? void 0 : _b2.includes("zsh"))) !== null && _c2 !== void 0 ? _c2 : false;
    }
    defaultCompletion(args, argv, current, done) {
      const handlers = this.command.getCommandHandlers();
      for (let i = 0, ii = args.length; i < ii; ++i) {
        if (handlers[args[i]] && handlers[args[i]].builder) {
          const builder = handlers[args[i]].builder;
          if (isCommandBuilderCallback(builder)) {
            this.indexAfterLastReset = i + 1;
            const y = this.yargs.getInternalMethods().reset();
            builder(y, true);
            return y.argv;
          }
        }
      }
      const completions = [];
      this.commandCompletions(completions, args, current);
      this.optionCompletions(completions, args, argv, current);
      this.choicesFromOptionsCompletions(completions, args, argv, current);
      this.choicesFromPositionalsCompletions(completions, args, argv, current);
      done(null, completions);
    }
    commandCompletions(completions, args, current) {
      const parentCommands = this.yargs.getInternalMethods().getContext().commands;
      if (!current.match(/^-/) && parentCommands[parentCommands.length - 1] !== current && !this.previousArgHasChoices(args)) {
        this.usage.getCommands().forEach((usageCommand) => {
          const commandName = parseCommand(usageCommand[0]).cmd;
          if (args.indexOf(commandName) === -1) {
            if (!this.zshShell) {
              completions.push(commandName);
            } else {
              const desc = usageCommand[1] || "";
              completions.push(commandName.replace(/:/g, "\\:") + ":" + desc);
            }
          }
        });
      }
    }
    optionCompletions(completions, args, argv, current) {
      if ((current.match(/^-/) || current === "" && completions.length === 0) && !this.previousArgHasChoices(args)) {
        const options = this.yargs.getOptions();
        const positionalKeys = this.yargs.getGroups()[this.usage.getPositionalGroupName()] || [];
        Object.keys(options.key).forEach((key) => {
          const negable = !!options.configuration["boolean-negation"] && options.boolean.includes(key);
          const isPositionalKey = positionalKeys.includes(key);
          if (!isPositionalKey && !options.hiddenOptions.includes(key) && !this.argsContainKey(args, key, negable)) {
            this.completeOptionKey(key, completions, current, negable && !!options.default[key]);
          }
        });
      }
    }
    choicesFromOptionsCompletions(completions, args, argv, current) {
      if (this.previousArgHasChoices(args)) {
        const choices = this.getPreviousArgChoices(args);
        if (choices && choices.length > 0) {
          completions.push(...choices.map((c) => c.replace(/:/g, "\\:")));
        }
      }
    }
    choicesFromPositionalsCompletions(completions, args, argv, current) {
      if (current === "" && completions.length > 0 && this.previousArgHasChoices(args)) {
        return;
      }
      const positionalKeys = this.yargs.getGroups()[this.usage.getPositionalGroupName()] || [];
      const offset = Math.max(this.indexAfterLastReset, this.yargs.getInternalMethods().getContext().commands.length + 1);
      const positionalKey = positionalKeys[argv._.length - offset - 1];
      if (!positionalKey) {
        return;
      }
      const choices = this.yargs.getOptions().choices[positionalKey] || [];
      for (const choice of choices) {
        if (choice.startsWith(current)) {
          completions.push(choice.replace(/:/g, "\\:"));
        }
      }
    }
    getPreviousArgChoices(args) {
      if (args.length < 1)
        return;
      let previousArg = args[args.length - 1];
      let filter2 = "";
      if (!previousArg.startsWith("-") && args.length > 1) {
        filter2 = previousArg;
        previousArg = args[args.length - 2];
      }
      if (!previousArg.startsWith("-"))
        return;
      const previousArgKey = previousArg.replace(/^-+/, "");
      const options = this.yargs.getOptions();
      const possibleAliases = [
        previousArgKey,
        ...this.yargs.getAliases()[previousArgKey] || []
      ];
      let choices;
      for (const possibleAlias of possibleAliases) {
        if (Object.prototype.hasOwnProperty.call(options.key, possibleAlias) && Array.isArray(options.choices[possibleAlias])) {
          choices = options.choices[possibleAlias];
          break;
        }
      }
      if (choices) {
        return choices.filter((choice) => !filter2 || choice.startsWith(filter2));
      }
    }
    previousArgHasChoices(args) {
      const choices = this.getPreviousArgChoices(args);
      return choices !== void 0 && choices.length > 0;
    }
    argsContainKey(args, key, negable) {
      const argsContains = (s) => args.indexOf((/^[^0-9]$/.test(s) ? "-" : "--") + s) !== -1;
      if (argsContains(key))
        return true;
      if (negable && argsContains(`no-${key}`))
        return true;
      if (this.aliases) {
        for (const alias of this.aliases[key]) {
          if (argsContains(alias))
            return true;
        }
      }
      return false;
    }
    completeOptionKey(key, completions, current, negable) {
      var _a2, _b2, _c2, _d;
      let keyWithDesc = key;
      if (this.zshShell) {
        const descs = this.usage.getDescriptions();
        const aliasKey = (_b2 = (_a2 = this === null || this === void 0 ? void 0 : this.aliases) === null || _a2 === void 0 ? void 0 : _a2[key]) === null || _b2 === void 0 ? void 0 : _b2.find((alias) => {
          const desc2 = descs[alias];
          return typeof desc2 === "string" && desc2.length > 0;
        });
        const descFromAlias = aliasKey ? descs[aliasKey] : void 0;
        const desc = (_d = (_c2 = descs[key]) !== null && _c2 !== void 0 ? _c2 : descFromAlias) !== null && _d !== void 0 ? _d : "";
        keyWithDesc = `${key.replace(/:/g, "\\:")}:${desc.replace("__yargsString__:", "").replace(/(\r\n|\n|\r)/gm, " ")}`;
      }
      const startsByTwoDashes = (s) => /^--/.test(s);
      const isShortOption = (s) => /^[^0-9]$/.test(s);
      const dashes = !startsByTwoDashes(current) && isShortOption(key) ? "-" : "--";
      completions.push(dashes + keyWithDesc);
      if (negable) {
        completions.push(dashes + "no-" + keyWithDesc);
      }
    }
    customCompletion(args, argv, current, done) {
      assertNotStrictEqual(this.customCompletionFunction, null, this.shim);
      if (isSyncCompletionFunction(this.customCompletionFunction)) {
        const result = this.customCompletionFunction(current, argv);
        if (isPromise(result)) {
          return result.then((list) => {
            this.shim.process.nextTick(() => {
              done(null, list);
            });
          }).catch((err) => {
            this.shim.process.nextTick(() => {
              done(err, void 0);
            });
          });
        }
        return done(null, result);
      } else if (isFallbackCompletionFunction(this.customCompletionFunction)) {
        return this.customCompletionFunction(current, argv, (onCompleted = done) => this.defaultCompletion(args, argv, current, onCompleted), (completions) => {
          done(null, completions);
        });
      } else {
        return this.customCompletionFunction(current, argv, (completions) => {
          done(null, completions);
        });
      }
    }
    getCompletion(args, done) {
      const current = args.length ? args[args.length - 1] : "";
      const argv = this.yargs.parse(args, true);
      const completionFunction = this.customCompletionFunction ? (argv2) => this.customCompletion(args, argv2, current, done) : (argv2) => this.defaultCompletion(args, argv2, current, done);
      return isPromise(argv) ? argv.then(completionFunction) : completionFunction(argv);
    }
    generateCompletionScript($0, cmd) {
      let script = this.zshShell ? completionZshTemplate : completionShTemplate;
      const name = this.shim.path.basename($0);
      if ($0.match(/\.js$/))
        $0 = `./${$0}`;
      script = script.replace(/{{app_name}}/g, name);
      script = script.replace(/{{completion_command}}/g, cmd);
      return script.replace(/{{app_path}}/g, $0);
    }
    registerFunction(fn) {
      this.customCompletionFunction = fn;
    }
    setParsed(parsed) {
      this.aliases = parsed.aliases;
    }
  };
  function completion(yargs, usage2, command2, shim3) {
    return new Completion(yargs, usage2, command2, shim3);
  }
  function isSyncCompletionFunction(completionFunction) {
    return completionFunction.length < 3;
  }
  function isFallbackCompletionFunction(completionFunction) {
    return completionFunction.length > 3;
  }

  // node_modules/yargs/build/lib/utils/levenshtein.js
  function levenshtein(a, b) {
    if (a.length === 0)
      return b.length;
    if (b.length === 0)
      return a.length;
    const matrix = [];
    let i;
    for (i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    let j;
    for (j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          if (i > 1 && j > 1 && b.charAt(i - 2) === a.charAt(j - 1) && b.charAt(i - 1) === a.charAt(j - 2)) {
            matrix[i][j] = matrix[i - 2][j - 2] + 1;
          } else {
            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
          }
        }
      }
    }
    return matrix[b.length][a.length];
  }

  // node_modules/yargs/build/lib/validation.js
  var specialKeys = ["$0", "--", "_"];
  function validation(yargs, usage2, shim3) {
    const __ = shim3.y18n.__;
    const __n = shim3.y18n.__n;
    const self = {};
    self.nonOptionCount = function nonOptionCount(argv) {
      const demandedCommands = yargs.getDemandedCommands();
      const positionalCount = argv._.length + (argv["--"] ? argv["--"].length : 0);
      const _s = positionalCount - yargs.getInternalMethods().getContext().commands.length;
      if (demandedCommands._ && (_s < demandedCommands._.min || _s > demandedCommands._.max)) {
        if (_s < demandedCommands._.min) {
          if (demandedCommands._.minMsg !== void 0) {
            usage2.fail(demandedCommands._.minMsg ? demandedCommands._.minMsg.replace(/\$0/g, _s.toString()).replace(/\$1/, demandedCommands._.min.toString()) : null);
          } else {
            usage2.fail(__n("Not enough non-option arguments: got %s, need at least %s", "Not enough non-option arguments: got %s, need at least %s", _s, _s.toString(), demandedCommands._.min.toString()));
          }
        } else if (_s > demandedCommands._.max) {
          if (demandedCommands._.maxMsg !== void 0) {
            usage2.fail(demandedCommands._.maxMsg ? demandedCommands._.maxMsg.replace(/\$0/g, _s.toString()).replace(/\$1/, demandedCommands._.max.toString()) : null);
          } else {
            usage2.fail(__n("Too many non-option arguments: got %s, maximum of %s", "Too many non-option arguments: got %s, maximum of %s", _s, _s.toString(), demandedCommands._.max.toString()));
          }
        }
      }
    };
    self.positionalCount = function positionalCount(required, observed) {
      if (observed < required) {
        usage2.fail(__n("Not enough non-option arguments: got %s, need at least %s", "Not enough non-option arguments: got %s, need at least %s", observed, observed + "", required + ""));
      }
    };
    self.requiredArguments = function requiredArguments(argv, demandedOptions) {
      let missing = null;
      for (const key of Object.keys(demandedOptions)) {
        if (!Object.prototype.hasOwnProperty.call(argv, key) || typeof argv[key] === "undefined") {
          missing = missing || {};
          missing[key] = demandedOptions[key];
        }
      }
      if (missing) {
        const customMsgs = [];
        for (const key of Object.keys(missing)) {
          const msg = missing[key];
          if (msg && customMsgs.indexOf(msg) < 0) {
            customMsgs.push(msg);
          }
        }
        const customMsg = customMsgs.length ? `
${customMsgs.join("\n")}` : "";
        usage2.fail(__n("Missing required argument: %s", "Missing required arguments: %s", Object.keys(missing).length, Object.keys(missing).join(", ") + customMsg));
      }
    };
    self.unknownArguments = function unknownArguments(argv, aliases, positionalMap, isDefaultCommand, checkPositionals = true) {
      var _a2;
      const commandKeys = yargs.getInternalMethods().getCommandInstance().getCommands();
      const unknown = [];
      const currentContext = yargs.getInternalMethods().getContext();
      Object.keys(argv).forEach((key) => {
        if (!specialKeys.includes(key) && !Object.prototype.hasOwnProperty.call(positionalMap, key) && !Object.prototype.hasOwnProperty.call(yargs.getInternalMethods().getParseContext(), key) && !self.isValidAndSomeAliasIsNotNew(key, aliases)) {
          unknown.push(key);
        }
      });
      if (checkPositionals && (currentContext.commands.length > 0 || commandKeys.length > 0 || isDefaultCommand)) {
        argv._.slice(currentContext.commands.length).forEach((key) => {
          if (!commandKeys.includes("" + key)) {
            unknown.push("" + key);
          }
        });
      }
      if (checkPositionals) {
        const demandedCommands = yargs.getDemandedCommands();
        const maxNonOptDemanded = ((_a2 = demandedCommands._) === null || _a2 === void 0 ? void 0 : _a2.max) || 0;
        const expected = currentContext.commands.length + maxNonOptDemanded;
        if (expected < argv._.length) {
          argv._.slice(expected).forEach((key) => {
            key = String(key);
            if (!currentContext.commands.includes(key) && !unknown.includes(key)) {
              unknown.push(key);
            }
          });
        }
      }
      if (unknown.length) {
        usage2.fail(__n("Unknown argument: %s", "Unknown arguments: %s", unknown.length, unknown.map((s) => s.trim() ? s : `"${s}"`).join(", ")));
      }
    };
    self.unknownCommands = function unknownCommands(argv) {
      const commandKeys = yargs.getInternalMethods().getCommandInstance().getCommands();
      const unknown = [];
      const currentContext = yargs.getInternalMethods().getContext();
      if (currentContext.commands.length > 0 || commandKeys.length > 0) {
        argv._.slice(currentContext.commands.length).forEach((key) => {
          if (!commandKeys.includes("" + key)) {
            unknown.push("" + key);
          }
        });
      }
      if (unknown.length > 0) {
        usage2.fail(__n("Unknown command: %s", "Unknown commands: %s", unknown.length, unknown.join(", ")));
        return true;
      } else {
        return false;
      }
    };
    self.isValidAndSomeAliasIsNotNew = function isValidAndSomeAliasIsNotNew(key, aliases) {
      if (!Object.prototype.hasOwnProperty.call(aliases, key)) {
        return false;
      }
      const newAliases = yargs.parsed.newAliases;
      return [key, ...aliases[key]].some((a) => !Object.prototype.hasOwnProperty.call(newAliases, a) || !newAliases[key]);
    };
    self.limitedChoices = function limitedChoices(argv) {
      const options = yargs.getOptions();
      const invalid = {};
      if (!Object.keys(options.choices).length)
        return;
      Object.keys(argv).forEach((key) => {
        if (specialKeys.indexOf(key) === -1 && Object.prototype.hasOwnProperty.call(options.choices, key)) {
          [].concat(argv[key]).forEach((value) => {
            if (options.choices[key].indexOf(value) === -1 && value !== void 0) {
              invalid[key] = (invalid[key] || []).concat(value);
            }
          });
        }
      });
      const invalidKeys = Object.keys(invalid);
      if (!invalidKeys.length)
        return;
      let msg = __("Invalid values:");
      invalidKeys.forEach((key) => {
        msg += `
  ${__("Argument: %s, Given: %s, Choices: %s", key, usage2.stringifiedValues(invalid[key]), usage2.stringifiedValues(options.choices[key]))}`;
      });
      usage2.fail(msg);
    };
    let implied = {};
    self.implies = function implies(key, value) {
      argsert("<string|object> [array|number|string]", [key, value], arguments.length);
      if (typeof key === "object") {
        Object.keys(key).forEach((k) => {
          self.implies(k, key[k]);
        });
      } else {
        yargs.global(key);
        if (!implied[key]) {
          implied[key] = [];
        }
        if (Array.isArray(value)) {
          value.forEach((i) => self.implies(key, i));
        } else {
          assertNotStrictEqual(value, void 0, shim3);
          implied[key].push(value);
        }
      }
    };
    self.getImplied = function getImplied() {
      return implied;
    };
    function keyExists(argv, val) {
      const num = Number(val);
      val = isNaN(num) ? val : num;
      if (typeof val === "number") {
        val = argv._.length >= val;
      } else if (val.match(/^--no-.+/)) {
        val = val.match(/^--no-(.+)/)[1];
        val = !Object.prototype.hasOwnProperty.call(argv, val);
      } else {
        val = Object.prototype.hasOwnProperty.call(argv, val);
      }
      return val;
    }
    self.implications = function implications(argv) {
      const implyFail = [];
      Object.keys(implied).forEach((key) => {
        const origKey = key;
        (implied[key] || []).forEach((value) => {
          let key2 = origKey;
          const origValue = value;
          key2 = keyExists(argv, key2);
          value = keyExists(argv, value);
          if (key2 && !value) {
            implyFail.push(` ${origKey} -> ${origValue}`);
          }
        });
      });
      if (implyFail.length) {
        let msg = `${__("Implications failed:")}
`;
        implyFail.forEach((value) => {
          msg += value;
        });
        usage2.fail(msg);
      }
    };
    let conflicting = {};
    self.conflicts = function conflicts(key, value) {
      argsert("<string|object> [array|string]", [key, value], arguments.length);
      if (typeof key === "object") {
        Object.keys(key).forEach((k) => {
          self.conflicts(k, key[k]);
        });
      } else {
        yargs.global(key);
        if (!conflicting[key]) {
          conflicting[key] = [];
        }
        if (Array.isArray(value)) {
          value.forEach((i) => self.conflicts(key, i));
        } else {
          conflicting[key].push(value);
        }
      }
    };
    self.getConflicting = () => conflicting;
    self.conflicting = function conflictingFn(argv) {
      Object.keys(argv).forEach((key) => {
        if (conflicting[key]) {
          conflicting[key].forEach((value) => {
            if (value && argv[key] !== void 0 && argv[value] !== void 0) {
              usage2.fail(__("Arguments %s and %s are mutually exclusive", key, value));
            }
          });
        }
      });
      if (yargs.getInternalMethods().getParserConfiguration()["strip-dashed"]) {
        Object.keys(conflicting).forEach((key) => {
          conflicting[key].forEach((value) => {
            if (value && argv[shim3.Parser.camelCase(key)] !== void 0 && argv[shim3.Parser.camelCase(value)] !== void 0) {
              usage2.fail(__("Arguments %s and %s are mutually exclusive", key, value));
            }
          });
        });
      }
    };
    self.recommendCommands = function recommendCommands(cmd, potentialCommands) {
      const threshold = 3;
      potentialCommands = potentialCommands.sort((a, b) => b.length - a.length);
      let recommended = null;
      let bestDistance = Infinity;
      for (let i = 0, candidate; (candidate = potentialCommands[i]) !== void 0; i++) {
        const d = levenshtein(cmd, candidate);
        if (d <= threshold && d < bestDistance) {
          bestDistance = d;
          recommended = candidate;
        }
      }
      if (recommended)
        usage2.fail(__("Did you mean %s?", recommended));
    };
    self.reset = function reset(localLookup) {
      implied = objFilter(implied, (k) => !localLookup[k]);
      conflicting = objFilter(conflicting, (k) => !localLookup[k]);
      return self;
    };
    const frozens = [];
    self.freeze = function freeze() {
      frozens.push({
        implied,
        conflicting
      });
    };
    self.unfreeze = function unfreeze() {
      const frozen = frozens.pop();
      assertNotStrictEqual(frozen, void 0, shim3);
      ({ implied, conflicting } = frozen);
    };
    return self;
  }

  // node_modules/yargs/build/lib/utils/apply-extends.js
  var previouslyVisitedConfigs = [];
  var shim2;
  function applyExtends(config, cwd, mergeExtends, _shim) {
    shim2 = _shim;
    let defaultConfig = {};
    if (Object.prototype.hasOwnProperty.call(config, "extends")) {
      if (typeof config.extends !== "string")
        return defaultConfig;
      const isPath = /\.json|\..*rc$/.test(config.extends);
      let pathToDefault = null;
      if (!isPath) {
        try {
          pathToDefault = __require.resolve(config.extends);
        } catch (_err) {
          return config;
        }
      } else {
        pathToDefault = getPathToDefaultConfig(cwd, config.extends);
      }
      checkForCircularExtends(pathToDefault);
      previouslyVisitedConfigs.push(pathToDefault);
      defaultConfig = isPath ? JSON.parse(shim2.readFileSync(pathToDefault, "utf8")) : __require(config.extends);
      delete config.extends;
      defaultConfig = applyExtends(defaultConfig, shim2.path.dirname(pathToDefault), mergeExtends, shim2);
    }
    previouslyVisitedConfigs = [];
    return mergeExtends ? mergeDeep(defaultConfig, config) : Object.assign({}, defaultConfig, config);
  }
  function checkForCircularExtends(cfgPath) {
    if (previouslyVisitedConfigs.indexOf(cfgPath) > -1) {
      throw new YError(`Circular extended configurations: '${cfgPath}'.`);
    }
  }
  function getPathToDefaultConfig(cwd, pathToExtend) {
    return shim2.path.resolve(cwd, pathToExtend);
  }
  function mergeDeep(config1, config2) {
    const target = {};
    function isObject(obj) {
      return obj && typeof obj === "object" && !Array.isArray(obj);
    }
    Object.assign(target, config1);
    for (const key of Object.keys(config2)) {
      if (isObject(config2[key]) && isObject(target[key])) {
        target[key] = mergeDeep(config1[key], config2[key]);
      } else {
        target[key] = config2[key];
      }
    }
    return target;
  }

  // node_modules/yargs/build/lib/yargs-factory.js
  var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _YargsInstance_command;
  var _YargsInstance_cwd;
  var _YargsInstance_context;
  var _YargsInstance_completion;
  var _YargsInstance_completionCommand;
  var _YargsInstance_defaultShowHiddenOpt;
  var _YargsInstance_exitError;
  var _YargsInstance_detectLocale;
  var _YargsInstance_emittedWarnings;
  var _YargsInstance_exitProcess;
  var _YargsInstance_frozens;
  var _YargsInstance_globalMiddleware;
  var _YargsInstance_groups;
  var _YargsInstance_hasOutput;
  var _YargsInstance_helpOpt;
  var _YargsInstance_isGlobalContext;
  var _YargsInstance_logger;
  var _YargsInstance_output;
  var _YargsInstance_options;
  var _YargsInstance_parentRequire;
  var _YargsInstance_parserConfig;
  var _YargsInstance_parseFn;
  var _YargsInstance_parseContext;
  var _YargsInstance_pkgs;
  var _YargsInstance_preservedGroups;
  var _YargsInstance_processArgs;
  var _YargsInstance_recommendCommands;
  var _YargsInstance_shim;
  var _YargsInstance_strict;
  var _YargsInstance_strictCommands;
  var _YargsInstance_strictOptions;
  var _YargsInstance_usage;
  var _YargsInstance_usageConfig;
  var _YargsInstance_versionOpt;
  var _YargsInstance_validation;
  function YargsFactory(_shim) {
    return (processArgs = [], cwd = _shim.process.cwd(), parentRequire) => {
      const yargs = new YargsInstance(processArgs, cwd, parentRequire, _shim);
      Object.defineProperty(yargs, "argv", {
        get: () => {
          return yargs.parse();
        },
        enumerable: true
      });
      yargs.help();
      yargs.version();
      return yargs;
    };
  }
  var kCopyDoubleDash = Symbol("copyDoubleDash");
  var kCreateLogger = Symbol("copyDoubleDash");
  var kDeleteFromParserHintObject = Symbol("deleteFromParserHintObject");
  var kEmitWarning = Symbol("emitWarning");
  var kFreeze = Symbol("freeze");
  var kGetDollarZero = Symbol("getDollarZero");
  var kGetParserConfiguration = Symbol("getParserConfiguration");
  var kGetUsageConfiguration = Symbol("getUsageConfiguration");
  var kGuessLocale = Symbol("guessLocale");
  var kGuessVersion = Symbol("guessVersion");
  var kParsePositionalNumbers = Symbol("parsePositionalNumbers");
  var kPkgUp = Symbol("pkgUp");
  var kPopulateParserHintArray = Symbol("populateParserHintArray");
  var kPopulateParserHintSingleValueDictionary = Symbol("populateParserHintSingleValueDictionary");
  var kPopulateParserHintArrayDictionary = Symbol("populateParserHintArrayDictionary");
  var kPopulateParserHintDictionary = Symbol("populateParserHintDictionary");
  var kSanitizeKey = Symbol("sanitizeKey");
  var kSetKey = Symbol("setKey");
  var kUnfreeze = Symbol("unfreeze");
  var kValidateAsync = Symbol("validateAsync");
  var kGetCommandInstance = Symbol("getCommandInstance");
  var kGetContext = Symbol("getContext");
  var kGetHasOutput = Symbol("getHasOutput");
  var kGetLoggerInstance = Symbol("getLoggerInstance");
  var kGetParseContext = Symbol("getParseContext");
  var kGetUsageInstance = Symbol("getUsageInstance");
  var kGetValidationInstance = Symbol("getValidationInstance");
  var kHasParseCallback = Symbol("hasParseCallback");
  var kIsGlobalContext = Symbol("isGlobalContext");
  var kPostProcess = Symbol("postProcess");
  var kRebase = Symbol("rebase");
  var kReset = Symbol("reset");
  var kRunYargsParserAndExecuteCommands = Symbol("runYargsParserAndExecuteCommands");
  var kRunValidation = Symbol("runValidation");
  var kSetHasOutput = Symbol("setHasOutput");
  var kTrackManuallySetKeys = Symbol("kTrackManuallySetKeys");
  var YargsInstance = class {
    constructor(processArgs = [], cwd, parentRequire, shim3) {
      this.customScriptName = false;
      this.parsed = false;
      _YargsInstance_command.set(this, void 0);
      _YargsInstance_cwd.set(this, void 0);
      _YargsInstance_context.set(this, { commands: [], fullCommands: [] });
      _YargsInstance_completion.set(this, null);
      _YargsInstance_completionCommand.set(this, null);
      _YargsInstance_defaultShowHiddenOpt.set(this, "show-hidden");
      _YargsInstance_exitError.set(this, null);
      _YargsInstance_detectLocale.set(this, true);
      _YargsInstance_emittedWarnings.set(this, {});
      _YargsInstance_exitProcess.set(this, true);
      _YargsInstance_frozens.set(this, []);
      _YargsInstance_globalMiddleware.set(this, void 0);
      _YargsInstance_groups.set(this, {});
      _YargsInstance_hasOutput.set(this, false);
      _YargsInstance_helpOpt.set(this, null);
      _YargsInstance_isGlobalContext.set(this, true);
      _YargsInstance_logger.set(this, void 0);
      _YargsInstance_output.set(this, "");
      _YargsInstance_options.set(this, void 0);
      _YargsInstance_parentRequire.set(this, void 0);
      _YargsInstance_parserConfig.set(this, {});
      _YargsInstance_parseFn.set(this, null);
      _YargsInstance_parseContext.set(this, null);
      _YargsInstance_pkgs.set(this, {});
      _YargsInstance_preservedGroups.set(this, {});
      _YargsInstance_processArgs.set(this, void 0);
      _YargsInstance_recommendCommands.set(this, false);
      _YargsInstance_shim.set(this, void 0);
      _YargsInstance_strict.set(this, false);
      _YargsInstance_strictCommands.set(this, false);
      _YargsInstance_strictOptions.set(this, false);
      _YargsInstance_usage.set(this, void 0);
      _YargsInstance_usageConfig.set(this, {});
      _YargsInstance_versionOpt.set(this, null);
      _YargsInstance_validation.set(this, void 0);
      __classPrivateFieldSet(this, _YargsInstance_shim, shim3, "f");
      __classPrivateFieldSet(this, _YargsInstance_processArgs, processArgs, "f");
      __classPrivateFieldSet(this, _YargsInstance_cwd, cwd, "f");
      __classPrivateFieldSet(this, _YargsInstance_parentRequire, parentRequire, "f");
      __classPrivateFieldSet(this, _YargsInstance_globalMiddleware, new GlobalMiddleware(this), "f");
      this.$0 = this[kGetDollarZero]();
      this[kReset]();
      __classPrivateFieldSet(this, _YargsInstance_command, __classPrivateFieldGet(this, _YargsInstance_command, "f"), "f");
      __classPrivateFieldSet(this, _YargsInstance_usage, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), "f");
      __classPrivateFieldSet(this, _YargsInstance_validation, __classPrivateFieldGet(this, _YargsInstance_validation, "f"), "f");
      __classPrivateFieldSet(this, _YargsInstance_options, __classPrivateFieldGet(this, _YargsInstance_options, "f"), "f");
      __classPrivateFieldGet(this, _YargsInstance_options, "f").showHiddenOpt = __classPrivateFieldGet(this, _YargsInstance_defaultShowHiddenOpt, "f");
      __classPrivateFieldSet(this, _YargsInstance_logger, this[kCreateLogger](), "f");
    }
    addHelpOpt(opt, msg) {
      const defaultHelpOpt = "help";
      argsert("[string|boolean] [string]", [opt, msg], arguments.length);
      if (__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")) {
        this[kDeleteFromParserHintObject](__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"));
        __classPrivateFieldSet(this, _YargsInstance_helpOpt, null, "f");
      }
      if (opt === false && msg === void 0)
        return this;
      __classPrivateFieldSet(this, _YargsInstance_helpOpt, typeof opt === "string" ? opt : defaultHelpOpt, "f");
      this.boolean(__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"));
      this.describe(__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"), msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup("Show help"));
      return this;
    }
    help(opt, msg) {
      return this.addHelpOpt(opt, msg);
    }
    addShowHiddenOpt(opt, msg) {
      argsert("[string|boolean] [string]", [opt, msg], arguments.length);
      if (opt === false && msg === void 0)
        return this;
      const showHiddenOpt = typeof opt === "string" ? opt : __classPrivateFieldGet(this, _YargsInstance_defaultShowHiddenOpt, "f");
      this.boolean(showHiddenOpt);
      this.describe(showHiddenOpt, msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup("Show hidden options"));
      __classPrivateFieldGet(this, _YargsInstance_options, "f").showHiddenOpt = showHiddenOpt;
      return this;
    }
    showHidden(opt, msg) {
      return this.addShowHiddenOpt(opt, msg);
    }
    alias(key, value) {
      argsert("<object|string|array> [string|array]", [key, value], arguments.length);
      this[kPopulateParserHintArrayDictionary](this.alias.bind(this), "alias", key, value);
      return this;
    }
    array(keys) {
      argsert("<array|string>", [keys], arguments.length);
      this[kPopulateParserHintArray]("array", keys);
      this[kTrackManuallySetKeys](keys);
      return this;
    }
    boolean(keys) {
      argsert("<array|string>", [keys], arguments.length);
      this[kPopulateParserHintArray]("boolean", keys);
      this[kTrackManuallySetKeys](keys);
      return this;
    }
    check(f, global) {
      argsert("<function> [boolean]", [f, global], arguments.length);
      this.middleware((argv, _yargs) => {
        return maybeAsyncResult(() => {
          return f(argv, _yargs.getOptions());
        }, (result) => {
          if (!result) {
            __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(__classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.__("Argument check failed: %s", f.toString()));
          } else if (typeof result === "string" || result instanceof Error) {
            __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(result.toString(), result);
          }
          return argv;
        }, (err) => {
          __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(err.message ? err.message : err.toString(), err);
          return argv;
        });
      }, false, global);
      return this;
    }
    choices(key, value) {
      argsert("<object|string|array> [string|array]", [key, value], arguments.length);
      this[kPopulateParserHintArrayDictionary](this.choices.bind(this), "choices", key, value);
      return this;
    }
    coerce(keys, value) {
      argsert("<object|string|array> [function]", [keys, value], arguments.length);
      if (Array.isArray(keys)) {
        if (!value) {
          throw new YError("coerce callback must be provided");
        }
        for (const key of keys) {
          this.coerce(key, value);
        }
        return this;
      } else if (typeof keys === "object") {
        for (const key of Object.keys(keys)) {
          this.coerce(key, keys[key]);
        }
        return this;
      }
      if (!value) {
        throw new YError("coerce callback must be provided");
      }
      __classPrivateFieldGet(this, _YargsInstance_options, "f").key[keys] = true;
      __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").addCoerceMiddleware((argv, yargs) => {
        let aliases;
        const shouldCoerce = Object.prototype.hasOwnProperty.call(argv, keys);
        if (!shouldCoerce) {
          return argv;
        }
        return maybeAsyncResult(() => {
          aliases = yargs.getAliases();
          return value(argv[keys]);
        }, (result) => {
          argv[keys] = result;
          const stripAliased = yargs.getInternalMethods().getParserConfiguration()["strip-aliased"];
          if (aliases[keys] && stripAliased !== true) {
            for (const alias of aliases[keys]) {
              argv[alias] = result;
            }
          }
          return argv;
        }, (err) => {
          throw new YError(err.message);
        });
      }, keys);
      return this;
    }
    conflicts(key1, key2) {
      argsert("<string|object> [string|array]", [key1, key2], arguments.length);
      __classPrivateFieldGet(this, _YargsInstance_validation, "f").conflicts(key1, key2);
      return this;
    }
    config(key = "config", msg, parseFn) {
      argsert("[object|string] [string|function] [function]", [key, msg, parseFn], arguments.length);
      if (typeof key === "object" && !Array.isArray(key)) {
        key = applyExtends(key, __classPrivateFieldGet(this, _YargsInstance_cwd, "f"), this[kGetParserConfiguration]()["deep-merge-config"] || false, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
        __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = (__classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || []).concat(key);
        return this;
      }
      if (typeof msg === "function") {
        parseFn = msg;
        msg = void 0;
      }
      this.describe(key, msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup("Path to JSON config file"));
      (Array.isArray(key) ? key : [key]).forEach((k) => {
        __classPrivateFieldGet(this, _YargsInstance_options, "f").config[k] = parseFn || true;
      });
      return this;
    }
    completion(cmd, desc, fn) {
      argsert("[string] [string|boolean|function] [function]", [cmd, desc, fn], arguments.length);
      if (typeof desc === "function") {
        fn = desc;
        desc = void 0;
      }
      __classPrivateFieldSet(this, _YargsInstance_completionCommand, cmd || __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") || "completion", "f");
      if (!desc && desc !== false) {
        desc = "generate completion script";
      }
      this.command(__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f"), desc);
      if (fn)
        __classPrivateFieldGet(this, _YargsInstance_completion, "f").registerFunction(fn);
      return this;
    }
    command(cmd, description, builder, handler, middlewares, deprecated) {
      argsert("<string|array|object> [string|boolean] [function|object] [function] [array] [boolean|string]", [cmd, description, builder, handler, middlewares, deprecated], arguments.length);
      __classPrivateFieldGet(this, _YargsInstance_command, "f").addHandler(cmd, description, builder, handler, middlewares, deprecated);
      return this;
    }
    commands(cmd, description, builder, handler, middlewares, deprecated) {
      return this.command(cmd, description, builder, handler, middlewares, deprecated);
    }
    commandDir(dir, opts2) {
      argsert("<string> [object]", [dir, opts2], arguments.length);
      const req = __classPrivateFieldGet(this, _YargsInstance_parentRequire, "f") || __classPrivateFieldGet(this, _YargsInstance_shim, "f").require;
      __classPrivateFieldGet(this, _YargsInstance_command, "f").addDirectory(dir, req, __classPrivateFieldGet(this, _YargsInstance_shim, "f").getCallerFile(), opts2);
      return this;
    }
    count(keys) {
      argsert("<array|string>", [keys], arguments.length);
      this[kPopulateParserHintArray]("count", keys);
      this[kTrackManuallySetKeys](keys);
      return this;
    }
    default(key, value, defaultDescription) {
      argsert("<object|string|array> [*] [string]", [key, value, defaultDescription], arguments.length);
      if (defaultDescription) {
        assertSingleKey(key, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
        __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key] = defaultDescription;
      }
      if (typeof value === "function") {
        assertSingleKey(key, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
        if (!__classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key])
          __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key] = __classPrivateFieldGet(this, _YargsInstance_usage, "f").functionDescription(value);
        value = value.call();
      }
      this[kPopulateParserHintSingleValueDictionary](this.default.bind(this), "default", key, value);
      return this;
    }
    defaults(key, value, defaultDescription) {
      return this.default(key, value, defaultDescription);
    }
    demandCommand(min = 1, max, minMsg, maxMsg) {
      argsert("[number] [number|string] [string|null|undefined] [string|null|undefined]", [min, max, minMsg, maxMsg], arguments.length);
      if (typeof max !== "number") {
        minMsg = max;
        max = Infinity;
      }
      this.global("_", false);
      __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedCommands._ = {
        min,
        max,
        minMsg,
        maxMsg
      };
      return this;
    }
    demand(keys, max, msg) {
      if (Array.isArray(max)) {
        max.forEach((key) => {
          assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
          this.demandOption(key, msg);
        });
        max = Infinity;
      } else if (typeof max !== "number") {
        msg = max;
        max = Infinity;
      }
      if (typeof keys === "number") {
        assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
        this.demandCommand(keys, max, msg, msg);
      } else if (Array.isArray(keys)) {
        keys.forEach((key) => {
          assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
          this.demandOption(key, msg);
        });
      } else {
        if (typeof msg === "string") {
          this.demandOption(keys, msg);
        } else if (msg === true || typeof msg === "undefined") {
          this.demandOption(keys);
        }
      }
      return this;
    }
    demandOption(keys, msg) {
      argsert("<object|string|array> [string]", [keys, msg], arguments.length);
      this[kPopulateParserHintSingleValueDictionary](this.demandOption.bind(this), "demandedOptions", keys, msg);
      return this;
    }
    deprecateOption(option, message) {
      argsert("<string> [string|boolean]", [option, message], arguments.length);
      __classPrivateFieldGet(this, _YargsInstance_options, "f").deprecatedOptions[option] = message;
      return this;
    }
    describe(keys, description) {
      argsert("<object|string|array> [string]", [keys, description], arguments.length);
      this[kSetKey](keys, true);
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").describe(keys, description);
      return this;
    }
    detectLocale(detect) {
      argsert("<boolean>", [detect], arguments.length);
      __classPrivateFieldSet(this, _YargsInstance_detectLocale, detect, "f");
      return this;
    }
    env(prefix) {
      argsert("[string|boolean]", [prefix], arguments.length);
      if (prefix === false)
        delete __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix;
      else
        __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix = prefix || "";
      return this;
    }
    epilogue(msg) {
      argsert("<string>", [msg], arguments.length);
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").epilog(msg);
      return this;
    }
    epilog(msg) {
      return this.epilogue(msg);
    }
    example(cmd, description) {
      argsert("<string|array> [string]", [cmd, description], arguments.length);
      if (Array.isArray(cmd)) {
        cmd.forEach((exampleParams) => this.example(...exampleParams));
      } else {
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").example(cmd, description);
      }
      return this;
    }
    exit(code2, err) {
      __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
      __classPrivateFieldSet(this, _YargsInstance_exitError, err, "f");
      if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
        __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.exit(code2);
    }
    exitProcess(enabled = true) {
      argsert("[boolean]", [enabled], arguments.length);
      __classPrivateFieldSet(this, _YargsInstance_exitProcess, enabled, "f");
      return this;
    }
    fail(f) {
      argsert("<function|boolean>", [f], arguments.length);
      if (typeof f === "boolean" && f !== false) {
        throw new YError("Invalid first argument. Expected function or boolean 'false'");
      }
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").failFn(f);
      return this;
    }
    getAliases() {
      return this.parsed ? this.parsed.aliases : {};
    }
    async getCompletion(args, done) {
      argsert("<array> [function]", [args, done], arguments.length);
      if (!done) {
        return new Promise((resolve10, reject) => {
          __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(args, (err, completions) => {
            if (err)
              reject(err);
            else
              resolve10(completions);
          });
        });
      } else {
        return __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(args, done);
      }
    }
    getDemandedOptions() {
      argsert([], 0);
      return __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedOptions;
    }
    getDemandedCommands() {
      argsert([], 0);
      return __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedCommands;
    }
    getDeprecatedOptions() {
      argsert([], 0);
      return __classPrivateFieldGet(this, _YargsInstance_options, "f").deprecatedOptions;
    }
    getDetectLocale() {
      return __classPrivateFieldGet(this, _YargsInstance_detectLocale, "f");
    }
    getExitProcess() {
      return __classPrivateFieldGet(this, _YargsInstance_exitProcess, "f");
    }
    getGroups() {
      return Object.assign({}, __classPrivateFieldGet(this, _YargsInstance_groups, "f"), __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f"));
    }
    getHelp() {
      __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
      if (!__classPrivateFieldGet(this, _YargsInstance_usage, "f").hasCachedHelpMessage()) {
        if (!this.parsed) {
          const parse6 = this[kRunYargsParserAndExecuteCommands](__classPrivateFieldGet(this, _YargsInstance_processArgs, "f"), void 0, void 0, 0, true);
          if (isPromise(parse6)) {
            return parse6.then(() => {
              return __classPrivateFieldGet(this, _YargsInstance_usage, "f").help();
            });
          }
        }
        const builderResponse = __classPrivateFieldGet(this, _YargsInstance_command, "f").runDefaultBuilderOn(this);
        if (isPromise(builderResponse)) {
          return builderResponse.then(() => {
            return __classPrivateFieldGet(this, _YargsInstance_usage, "f").help();
          });
        }
      }
      return Promise.resolve(__classPrivateFieldGet(this, _YargsInstance_usage, "f").help());
    }
    getOptions() {
      return __classPrivateFieldGet(this, _YargsInstance_options, "f");
    }
    getStrict() {
      return __classPrivateFieldGet(this, _YargsInstance_strict, "f");
    }
    getStrictCommands() {
      return __classPrivateFieldGet(this, _YargsInstance_strictCommands, "f");
    }
    getStrictOptions() {
      return __classPrivateFieldGet(this, _YargsInstance_strictOptions, "f");
    }
    global(globals, global) {
      argsert("<string|array> [boolean]", [globals, global], arguments.length);
      globals = [].concat(globals);
      if (global !== false) {
        __classPrivateFieldGet(this, _YargsInstance_options, "f").local = __classPrivateFieldGet(this, _YargsInstance_options, "f").local.filter((l) => globals.indexOf(l) === -1);
      } else {
        globals.forEach((g) => {
          if (!__classPrivateFieldGet(this, _YargsInstance_options, "f").local.includes(g))
            __classPrivateFieldGet(this, _YargsInstance_options, "f").local.push(g);
        });
      }
      return this;
    }
    group(opts2, groupName) {
      argsert("<string|array> <string>", [opts2, groupName], arguments.length);
      const existing = __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName] || __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName];
      if (__classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName]) {
        delete __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName];
      }
      const seen = {};
      __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName] = (existing || []).concat(opts2).filter((key) => {
        if (seen[key])
          return false;
        return seen[key] = true;
      });
      return this;
    }
    hide(key) {
      argsert("<string>", [key], arguments.length);
      __classPrivateFieldGet(this, _YargsInstance_options, "f").hiddenOptions.push(key);
      return this;
    }
    implies(key, value) {
      argsert("<string|object> [number|string|array]", [key, value], arguments.length);
      __classPrivateFieldGet(this, _YargsInstance_validation, "f").implies(key, value);
      return this;
    }
    locale(locale) {
      argsert("[string]", [locale], arguments.length);
      if (locale === void 0) {
        this[kGuessLocale]();
        return __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.getLocale();
      }
      __classPrivateFieldSet(this, _YargsInstance_detectLocale, false, "f");
      __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.setLocale(locale);
      return this;
    }
    middleware(callback, applyBeforeValidation, global) {
      return __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").addMiddleware(callback, !!applyBeforeValidation, global);
    }
    nargs(key, value) {
      argsert("<string|object|array> [number]", [key, value], arguments.length);
      this[kPopulateParserHintSingleValueDictionary](this.nargs.bind(this), "narg", key, value);
      return this;
    }
    normalize(keys) {
      argsert("<array|string>", [keys], arguments.length);
      this[kPopulateParserHintArray]("normalize", keys);
      return this;
    }
    number(keys) {
      argsert("<array|string>", [keys], arguments.length);
      this[kPopulateParserHintArray]("number", keys);
      this[kTrackManuallySetKeys](keys);
      return this;
    }
    option(key, opt) {
      argsert("<string|object> [object]", [key, opt], arguments.length);
      if (typeof key === "object") {
        Object.keys(key).forEach((k) => {
          this.options(k, key[k]);
        });
      } else {
        if (typeof opt !== "object") {
          opt = {};
        }
        this[kTrackManuallySetKeys](key);
        if (__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f") && (key === "version" || (opt === null || opt === void 0 ? void 0 : opt.alias) === "version")) {
          this[kEmitWarning]([
            '"version" is a reserved word.',
            "Please do one of the following:",
            '- Disable version with `yargs.version(false)` if using "version" as an option',
            "- Use the built-in `yargs.version` method instead (if applicable)",
            "- Use a different option key",
            "https://yargs.js.org/docs/#api-reference-version"
          ].join("\n"), void 0, "versionWarning");
        }
        __classPrivateFieldGet(this, _YargsInstance_options, "f").key[key] = true;
        if (opt.alias)
          this.alias(key, opt.alias);
        const deprecate = opt.deprecate || opt.deprecated;
        if (deprecate) {
          this.deprecateOption(key, deprecate);
        }
        const demand = opt.demand || opt.required || opt.require;
        if (demand) {
          this.demand(key, demand);
        }
        if (opt.demandOption) {
          this.demandOption(key, typeof opt.demandOption === "string" ? opt.demandOption : void 0);
        }
        if (opt.conflicts) {
          this.conflicts(key, opt.conflicts);
        }
        if ("default" in opt) {
          this.default(key, opt.default);
        }
        if (opt.implies !== void 0) {
          this.implies(key, opt.implies);
        }
        if (opt.nargs !== void 0) {
          this.nargs(key, opt.nargs);
        }
        if (opt.config) {
          this.config(key, opt.configParser);
        }
        if (opt.normalize) {
          this.normalize(key);
        }
        if (opt.choices) {
          this.choices(key, opt.choices);
        }
        if (opt.coerce) {
          this.coerce(key, opt.coerce);
        }
        if (opt.group) {
          this.group(key, opt.group);
        }
        if (opt.boolean || opt.type === "boolean") {
          this.boolean(key);
          if (opt.alias)
            this.boolean(opt.alias);
        }
        if (opt.array || opt.type === "array") {
          this.array(key);
          if (opt.alias)
            this.array(opt.alias);
        }
        if (opt.number || opt.type === "number") {
          this.number(key);
          if (opt.alias)
            this.number(opt.alias);
        }
        if (opt.string || opt.type === "string") {
          this.string(key);
          if (opt.alias)
            this.string(opt.alias);
        }
        if (opt.count || opt.type === "count") {
          this.count(key);
        }
        if (typeof opt.global === "boolean") {
          this.global(key, opt.global);
        }
        if (opt.defaultDescription) {
          __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key] = opt.defaultDescription;
        }
        if (opt.skipValidation) {
          this.skipValidation(key);
        }
        const desc = opt.describe || opt.description || opt.desc;
        const descriptions = __classPrivateFieldGet(this, _YargsInstance_usage, "f").getDescriptions();
        if (!Object.prototype.hasOwnProperty.call(descriptions, key) || typeof desc === "string") {
          this.describe(key, desc);
        }
        if (opt.hidden) {
          this.hide(key);
        }
        if (opt.requiresArg) {
          this.requiresArg(key);
        }
      }
      return this;
    }
    options(key, opt) {
      return this.option(key, opt);
    }
    parse(args, shortCircuit, _parseFn) {
      argsert("[string|array] [function|boolean|object] [function]", [args, shortCircuit, _parseFn], arguments.length);
      this[kFreeze]();
      if (typeof args === "undefined") {
        args = __classPrivateFieldGet(this, _YargsInstance_processArgs, "f");
      }
      if (typeof shortCircuit === "object") {
        __classPrivateFieldSet(this, _YargsInstance_parseContext, shortCircuit, "f");
        shortCircuit = _parseFn;
      }
      if (typeof shortCircuit === "function") {
        __classPrivateFieldSet(this, _YargsInstance_parseFn, shortCircuit, "f");
        shortCircuit = false;
      }
      if (!shortCircuit)
        __classPrivateFieldSet(this, _YargsInstance_processArgs, args, "f");
      if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f"))
        __classPrivateFieldSet(this, _YargsInstance_exitProcess, false, "f");
      const parsed = this[kRunYargsParserAndExecuteCommands](args, !!shortCircuit);
      const tmpParsed = this.parsed;
      __classPrivateFieldGet(this, _YargsInstance_completion, "f").setParsed(this.parsed);
      if (isPromise(parsed)) {
        return parsed.then((argv) => {
          if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f"))
            __classPrivateFieldGet(this, _YargsInstance_parseFn, "f").call(this, __classPrivateFieldGet(this, _YargsInstance_exitError, "f"), argv, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
          return argv;
        }).catch((err) => {
          if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f")) {
            __classPrivateFieldGet(this, _YargsInstance_parseFn, "f")(err, this.parsed.argv, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
          }
          throw err;
        }).finally(() => {
          this[kUnfreeze]();
          this.parsed = tmpParsed;
        });
      } else {
        if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f"))
          __classPrivateFieldGet(this, _YargsInstance_parseFn, "f").call(this, __classPrivateFieldGet(this, _YargsInstance_exitError, "f"), parsed, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
        this[kUnfreeze]();
        this.parsed = tmpParsed;
      }
      return parsed;
    }
    parseAsync(args, shortCircuit, _parseFn) {
      const maybePromise = this.parse(args, shortCircuit, _parseFn);
      return !isPromise(maybePromise) ? Promise.resolve(maybePromise) : maybePromise;
    }
    parseSync(args, shortCircuit, _parseFn) {
      const maybePromise = this.parse(args, shortCircuit, _parseFn);
      if (isPromise(maybePromise)) {
        throw new YError(".parseSync() must not be used with asynchronous builders, handlers, or middleware");
      }
      return maybePromise;
    }
    parserConfiguration(config) {
      argsert("<object>", [config], arguments.length);
      __classPrivateFieldSet(this, _YargsInstance_parserConfig, config, "f");
      return this;
    }
    pkgConf(key, rootPath) {
      argsert("<string> [string]", [key, rootPath], arguments.length);
      let conf = null;
      const obj = this[kPkgUp](rootPath || __classPrivateFieldGet(this, _YargsInstance_cwd, "f"));
      if (obj[key] && typeof obj[key] === "object") {
        conf = applyExtends(obj[key], rootPath || __classPrivateFieldGet(this, _YargsInstance_cwd, "f"), this[kGetParserConfiguration]()["deep-merge-config"] || false, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
        __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = (__classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || []).concat(conf);
      }
      return this;
    }
    positional(key, opts2) {
      argsert("<string> <object>", [key, opts2], arguments.length);
      const supportedOpts = [
        "default",
        "defaultDescription",
        "implies",
        "normalize",
        "choices",
        "conflicts",
        "coerce",
        "type",
        "describe",
        "desc",
        "description",
        "alias"
      ];
      opts2 = objFilter(opts2, (k, v) => {
        if (k === "type" && !["string", "number", "boolean"].includes(v))
          return false;
        return supportedOpts.includes(k);
      });
      const fullCommand = __classPrivateFieldGet(this, _YargsInstance_context, "f").fullCommands[__classPrivateFieldGet(this, _YargsInstance_context, "f").fullCommands.length - 1];
      const parseOptions = fullCommand ? __classPrivateFieldGet(this, _YargsInstance_command, "f").cmdToParseOptions(fullCommand) : {
        array: [],
        alias: {},
        default: {},
        demand: {}
      };
      objectKeys(parseOptions).forEach((pk) => {
        const parseOption = parseOptions[pk];
        if (Array.isArray(parseOption)) {
          if (parseOption.indexOf(key) !== -1)
            opts2[pk] = true;
        } else {
          if (parseOption[key] && !(pk in opts2))
            opts2[pk] = parseOption[key];
        }
      });
      this.group(key, __classPrivateFieldGet(this, _YargsInstance_usage, "f").getPositionalGroupName());
      return this.option(key, opts2);
    }
    recommendCommands(recommend = true) {
      argsert("[boolean]", [recommend], arguments.length);
      __classPrivateFieldSet(this, _YargsInstance_recommendCommands, recommend, "f");
      return this;
    }
    required(keys, max, msg) {
      return this.demand(keys, max, msg);
    }
    require(keys, max, msg) {
      return this.demand(keys, max, msg);
    }
    requiresArg(keys) {
      argsert("<array|string|object> [number]", [keys], arguments.length);
      if (typeof keys === "string" && __classPrivateFieldGet(this, _YargsInstance_options, "f").narg[keys]) {
        return this;
      } else {
        this[kPopulateParserHintSingleValueDictionary](this.requiresArg.bind(this), "narg", keys, NaN);
      }
      return this;
    }
    showCompletionScript($0, cmd) {
      argsert("[string] [string]", [$0, cmd], arguments.length);
      $0 = $0 || this.$0;
      __classPrivateFieldGet(this, _YargsInstance_logger, "f").log(__classPrivateFieldGet(this, _YargsInstance_completion, "f").generateCompletionScript($0, cmd || __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") || "completion"));
      return this;
    }
    showHelp(level) {
      argsert("[string|function]", [level], arguments.length);
      __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
      if (!__classPrivateFieldGet(this, _YargsInstance_usage, "f").hasCachedHelpMessage()) {
        if (!this.parsed) {
          const parse6 = this[kRunYargsParserAndExecuteCommands](__classPrivateFieldGet(this, _YargsInstance_processArgs, "f"), void 0, void 0, 0, true);
          if (isPromise(parse6)) {
            parse6.then(() => {
              __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
            });
            return this;
          }
        }
        const builderResponse = __classPrivateFieldGet(this, _YargsInstance_command, "f").runDefaultBuilderOn(this);
        if (isPromise(builderResponse)) {
          builderResponse.then(() => {
            __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
          });
          return this;
        }
      }
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
      return this;
    }
    scriptName(scriptName) {
      this.customScriptName = true;
      this.$0 = scriptName;
      return this;
    }
    showHelpOnFail(enabled, message) {
      argsert("[boolean|string] [string]", [enabled, message], arguments.length);
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelpOnFail(enabled, message);
      return this;
    }
    showVersion(level) {
      argsert("[string|function]", [level], arguments.length);
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").showVersion(level);
      return this;
    }
    skipValidation(keys) {
      argsert("<array|string>", [keys], arguments.length);
      this[kPopulateParserHintArray]("skipValidation", keys);
      return this;
    }
    strict(enabled) {
      argsert("[boolean]", [enabled], arguments.length);
      __classPrivateFieldSet(this, _YargsInstance_strict, enabled !== false, "f");
      return this;
    }
    strictCommands(enabled) {
      argsert("[boolean]", [enabled], arguments.length);
      __classPrivateFieldSet(this, _YargsInstance_strictCommands, enabled !== false, "f");
      return this;
    }
    strictOptions(enabled) {
      argsert("[boolean]", [enabled], arguments.length);
      __classPrivateFieldSet(this, _YargsInstance_strictOptions, enabled !== false, "f");
      return this;
    }
    string(keys) {
      argsert("<array|string>", [keys], arguments.length);
      this[kPopulateParserHintArray]("string", keys);
      this[kTrackManuallySetKeys](keys);
      return this;
    }
    terminalWidth() {
      argsert([], 0);
      return __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.stdColumns;
    }
    updateLocale(obj) {
      return this.updateStrings(obj);
    }
    updateStrings(obj) {
      argsert("<object>", [obj], arguments.length);
      __classPrivateFieldSet(this, _YargsInstance_detectLocale, false, "f");
      __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.updateLocale(obj);
      return this;
    }
    usage(msg, description, builder, handler) {
      argsert("<string|null|undefined> [string|boolean] [function|object] [function]", [msg, description, builder, handler], arguments.length);
      if (description !== void 0) {
        assertNotStrictEqual(msg, null, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
        if ((msg || "").match(/^\$0( |$)/)) {
          return this.command(msg, description, builder, handler);
        } else {
          throw new YError(".usage() description must start with $0 if being used as alias for .command()");
        }
      } else {
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").usage(msg);
        return this;
      }
    }
    usageConfiguration(config) {
      argsert("<object>", [config], arguments.length);
      __classPrivateFieldSet(this, _YargsInstance_usageConfig, config, "f");
      return this;
    }
    version(opt, msg, ver) {
      const defaultVersionOpt = "version";
      argsert("[boolean|string] [string] [string]", [opt, msg, ver], arguments.length);
      if (__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f")) {
        this[kDeleteFromParserHintObject](__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"));
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").version(void 0);
        __classPrivateFieldSet(this, _YargsInstance_versionOpt, null, "f");
      }
      if (arguments.length === 0) {
        ver = this[kGuessVersion]();
        opt = defaultVersionOpt;
      } else if (arguments.length === 1) {
        if (opt === false) {
          return this;
        }
        ver = opt;
        opt = defaultVersionOpt;
      } else if (arguments.length === 2) {
        ver = msg;
        msg = void 0;
      }
      __classPrivateFieldSet(this, _YargsInstance_versionOpt, typeof opt === "string" ? opt : defaultVersionOpt, "f");
      msg = msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup("Show version number");
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").version(ver || void 0);
      this.boolean(__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"));
      this.describe(__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"), msg);
      return this;
    }
    wrap(cols) {
      argsert("<number|null|undefined>", [cols], arguments.length);
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").wrap(cols);
      return this;
    }
    [(_YargsInstance_command = /* @__PURE__ */ new WeakMap(), _YargsInstance_cwd = /* @__PURE__ */ new WeakMap(), _YargsInstance_context = /* @__PURE__ */ new WeakMap(), _YargsInstance_completion = /* @__PURE__ */ new WeakMap(), _YargsInstance_completionCommand = /* @__PURE__ */ new WeakMap(), _YargsInstance_defaultShowHiddenOpt = /* @__PURE__ */ new WeakMap(), _YargsInstance_exitError = /* @__PURE__ */ new WeakMap(), _YargsInstance_detectLocale = /* @__PURE__ */ new WeakMap(), _YargsInstance_emittedWarnings = /* @__PURE__ */ new WeakMap(), _YargsInstance_exitProcess = /* @__PURE__ */ new WeakMap(), _YargsInstance_frozens = /* @__PURE__ */ new WeakMap(), _YargsInstance_globalMiddleware = /* @__PURE__ */ new WeakMap(), _YargsInstance_groups = /* @__PURE__ */ new WeakMap(), _YargsInstance_hasOutput = /* @__PURE__ */ new WeakMap(), _YargsInstance_helpOpt = /* @__PURE__ */ new WeakMap(), _YargsInstance_isGlobalContext = /* @__PURE__ */ new WeakMap(), _YargsInstance_logger = /* @__PURE__ */ new WeakMap(), _YargsInstance_output = /* @__PURE__ */ new WeakMap(), _YargsInstance_options = /* @__PURE__ */ new WeakMap(), _YargsInstance_parentRequire = /* @__PURE__ */ new WeakMap(), _YargsInstance_parserConfig = /* @__PURE__ */ new WeakMap(), _YargsInstance_parseFn = /* @__PURE__ */ new WeakMap(), _YargsInstance_parseContext = /* @__PURE__ */ new WeakMap(), _YargsInstance_pkgs = /* @__PURE__ */ new WeakMap(), _YargsInstance_preservedGroups = /* @__PURE__ */ new WeakMap(), _YargsInstance_processArgs = /* @__PURE__ */ new WeakMap(), _YargsInstance_recommendCommands = /* @__PURE__ */ new WeakMap(), _YargsInstance_shim = /* @__PURE__ */ new WeakMap(), _YargsInstance_strict = /* @__PURE__ */ new WeakMap(), _YargsInstance_strictCommands = /* @__PURE__ */ new WeakMap(), _YargsInstance_strictOptions = /* @__PURE__ */ new WeakMap(), _YargsInstance_usage = /* @__PURE__ */ new WeakMap(), _YargsInstance_usageConfig = /* @__PURE__ */ new WeakMap(), _YargsInstance_versionOpt = /* @__PURE__ */ new WeakMap(), _YargsInstance_validation = /* @__PURE__ */ new WeakMap(), kCopyDoubleDash)](argv) {
      if (!argv._ || !argv["--"])
        return argv;
      argv._.push.apply(argv._, argv["--"]);
      try {
        delete argv["--"];
      } catch (_err) {
      }
      return argv;
    }
    [kCreateLogger]() {
      return {
        log: (...args) => {
          if (!this[kHasParseCallback]())
            console.log(...args);
          __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
          if (__classPrivateFieldGet(this, _YargsInstance_output, "f").length)
            __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + "\n", "f");
          __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + args.join(" "), "f");
        },
        error: (...args) => {
          if (!this[kHasParseCallback]())
            console.error(...args);
          __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
          if (__classPrivateFieldGet(this, _YargsInstance_output, "f").length)
            __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + "\n", "f");
          __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + args.join(" "), "f");
        }
      };
    }
    [kDeleteFromParserHintObject](optionKey) {
      objectKeys(__classPrivateFieldGet(this, _YargsInstance_options, "f")).forEach((hintKey) => {
        if (/* @__PURE__ */ ((key) => key === "configObjects")(hintKey))
          return;
        const hint = __classPrivateFieldGet(this, _YargsInstance_options, "f")[hintKey];
        if (Array.isArray(hint)) {
          if (hint.includes(optionKey))
            hint.splice(hint.indexOf(optionKey), 1);
        } else if (typeof hint === "object") {
          delete hint[optionKey];
        }
      });
      delete __classPrivateFieldGet(this, _YargsInstance_usage, "f").getDescriptions()[optionKey];
    }
    [kEmitWarning](warning, type, deduplicationId) {
      if (!__classPrivateFieldGet(this, _YargsInstance_emittedWarnings, "f")[deduplicationId]) {
        __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.emitWarning(warning, type);
        __classPrivateFieldGet(this, _YargsInstance_emittedWarnings, "f")[deduplicationId] = true;
      }
    }
    [kFreeze]() {
      __classPrivateFieldGet(this, _YargsInstance_frozens, "f").push({
        options: __classPrivateFieldGet(this, _YargsInstance_options, "f"),
        configObjects: __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects.slice(0),
        exitProcess: __classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"),
        groups: __classPrivateFieldGet(this, _YargsInstance_groups, "f"),
        strict: __classPrivateFieldGet(this, _YargsInstance_strict, "f"),
        strictCommands: __classPrivateFieldGet(this, _YargsInstance_strictCommands, "f"),
        strictOptions: __classPrivateFieldGet(this, _YargsInstance_strictOptions, "f"),
        completionCommand: __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f"),
        output: __classPrivateFieldGet(this, _YargsInstance_output, "f"),
        exitError: __classPrivateFieldGet(this, _YargsInstance_exitError, "f"),
        hasOutput: __classPrivateFieldGet(this, _YargsInstance_hasOutput, "f"),
        parsed: this.parsed,
        parseFn: __classPrivateFieldGet(this, _YargsInstance_parseFn, "f"),
        parseContext: __classPrivateFieldGet(this, _YargsInstance_parseContext, "f")
      });
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").freeze();
      __classPrivateFieldGet(this, _YargsInstance_validation, "f").freeze();
      __classPrivateFieldGet(this, _YargsInstance_command, "f").freeze();
      __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").freeze();
    }
    [kGetDollarZero]() {
      let $0 = "";
      let default$0;
      if (/\b(node|iojs|electron)(\.exe)?$/.test(__classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv()[0])) {
        default$0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv().slice(1, 2);
      } else {
        default$0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv().slice(0, 1);
      }
      $0 = default$0.map((x) => {
        const b = this[kRebase](__classPrivateFieldGet(this, _YargsInstance_cwd, "f"), x);
        return x.match(/^(\/|([a-zA-Z]:)?\\)/) && b.length < x.length ? b : x;
      }).join(" ").trim();
      if (__classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("_") && __classPrivateFieldGet(this, _YargsInstance_shim, "f").getProcessArgvBin() === __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("_")) {
        $0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("_").replace(`${__classPrivateFieldGet(this, _YargsInstance_shim, "f").path.dirname(__classPrivateFieldGet(this, _YargsInstance_shim, "f").process.execPath())}/`, "");
      }
      return $0;
    }
    [kGetParserConfiguration]() {
      return __classPrivateFieldGet(this, _YargsInstance_parserConfig, "f");
    }
    [kGetUsageConfiguration]() {
      return __classPrivateFieldGet(this, _YargsInstance_usageConfig, "f");
    }
    [kGuessLocale]() {
      if (!__classPrivateFieldGet(this, _YargsInstance_detectLocale, "f"))
        return;
      const locale = __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("LC_ALL") || __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("LC_MESSAGES") || __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("LANG") || __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("LANGUAGE") || "en_US";
      this.locale(locale.replace(/[.:].*/, ""));
    }
    [kGuessVersion]() {
      const obj = this[kPkgUp]();
      return obj.version || "unknown";
    }
    [kParsePositionalNumbers](argv) {
      const args = argv["--"] ? argv["--"] : argv._;
      for (let i = 0, arg; (arg = args[i]) !== void 0; i++) {
        if (__classPrivateFieldGet(this, _YargsInstance_shim, "f").Parser.looksLikeNumber(arg) && Number.isSafeInteger(Math.floor(parseFloat(`${arg}`)))) {
          args[i] = Number(arg);
        }
      }
      return argv;
    }
    [kPkgUp](rootPath) {
      const npath = rootPath || "*";
      if (__classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath])
        return __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath];
      let obj = {};
      try {
        let startDir = rootPath || __classPrivateFieldGet(this, _YargsInstance_shim, "f").mainFilename;
        if (!rootPath && __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.extname(startDir)) {
          startDir = __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.dirname(startDir);
        }
        const pkgJsonPath = __classPrivateFieldGet(this, _YargsInstance_shim, "f").findUp(startDir, (dir, names) => {
          if (names.includes("package.json")) {
            return "package.json";
          } else {
            return void 0;
          }
        });
        assertNotStrictEqual(pkgJsonPath, void 0, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
        obj = JSON.parse(__classPrivateFieldGet(this, _YargsInstance_shim, "f").readFileSync(pkgJsonPath, "utf8"));
      } catch (_noop) {
      }
      __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath] = obj || {};
      return __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath];
    }
    [kPopulateParserHintArray](type, keys) {
      keys = [].concat(keys);
      keys.forEach((key) => {
        key = this[kSanitizeKey](key);
        __classPrivateFieldGet(this, _YargsInstance_options, "f")[type].push(key);
      });
    }
    [kPopulateParserHintSingleValueDictionary](builder, type, key, value) {
      this[kPopulateParserHintDictionary](builder, type, key, value, (type2, key2, value2) => {
        __classPrivateFieldGet(this, _YargsInstance_options, "f")[type2][key2] = value2;
      });
    }
    [kPopulateParserHintArrayDictionary](builder, type, key, value) {
      this[kPopulateParserHintDictionary](builder, type, key, value, (type2, key2, value2) => {
        __classPrivateFieldGet(this, _YargsInstance_options, "f")[type2][key2] = (__classPrivateFieldGet(this, _YargsInstance_options, "f")[type2][key2] || []).concat(value2);
      });
    }
    [kPopulateParserHintDictionary](builder, type, key, value, singleKeyHandler) {
      if (Array.isArray(key)) {
        key.forEach((k) => {
          builder(k, value);
        });
      } else if (/* @__PURE__ */ ((key2) => typeof key2 === "object")(key)) {
        for (const k of objectKeys(key)) {
          builder(k, key[k]);
        }
      } else {
        singleKeyHandler(type, this[kSanitizeKey](key), value);
      }
    }
    [kSanitizeKey](key) {
      if (key === "__proto__")
        return "___proto___";
      return key;
    }
    [kSetKey](key, set) {
      this[kPopulateParserHintSingleValueDictionary](this[kSetKey].bind(this), "key", key, set);
      return this;
    }
    [kUnfreeze]() {
      var _a2, _b2, _c2, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      const frozen = __classPrivateFieldGet(this, _YargsInstance_frozens, "f").pop();
      assertNotStrictEqual(frozen, void 0, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
      let configObjects;
      _a2 = this, _b2 = this, _c2 = this, _d = this, _e = this, _f = this, _g = this, _h = this, _j = this, _k = this, _l = this, _m = this, {
        options: { set value(_o) {
          __classPrivateFieldSet(_a2, _YargsInstance_options, _o, "f");
        } }.value,
        configObjects,
        exitProcess: { set value(_o) {
          __classPrivateFieldSet(_b2, _YargsInstance_exitProcess, _o, "f");
        } }.value,
        groups: { set value(_o) {
          __classPrivateFieldSet(_c2, _YargsInstance_groups, _o, "f");
        } }.value,
        output: { set value(_o) {
          __classPrivateFieldSet(_d, _YargsInstance_output, _o, "f");
        } }.value,
        exitError: { set value(_o) {
          __classPrivateFieldSet(_e, _YargsInstance_exitError, _o, "f");
        } }.value,
        hasOutput: { set value(_o) {
          __classPrivateFieldSet(_f, _YargsInstance_hasOutput, _o, "f");
        } }.value,
        parsed: this.parsed,
        strict: { set value(_o) {
          __classPrivateFieldSet(_g, _YargsInstance_strict, _o, "f");
        } }.value,
        strictCommands: { set value(_o) {
          __classPrivateFieldSet(_h, _YargsInstance_strictCommands, _o, "f");
        } }.value,
        strictOptions: { set value(_o) {
          __classPrivateFieldSet(_j, _YargsInstance_strictOptions, _o, "f");
        } }.value,
        completionCommand: { set value(_o) {
          __classPrivateFieldSet(_k, _YargsInstance_completionCommand, _o, "f");
        } }.value,
        parseFn: { set value(_o) {
          __classPrivateFieldSet(_l, _YargsInstance_parseFn, _o, "f");
        } }.value,
        parseContext: { set value(_o) {
          __classPrivateFieldSet(_m, _YargsInstance_parseContext, _o, "f");
        } }.value
      } = frozen;
      __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = configObjects;
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").unfreeze();
      __classPrivateFieldGet(this, _YargsInstance_validation, "f").unfreeze();
      __classPrivateFieldGet(this, _YargsInstance_command, "f").unfreeze();
      __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").unfreeze();
    }
    [kValidateAsync](validation2, argv) {
      return maybeAsyncResult(argv, (result) => {
        validation2(result);
        return result;
      });
    }
    getInternalMethods() {
      return {
        getCommandInstance: this[kGetCommandInstance].bind(this),
        getContext: this[kGetContext].bind(this),
        getHasOutput: this[kGetHasOutput].bind(this),
        getLoggerInstance: this[kGetLoggerInstance].bind(this),
        getParseContext: this[kGetParseContext].bind(this),
        getParserConfiguration: this[kGetParserConfiguration].bind(this),
        getUsageConfiguration: this[kGetUsageConfiguration].bind(this),
        getUsageInstance: this[kGetUsageInstance].bind(this),
        getValidationInstance: this[kGetValidationInstance].bind(this),
        hasParseCallback: this[kHasParseCallback].bind(this),
        isGlobalContext: this[kIsGlobalContext].bind(this),
        postProcess: this[kPostProcess].bind(this),
        reset: this[kReset].bind(this),
        runValidation: this[kRunValidation].bind(this),
        runYargsParserAndExecuteCommands: this[kRunYargsParserAndExecuteCommands].bind(this),
        setHasOutput: this[kSetHasOutput].bind(this)
      };
    }
    [kGetCommandInstance]() {
      return __classPrivateFieldGet(this, _YargsInstance_command, "f");
    }
    [kGetContext]() {
      return __classPrivateFieldGet(this, _YargsInstance_context, "f");
    }
    [kGetHasOutput]() {
      return __classPrivateFieldGet(this, _YargsInstance_hasOutput, "f");
    }
    [kGetLoggerInstance]() {
      return __classPrivateFieldGet(this, _YargsInstance_logger, "f");
    }
    [kGetParseContext]() {
      return __classPrivateFieldGet(this, _YargsInstance_parseContext, "f") || {};
    }
    [kGetUsageInstance]() {
      return __classPrivateFieldGet(this, _YargsInstance_usage, "f");
    }
    [kGetValidationInstance]() {
      return __classPrivateFieldGet(this, _YargsInstance_validation, "f");
    }
    [kHasParseCallback]() {
      return !!__classPrivateFieldGet(this, _YargsInstance_parseFn, "f");
    }
    [kIsGlobalContext]() {
      return __classPrivateFieldGet(this, _YargsInstance_isGlobalContext, "f");
    }
    [kPostProcess](argv, populateDoubleDash, calledFromCommand, runGlobalMiddleware) {
      if (calledFromCommand)
        return argv;
      if (isPromise(argv))
        return argv;
      if (!populateDoubleDash) {
        argv = this[kCopyDoubleDash](argv);
      }
      const parsePositionalNumbers = this[kGetParserConfiguration]()["parse-positional-numbers"] || this[kGetParserConfiguration]()["parse-positional-numbers"] === void 0;
      if (parsePositionalNumbers) {
        argv = this[kParsePositionalNumbers](argv);
      }
      if (runGlobalMiddleware) {
        argv = applyMiddleware(argv, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), false);
      }
      return argv;
    }
    [kReset](aliases = {}) {
      __classPrivateFieldSet(this, _YargsInstance_options, __classPrivateFieldGet(this, _YargsInstance_options, "f") || {}, "f");
      const tmpOptions = {};
      tmpOptions.local = __classPrivateFieldGet(this, _YargsInstance_options, "f").local || [];
      tmpOptions.configObjects = __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || [];
      const localLookup = {};
      tmpOptions.local.forEach((l) => {
        localLookup[l] = true;
        (aliases[l] || []).forEach((a) => {
          localLookup[a] = true;
        });
      });
      Object.assign(__classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f"), Object.keys(__classPrivateFieldGet(this, _YargsInstance_groups, "f")).reduce((acc, groupName) => {
        const keys = __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName].filter((key) => !(key in localLookup));
        if (keys.length > 0) {
          acc[groupName] = keys;
        }
        return acc;
      }, {}));
      __classPrivateFieldSet(this, _YargsInstance_groups, {}, "f");
      const arrayOptions = [
        "array",
        "boolean",
        "string",
        "skipValidation",
        "count",
        "normalize",
        "number",
        "hiddenOptions"
      ];
      const objectOptions = [
        "narg",
        "key",
        "alias",
        "default",
        "defaultDescription",
        "config",
        "choices",
        "demandedOptions",
        "demandedCommands",
        "deprecatedOptions"
      ];
      arrayOptions.forEach((k) => {
        tmpOptions[k] = (__classPrivateFieldGet(this, _YargsInstance_options, "f")[k] || []).filter((k2) => !localLookup[k2]);
      });
      objectOptions.forEach((k) => {
        tmpOptions[k] = objFilter(__classPrivateFieldGet(this, _YargsInstance_options, "f")[k], (k2) => !localLookup[k2]);
      });
      tmpOptions.envPrefix = __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix;
      __classPrivateFieldSet(this, _YargsInstance_options, tmpOptions, "f");
      __classPrivateFieldSet(this, _YargsInstance_usage, __classPrivateFieldGet(this, _YargsInstance_usage, "f") ? __classPrivateFieldGet(this, _YargsInstance_usage, "f").reset(localLookup) : usage(this, __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
      __classPrivateFieldSet(this, _YargsInstance_validation, __classPrivateFieldGet(this, _YargsInstance_validation, "f") ? __classPrivateFieldGet(this, _YargsInstance_validation, "f").reset(localLookup) : validation(this, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
      __classPrivateFieldSet(this, _YargsInstance_command, __classPrivateFieldGet(this, _YargsInstance_command, "f") ? __classPrivateFieldGet(this, _YargsInstance_command, "f").reset() : command(__classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_validation, "f"), __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
      if (!__classPrivateFieldGet(this, _YargsInstance_completion, "f"))
        __classPrivateFieldSet(this, _YargsInstance_completion, completion(this, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_command, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
      __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").reset();
      __classPrivateFieldSet(this, _YargsInstance_completionCommand, null, "f");
      __classPrivateFieldSet(this, _YargsInstance_output, "", "f");
      __classPrivateFieldSet(this, _YargsInstance_exitError, null, "f");
      __classPrivateFieldSet(this, _YargsInstance_hasOutput, false, "f");
      this.parsed = false;
      return this;
    }
    [kRebase](base, dir) {
      return __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.relative(base, dir);
    }
    [kRunYargsParserAndExecuteCommands](args, shortCircuit, calledFromCommand, commandIndex = 0, helpOnly = false) {
      let skipValidation = !!calledFromCommand || helpOnly;
      args = args || __classPrivateFieldGet(this, _YargsInstance_processArgs, "f");
      __classPrivateFieldGet(this, _YargsInstance_options, "f").__ = __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.__;
      __classPrivateFieldGet(this, _YargsInstance_options, "f").configuration = this[kGetParserConfiguration]();
      const populateDoubleDash = !!__classPrivateFieldGet(this, _YargsInstance_options, "f").configuration["populate--"];
      const config = Object.assign({}, __classPrivateFieldGet(this, _YargsInstance_options, "f").configuration, {
        "populate--": true
      });
      const parsed = __classPrivateFieldGet(this, _YargsInstance_shim, "f").Parser.detailed(args, Object.assign({}, __classPrivateFieldGet(this, _YargsInstance_options, "f"), {
        configuration: { "parse-positional-numbers": false, ...config }
      }));
      const argv = Object.assign(parsed.argv, __classPrivateFieldGet(this, _YargsInstance_parseContext, "f"));
      let argvPromise = void 0;
      const aliases = parsed.aliases;
      let helpOptSet = false;
      let versionOptSet = false;
      Object.keys(argv).forEach((key) => {
        if (key === __classPrivateFieldGet(this, _YargsInstance_helpOpt, "f") && argv[key]) {
          helpOptSet = true;
        } else if (key === __classPrivateFieldGet(this, _YargsInstance_versionOpt, "f") && argv[key]) {
          versionOptSet = true;
        }
      });
      argv.$0 = this.$0;
      this.parsed = parsed;
      if (commandIndex === 0) {
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").clearCachedHelpMessage();
      }
      try {
        this[kGuessLocale]();
        if (shortCircuit) {
          return this[kPostProcess](argv, populateDoubleDash, !!calledFromCommand, false);
        }
        if (__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")) {
          const helpCmds = [__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")].concat(aliases[__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")] || []).filter((k) => k.length > 1);
          if (helpCmds.includes("" + argv._[argv._.length - 1])) {
            argv._.pop();
            helpOptSet = true;
          }
        }
        __classPrivateFieldSet(this, _YargsInstance_isGlobalContext, false, "f");
        const handlerKeys = __classPrivateFieldGet(this, _YargsInstance_command, "f").getCommands();
        const requestCompletions = __classPrivateFieldGet(this, _YargsInstance_completion, "f").completionKey in argv;
        const skipRecommendation = helpOptSet || requestCompletions || helpOnly;
        if (argv._.length) {
          if (handlerKeys.length) {
            let firstUnknownCommand;
            for (let i = commandIndex || 0, cmd; argv._[i] !== void 0; i++) {
              cmd = String(argv._[i]);
              if (handlerKeys.includes(cmd) && cmd !== __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) {
                const innerArgv = __classPrivateFieldGet(this, _YargsInstance_command, "f").runCommand(cmd, this, parsed, i + 1, helpOnly, helpOptSet || versionOptSet || helpOnly);
                return this[kPostProcess](innerArgv, populateDoubleDash, !!calledFromCommand, false);
              } else if (!firstUnknownCommand && cmd !== __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) {
                firstUnknownCommand = cmd;
                break;
              }
            }
            if (!__classPrivateFieldGet(this, _YargsInstance_command, "f").hasDefaultCommand() && __classPrivateFieldGet(this, _YargsInstance_recommendCommands, "f") && firstUnknownCommand && !skipRecommendation) {
              __classPrivateFieldGet(this, _YargsInstance_validation, "f").recommendCommands(firstUnknownCommand, handlerKeys);
            }
          }
          if (__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") && argv._.includes(__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) && !requestCompletions) {
            if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
              setBlocking(true);
            this.showCompletionScript();
            this.exit(0);
          }
        }
        if (__classPrivateFieldGet(this, _YargsInstance_command, "f").hasDefaultCommand() && !skipRecommendation) {
          const innerArgv = __classPrivateFieldGet(this, _YargsInstance_command, "f").runCommand(null, this, parsed, 0, helpOnly, helpOptSet || versionOptSet || helpOnly);
          return this[kPostProcess](innerArgv, populateDoubleDash, !!calledFromCommand, false);
        }
        if (requestCompletions) {
          if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
            setBlocking(true);
          args = [].concat(args);
          const completionArgs = args.slice(args.indexOf(`--${__classPrivateFieldGet(this, _YargsInstance_completion, "f").completionKey}`) + 1);
          __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(completionArgs, (err, completions) => {
            if (err)
              throw new YError(err.message);
            (completions || []).forEach((completion2) => {
              __classPrivateFieldGet(this, _YargsInstance_logger, "f").log(completion2);
            });
            this.exit(0);
          });
          return this[kPostProcess](argv, !populateDoubleDash, !!calledFromCommand, false);
        }
        if (!__classPrivateFieldGet(this, _YargsInstance_hasOutput, "f")) {
          if (helpOptSet) {
            if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
              setBlocking(true);
            skipValidation = true;
            this.showHelp("log");
            this.exit(0);
          } else if (versionOptSet) {
            if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
              setBlocking(true);
            skipValidation = true;
            __classPrivateFieldGet(this, _YargsInstance_usage, "f").showVersion("log");
            this.exit(0);
          }
        }
        if (!skipValidation && __classPrivateFieldGet(this, _YargsInstance_options, "f").skipValidation.length > 0) {
          skipValidation = Object.keys(argv).some((key) => __classPrivateFieldGet(this, _YargsInstance_options, "f").skipValidation.indexOf(key) >= 0 && argv[key] === true);
        }
        if (!skipValidation) {
          if (parsed.error)
            throw new YError(parsed.error.message);
          if (!requestCompletions) {
            const validation2 = this[kRunValidation](aliases, {}, parsed.error);
            if (!calledFromCommand) {
              argvPromise = applyMiddleware(argv, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), true);
            }
            argvPromise = this[kValidateAsync](validation2, argvPromise !== null && argvPromise !== void 0 ? argvPromise : argv);
            if (isPromise(argvPromise) && !calledFromCommand) {
              argvPromise = argvPromise.then(() => {
                return applyMiddleware(argv, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), false);
              });
            }
          }
        }
      } catch (err) {
        if (err instanceof YError)
          __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(err.message, err);
        else
          throw err;
      }
      return this[kPostProcess](argvPromise !== null && argvPromise !== void 0 ? argvPromise : argv, populateDoubleDash, !!calledFromCommand, true);
    }
    [kRunValidation](aliases, positionalMap, parseErrors, isDefaultCommand) {
      const demandedOptions = { ...this.getDemandedOptions() };
      return (argv) => {
        if (parseErrors)
          throw new YError(parseErrors.message);
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").nonOptionCount(argv);
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").requiredArguments(argv, demandedOptions);
        let failedStrictCommands = false;
        if (__classPrivateFieldGet(this, _YargsInstance_strictCommands, "f")) {
          failedStrictCommands = __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownCommands(argv);
        }
        if (__classPrivateFieldGet(this, _YargsInstance_strict, "f") && !failedStrictCommands) {
          __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownArguments(argv, aliases, positionalMap, !!isDefaultCommand);
        } else if (__classPrivateFieldGet(this, _YargsInstance_strictOptions, "f")) {
          __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownArguments(argv, aliases, {}, false, false);
        }
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").limitedChoices(argv);
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").implications(argv);
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").conflicting(argv);
      };
    }
    [kSetHasOutput]() {
      __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
    }
    [kTrackManuallySetKeys](keys) {
      if (typeof keys === "string") {
        __classPrivateFieldGet(this, _YargsInstance_options, "f").key[keys] = true;
      } else {
        for (const k of keys) {
          __classPrivateFieldGet(this, _YargsInstance_options, "f").key[k] = true;
        }
      }
    }
  };
  function isYargsInstance(y) {
    return !!y && typeof y.getInternalMethods === "function";
  }

  // node_modules/yargs/index.mjs
  var Yargs = YargsFactory(esm_default);
  var yargs_default = Yargs;

  // src/wosbuild.ts
  var import_colors = __toESM2(require_lib());
  var import_child_process = __require("child_process");
  var { readFile, writeFile: writeFile2 } = import_fs16.promises;
  console.log(import_WOSScript.WOSScript);
  function getOrMkeDir(dir) {
    return import_fs16.promises.access(dir).then(() => dir).catch(async () => {
      const dirPath = dir;
      await import_fs16.promises.mkdir(dirPath, { recursive: true });
      return dirPath;
    });
  }
  function getOrMkeFile(filePath) {
    return import_fs16.promises.access(filePath).then(() => filePath).catch(async () => {
      await import_fs16.promises.writeFile(filePath, "");
      return filePath;
    });
  }
  function dirContents(dir) {
    return import_fs16.promises.readdir(dir).then((files) => files.map((file) => dir + "/" + file));
  }
  function isDir2(file) {
    return import_fs16.promises.stat(file).then((stat3) => stat3.isDirectory());
  }
  async function build_(dir, plat, actualDirLoc) {
    const contents = await dirContents(dir);
    for (const file of contents) {
      const isdir = await isDir2(file);
      console.log(
        (0, import_colors.green)(`Now on ${file}`)
      );
      if (isdir) {
        await build_((0, import_path11.join)(dir, file), plat, (0, import_path11.join)(actualDirLoc, file));
      } else {
        const split = file.split(".");
        if (split.length != 3)
          continue;
        const name = split[0];
        const type = split[1];
        const ext2 = split[2];
        let lfType = "object";
        if (!ext2 || !type) {
          continue;
        }
        if (type === "cl") {
          lfType = "class";
        } else if (type === "sf") {
          lfType = "function";
        } else if (type === "af") {
          lfType = "async";
        }
        console.log(
          (0, import_colors.green)([
            "",
            `${file} is:`,
            `  ${type} (${ext2})`,
            `  -> ${name}.${plat}.${lfType}.js`,
            ""
          ].join("\n"))
        );
        const ws = new import_WOSScript.WOSScript({
          type: lfType,
          platform: plat
        });
        var script = "";
        try {
          console.log(
            (0, import_colors.yellow)([
              "",
              `Trying to compile ${name.split("/").pop()}... (${actualDirLoc})`,
              `  -> ${name}.${plat}.${lfType}.js`,
              ""
            ].join("\n"))
          );
          script = await readFile(file, "utf8");
        } catch {
          console.log(
            (0, import_colors.yellow)([
              `Failed to compile ${name.split("/").pop()}...`,
              `  -> ${name}.${plat}.${lfType}.js`,
              ""
            ].join("\n"))
          );
        } finally {
          console.time((0, import_colors.green)(`Compiled ${name.split("/").pop()}`));
        }
        const parsed = ws.parse(script);
        const buildFilePath = (0, import_path11.join)(actualDirLoc, `${name.split("/").pop()}.${plat}.${lfType}.wosb.${ext2}`);
        console.log("Getting file  ...".bgGreen.white.bold);
        await getOrMkeFile(buildFilePath);
        console.log("Write to file ...".bgYellow.white.bold);
        await writeFile2(buildFilePath, parsed);
        console.log("Done with file...\n".bgRed.white.bold);
        if (ext2 === "ts" || ext2 === "tsx") {
          const tsup = (0, import_child_process.spawn)("tsup", [
            "-p",
            "tsconfig.json",
            "-o",
            `./${name.split("/").pop()}.${plat}.${lfType}.js`,
            `./${name.split("/").pop()}.${plat}.${lfType}.ts`
          ]);
          console.log(
            "TSUP !!!".bgYellow.black.bold
          );
        } else {
          console.log(
            "Magic!!!".rainbow.bold
          );
        }
      }
    }
  }
  var buildCommand = {
    command: "build",
    describe: "Build the project",
    handler: async (argv) => {
      const buildDir = argv.buildDir || "wosdist";
      const actualDir = await getOrMkeDir(buildDir);
      const srcLoc = (0, import_path11.join)(__dirname, "..", "wosb");
      const src = await getOrMkeDir(buildDir);
      console.log((0, import_colors.green)(`Building ${srcLoc} into ${buildDir}...`));
      {
        try {
          await build_(srcLoc, argv.buildPlat || "neut", buildDir);
        } catch (err) {
          console.log((0, import_colors.yellow)(`Error: ${err}`));
        } finally {
          console.log((0, import_colors.green)("Done!"));
        }
      }
      process.exit(0);
    }
  };
  var cleanCommand = {
    command: "clean",
    describe: "Clean the build output",
    handler: async (argv) => {
      const outputPath = import_path12.default.join(__dirname, argv.buildDir || "wosb");
      await rimraf(outputPath, {
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
    yargs_default.showHelp();
    process.exit(0);
  } else {
    yargs_default.option("buildDir", {
      describe: "Directory to build into",
      type: "string",
      default: process.cwd() + "/wosdist"
    }).option("buildPlat", {
      describe: "Platform to build into",
      type: "string",
      default: "neut"
    }).command(buildCommand).command(cleanCommand).demandCommand().help().argv;
  }
})();
/*! Bundled license information:

yargs-parser/build/lib/string-utils.js:
  (**
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)

yargs-parser/build/lib/tokenize-arg-string.js:
  (**
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)

yargs-parser/build/lib/yargs-parser-types.js:
  (**
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)

yargs-parser/build/lib/yargs-parser.js:
  (**
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)

yargs-parser/build/lib/index.js:
  (**
   * @fileoverview Main entrypoint for libraries using yargs-parser in Node.js
   * CJS and ESM environments.
   *
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)
*/
