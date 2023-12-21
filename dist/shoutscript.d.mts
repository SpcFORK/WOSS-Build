import Shout from './shoutp.mjs';
import './Gradule-web.mjs';

const _qp = (color) => function(string, styles, bold = false, italic = false) {
    return undefined(string, color, styles, bold, italic);
  },

  _static = {
    pws: undefined,
    main_color: _qp(
      [...undefined.amethyst, ...undefined.cherryblossoms]
        .sort(() => Math.random() - 0.5)
    ),

    error_color: _qp(
      [...undefined.kyoto, ...undefined.wiretap]
        .sort(() => Math.random() - 0.5)
    ),

    INTRO() {
      _static.main_color(
        'Welcome to Shoutscript v0.01!',
        `
        font-size: 13px;
        `,
        true
      );
    },

    bench: {
      INTRO() {
        _static.main_color(
          'Welcome to Shoutscript Benchmark!',
          `
          font-size: 13px;
          `,
          true
        );
      },

      BENCHMARK() {
        _static.main_color(
          'Benchmarking...',
          `
          font-size: 13px
          `
        );
      },

      BENCH_START() {
        _static.main_color(
          'Bench Started!',
          `
          font-size: 13px;
          `,
          true
        );
      },
    }
  },

  _register = (name) => {
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
    }

    [name]
  },

  _type = (val) => Array.isArray(val)
    ? 'array'
    : (val?.constructor?.name + '').toLowerCase() || typeof val || 'undefined'
  ,

  shouts = {

    _modes: {
      benchmark: {
        introDone: false,
        benching: false,

        benchVal: 0,
        startBenching() {
          shouts.benching = true;
          shouts.benchVal = 0;
        },
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
          static registers = new Map()
          static createRegisters() {
            for (let i = 0; i < 255; i++) {
              shouts._modes.shoutfuck.stack.push(new Reg(i));
            }
          }

          static _ = addEventListener('DOMContentLoaded', () => {
            shouts._modes.shoutfuck.Register.createRegisters();
          });

          constructor(name, ...args) {
            this.name = name;
            // this.val = val;
            if (args.length > 1) {
              this.value = [...args];
              this.type = 'sfArray';
            } else {
              this.value = args[0];
              this.type = 'sfValue';
            }

            args.find((arg) => {
              if (_type(arg) === new (_register('type'))) {
                this.type = arg.type;
              }
            });

            shouts._modes.shoutfuck.Register.registers.set(this.name, this);
          }
        },
      },
    },

    benchStart() {
      if (!shouts._modes.benchmark.introDone) {
        _static.bench.INTRO();
        shouts._modes.benchmark.introDone = true;
      }

      if (!shouts._modes.benchmark.benching) {
        shouts._modes.benchmark.startBenching();

        _static.main_color(
          'Bench Started!',
          `
          font-size: 13px;
          `,
          true
        );

        // Get Time
        let startTime = Date.now();
        shouts._modes.benchmark.benching = true;
        shouts._modes.benchmark.benchVal = startTime;
      } else {
        _static.main_color(
          'Bench Already Started!',
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

        // Print Time
        _static.main_color(
          `Time: ${shouts._modes.benchmark.benchVal}ms\n` +
          `Start: ${startTime}\n` +
          `End: ${endTime}`,
          `
          font-size: 13px;
          `,
          true
        );

      } else {
        _static.main_color(
          'Bench Not Active!',
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
        return shouts._modes.shoutfuck.pointer = (shouts._modes.shoutfuck.pointer + val) % shouts._modes.shoutfuck.stack.length
      }
    },

    $bl() {
      return shouts.$bj()(-1)
    },

    $br() {
      return shouts.$bj()(1)
    },

    $bp() {
      let curReg = shouts._modes.$v();
      // Should be a Register class
      if (curReg instanceof shouts._modes.shoutfuck.Register) {
        if (_type(curReg.value) == 'number') {
          return curReg.value++
        } else if (_type(curReg.value) == 'string') {
          return curReg.value += '+'
        } else {
          throw _static.error_color(
            `Invalid Type: ${_type(curReg.value)}\n` +
            `Expected: Number or String\n` +
            `Received: ${_type(curReg.value)}`,
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
      // Should be a Register class
      if (curReg instanceof shouts._modes.shoutfuck.Register) {
        if (_type(curReg.value) == 'number') {
          return curReg.value--
        } else if (_type(curReg.value) == 'string') {
          return curReg.value = curReg.value.slice(0, -1)
        } else {
          throw _static.error_color(
            `Invalid Type: ${_type(curReg.value)}\n` +
            `Expected: Number or String\n` +
            `Received: ${_type(curReg.value)}`,
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
      }
    },
  };
  
  Object.entries(shouts).map(([key, val]) => {
    if (!key.startsWith('_')) {
      Shout.createShout(key, val);
    }
  })

;

// ---

_static.INTRO();

// ---

// export default compiled;
