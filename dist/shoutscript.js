"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// src/Gradule-web.js
var require_Gradule_web = __commonJS({
  "src/Gradule-web.js"(exports, module2) {
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
    var printWithStyles2 = (string, colorArr, styles, bold = false, italic = false) => {
      new Preset(colorArr).printStyled(string, styles, bold, italic);
    };
    var input = Preset.input;
    var beautify = Preset.beautify;
    var _exp_ = { print, printE, printWithStyles: printWithStyles2, input, beautify, preset: Preset };
    if (typeof module2 !== "undefined") {
      module2.exports = _exp_;
    } else if (typeof window !== "undefined") {
      window.gradule = _exp_;
    }
  }
});

// src/shoutp.js
var Shout = {
  total: {},
  createShout(name = "", cb = function(count = 0, Self = Shout?.total) {
  }) {
    let count = 0;
    let keystore = 0;
    let Shout2 = this;
    Shout2.total[name] = {
      count
    };
    Object.defineProperty(globalThis, name, {
      get: function() {
        count++;
        if (Shout2.total?.[name]) {
          Object.assign(Shout2.total[name], { count });
        }
        return cb(count, Shout2.total?.[name]);
      },
      set: function(value) {
        Object.assign(Shout2.total[name], {
          [typeof value == "string" ? value : value.name || keystore + `_${typeof value}`]: value
        });
        keystore++;
      },
      enumerable: true,
      configurable: true
    });
  },
  destroyShout(name) {
    if (!Object.keys(this.total).includes(name)) {
      throw new Error(`Shout ${name} not found`);
    }
    delete window[name];
    this.total = this.total.filter((n) => n !== name);
  },
  isShout(name) {
    if (!Object.keys(this.total).includes(name) || window[name][Symbol.for("shout")].is === false) {
      return false;
    }
    return true;
  }
};
var shoutp_default = Shout;

// src/shoutscript.js
var g_ = __toESM(require_Gradule_web());
var _qp = (color) => function(string, styles, bold = false, italic = false) {
  return g_.printWithStyles(string, color, styles, bold, italic);
};
var _static = {
  pws: g_.printWithStyles,
  main_color: _qp(
    [...g_.preset.amethyst, ...g_.preset.cherryblossoms].sort(() => Math.random() - 0.5)
  ),
  error_color: _qp(
    [...g_.preset.kyoto, ...g_.preset.wiretap].sort(() => Math.random() - 0.5)
  ),
  INTRO() {
    _static.main_color(
      "Welcome to Shoutscript v0.01!",
      `
        font-size: 13px;
        `,
      true
    );
  },
  bench: {
    INTRO() {
      _static.main_color(
        "Welcome to Shoutscript Benchmark!",
        `
          font-size: 13px;
          `,
        true
      );
    },
    BENCHMARK() {
      _static.main_color(
        "Benchmarking...",
        `
          font-size: 13px
          `
      );
    },
    BENCH_START() {
      _static.main_color(
        "Bench Started!",
        `
          font-size: 13px;
          `,
        true
      );
    }
  }
};
var _register = (name) => {
  return {
    [name]: class {
      name = name;
      type = name;
      constructor(...args) {
        this.args = args;
      }
      setType(type) {
        this.type = type;
      }
      setArgs(...args) {
        this.args = args;
      }
    }
  }[name];
};
var _type = (val) => Array.isArray(val) ? "array" : (val?.constructor?.name + "").toLowerCase() || typeof val;
var shouts = {
  _modes: {
    benchmark: {
      introDone: false,
      benching: false,
      benchVal: 0,
      startBenching() {
        shouts.benching = true;
        shouts.benchVal = 0;
      }
    },
    shoutfuck: {
      // Shoutfuck - BrainFuck Interpreter with Shouts
      // < =: $bl | $bp(value)
      // > =: $br
      // + =: $bp | $bp(value)
      // - =: $bm
      // . =: $bv
      // , =: $bs
      // [ =: $b_op
      // ] =: $b_cl
      // We will provide extras like: 
      // $binp(input) - Input Value into the current register
      // $bget(reg) - Get the value of that register
      // $bset(reg, value) - Set the value of that register
      // $bstoreFN(reg, fn) - implicity store a function into a register, this will not work if the register is not a function
      // $bcallFN(reg) - Call a function with the value of the register
      // $bpop(reg) - Pop the value of the register
      // $bpush(reg) - Push the value of the register
      pointer: 0,
      stack: [],
      input: [],
      output: [],
      Register: class Reg {
        static registers = /* @__PURE__ */ new Map();
        static createRegisters() {
          for (let i = 0; i < 255; i++) {
            shouts._modes.shoutfuck.stack.push(new Reg(i));
          }
        }
        static _ = addEventListener("DOMContentLoaded", () => {
          shouts._modes.shoutfuck.Register.createRegisters();
        });
        constructor(name, ...args) {
          this.name = name;
          if (args.length > 1) {
            this.value = [...args];
            this.type = "sfArray";
          } else {
            this.value = args[0];
            this.type = "sfValue";
          }
          args.find((arg) => {
            if (_type(arg) === new (_register("type"))()) {
              this.type = arg.type;
            }
          });
          shouts._modes.shoutfuck.Register.registers.set(this.name, this);
        }
      }
    }
  },
  benchStart() {
    if (!shouts._modes.benchmark.introDone) {
      _static.bench.INTRO();
      shouts._modes.benchmark.introDone = true;
    }
    if (!shouts._modes.benchmark.benching) {
      shouts._modes.benchmark.startBenching();
      _static.main_color(
        "Bench Started!",
        `
          font-size: 13px;
          `,
        true
      );
      let startTime = Date.now();
      shouts._modes.benchmark.benching = true;
      shouts._modes.benchmark.benchVal = startTime;
    } else {
      _static.main_color(
        "Bench Already Started!",
        `
          font-size: 13px;
          font-style: italic;
          text-decoration: underline;
          `,
        true
      );
    }
    return shouts._modes.benchmark.benchVal;
  },
  benchEnd() {
    if (shouts._modes.benchmark.benching) {
      let endTime = Date.now();
      let startTime = shouts._modes.benchmark.benchVal;
      shouts._modes.benchmark.benchVal = endTime - startTime;
      shouts._modes.benchmark.benching = false;
      _static.main_color(
        `Time: ${shouts._modes.benchmark.benchVal}ms
Start: ${startTime}
End: ${endTime}`,
        `
          font-size: 13px;
          `,
        true
      );
    } else {
      _static.main_color(
        "Bench Not Active!",
        `
          font-size: 13px;
          font-style: italic;
          text-decoration: underline;
          `,
        true
      );
    }
    return shouts._modes.benchmark.benchVal;
  },
  // Shoutfuck - BrainFuck Interpreter with Shouts
  // < =: $bl | $bj(value)
  // > =: $br | $bj(value)
  // + =: $bp | $ba(value)
  // - =: $bm | $ba(value)
  // . =: $bv
  // [ =: $b_op
  // ] =: $b_cl
  // We will provide extras like: 
  // $binp(input) - Input Value into the current register
  // $bget(reg) - Get the value of that register
  // $bset(reg, value) - Set the value of that register
  // $bstoreFN(reg, fn) - implicity store a function into a register, this will not work if the register is not a function
  // $bcallFN(reg) - Call a function with the value of the register
  // $bpop(reg) - Pop the value of the register
  // $bpush(reg) - Push the value of the register
  $v() {
    return shouts._modes.shoutfuck.stack[shouts._modes.shoutfuck.pointer];
  },
  $bj() {
    return function(val = 0) {
      return shouts._modes.shoutfuck.pointer = (shouts._modes.shoutfuck.pointer + val) % shouts._modes.shoutfuck.stack.length;
    };
  },
  $bl() {
    return shouts.$bj()(-1);
  },
  $br() {
    return shouts.$bj()(1);
  },
  $bp() {
    let curReg = shouts._modes.$v();
    if (curReg instanceof shouts._modes.shoutfuck.Register) {
      if (_type(curReg.value) == "number") {
        return curReg.value++;
      } else if (_type(curReg.value) == "string") {
        return curReg.value += "+";
      } else {
        throw _static.error_color(
          `Invalid Type: ${_type(curReg.value)}
Expected: Number or String
Received: ${_type(curReg.value)}`,
          `
              font-size: 13px
              `,
          true
        );
      }
    }
  },
  $bm() {
    let curReg = shouts._modes.$v();
    if (curReg instanceof shouts._modes.shoutfuck.Register) {
      if (_type(curReg.value) == "number") {
        return curReg.value--;
      } else if (_type(curReg.value) == "string") {
        return curReg.value = curReg.value.slice(0, -1);
      } else {
        throw _static.error_color(
          `Invalid Type: ${_type(curReg.value)}
Expected: Number or String
Received: ${_type(curReg.value)}`,
          `
              font-size: 13px
            `,
          true
        );
      }
    }
  },
  $ba() {
    return function(val = 0) {
      if (val >= 0) {
        for (let i = 0; i < val; i++) {
          shouts._modes.$bp();
        }
      } else {
        for (let i = -val; i > 0; i--) {
          shouts._modes.$bm();
        }
      }
    };
  }
};
var compiled = Object.entries(shouts).map(([key, val]) => {
  if (!key.startsWith("_")) {
    shoutp_default.createShout(key, val);
  }
});
_static.INTRO();
