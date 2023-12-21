// === AUTHORHEADER ===
// @SpcFORK
// $name: main
// $date: 2023-12-20
// $module: main
// === ===

import Shout from '../shoutp';
import * as Gd from './Gradule-web';
import './types'

/** WOSScript - A Module building language. */
// © SpcFORK, SpectCOW 2023
/* 
    ,""""""""""""""""",^,"""""""""""",                  
  .l ?]]]]]]]]]]]]]]]].~.????????????.I                 
 ",!l]IIIIIIIIIIIIIIII,< ]]]]]]]]]]]] l                 
 l ]]]lllllllllllllIII:> ]]]]]]]]]]]] l                 
 l:iii>>>>>>>>>>>>>]]] ~ ]]]]]]]]]]]] l                 
 l`++++++++++++++++---.~ ]]]]]]]]]]]] l                 
 lIIIIIIIIIIIIIIIIIIII;~.??????----?? l                 
 lIlllllllllllllllllll:iI"""""",;:;''l;".               
 l;lllllllllllllllllll:l    '^,,Iii??]-i;".             
 `I,I:::::::::I,,,,,,,:`   ,;ii??]]]]]]]-i",            
   ,:iiiiiiiii:,          :IIii!!!!!!!?]]]I:"           
   l ]]]]]]]]] l           ^`````````l.]]]] i           
   l ]]]]]]]]] l                   .`l.]]]]?.I          
   l.?]]]]]]]] l         ,""""""""";!!?]]]]] l          
   `i ]]]]]]]] l        I.?????????-]]]]]]]I";          
    ;:I]]]]]]]l;""""""",! ]]]]]]]]]]]]]]]?!^;           
     I,i-]]]]]]-???????.~ ]]]]]]]]]]]]]?!,,^            
      ^IIi?-]]]]]]]]]]] ~ ]]]]]]]]]]??!,,^              
        ^I"I!!!!!!!!!!!">:!!!!!!!!!!,",^                
           ^```````````^ ^``````````^

WOSScript,

A parser which is a subset of JS, it loads files and builds an object around that file, which is a cool hacky way to build Object Models

Essentially, the file extention determines the base of your object,
  - .ob.<?> -> cased within {}
  - .cl.<?> -> cased within a class
  - .af.<?> -> cased within an async function
  - .sf.<?> -> cased within a sync function

The syntax follows the syntax of JS, but with some slight variations depending on the object you're in.

The main goal for this is to be able to write Object Models and higher quality modules in JS, where a single root namespace is sufficient.

*/

class WOSScript {
  opts: Opts = {
    platform: 'web',
    type: 'object'
  }

  constructor(opts?: Record<string, any> & Opts) {
    this.upd(opts)
  }

  private upd(opts?: Record<string, any> & Opts) {
    if (opts) this.opts = { ...this.opts, ...opts }
  }

  parse(filestr: string, opts?: Record<string, any> & typeof this.opts): any {

    this.upd(opts)

    let mode = this.opts.type || 'object'

    if (mode === 'sync') mode = 'function'
    
    let groups = this.abstract(filestr, mode)

    return groups;

  }

  private abstract(filestr: string, type: typeof this.opts.type = 'object'): string {
    // The Header
    // ^/*@WOS <...> */
    let RGheader = /^\/\*\s*@WOS\s*([^*]+)\s*\*\//gi.exec(filestr);
    let head = ''
    if (RGheader) {
      let headerText = RGheader[1];
      let header = headerText.split('\n');
      head = header.join('\n');
    }

    let RGbody = filestr.replace((RGheader || [''])[0], '').trim()
    let body = RGbody.replaceAll(';;', ',')


    // ---

    let $th = this

    function exporterSnip(doc: string) {
      if ($th.opts.platform) {
        switch ($th.opts.platform) {
          case 'node':
            return doc + `\nmodule.exports = $wosglobe;`
            break;
          case 'web':
            return doc + `\nwindow.$wosglobe = $wosglobe;`
            break;
          case 'neut':
            return doc + `\n;(\n  (\n    (globalThis?.window) && (window.$wosglobe = $wosglobe)\n  )\n    ||\n  (\n    (globalThis?.__dirname) && (globalThis.$wosglobe = $wosglobe)\n  )\n);`
            break;
        }
      }
      
      return doc
    }
    
    function objectCase(): string {
      let doc = ''

      doc += head
        + (head ? `\n` : '')
        + [
          `/*@!!`,
          `  THIS IS A WOSSCRIPT`,
          '  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS',
          `*/`,
          ``,
          `const $wosglobe = {`, body.split('\n').map(a => '  ' + a).join('\n'), `}`,
          ``,
        ].join('\n')

      doc = exporterSnip(doc)

      return doc
    }

    function classCase(): string {
      let doc = ''

      doc += head
        + (head ? `\n` : '')
        + [
          `/*@!!`,
          `  THIS IS A WOSSCRIPT`,
          '  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS',
          ``,
          '    - This document was built in Class Mode',
          `*/`,
          ``,
          `const $wosglobe = class {`, body.split('\n').map(a => '  ' + a).join('\n'), `}`,
          ``,
        ].join('\n')

      doc = exporterSnip(doc)

      return doc
    }

    function asyncFunctionCase(): string {
      let doc = ''

      doc += head
        + (head ? `\n` : '')
        + [
          `/*@!!`,
          `  THIS IS A WOSSCRIPT`,
          '  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS',
          ``,
          '    - This document was built in Async Mode',
          `*/`,
          ``,
          `const $wosglobe = async function() {`, body.split('\n').map(a => '  ' + a).join('\n'), `}`,
          ``,
        ].join('\n')

      doc = exporterSnip(doc)
      
      return doc
    }

    function syncFunctionCase(): string {
      let doc = ''

      doc += head
        + (head ? `\n` : '')
        + [
          `/*@!!`,
          `  THIS IS A WOSSCRIPT`,
          '  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS',
          ``,
          '    - This document was built in Sync Mode',
          `*/`,
          ``,
          `const $wosglobe = function() {`, body.split('\n').map(a => '  ' + a).join('\n'), `}`,
          ``,
        ].join('\n')

      doc = exporterSnip(doc)
      
      return doc
    }

    // ---

    // We now compile the two.
    let b = ''
    switch (type) {
      case 'object':
        return b += objectCase();
        break;
      case 'class':
        return b += classCase();
        break;
      case 'async':
        return b += asyncFunctionCase();
        break;
      case 'function':
        return b += syncFunctionCase();
        break;
      default:
        return b += objectCase();
        break;
    }

    return b
  }

  exec(code: string, opts?: Opts) {
    let parsedCode = this.parse(code, opts)

    try {
      var evalResp = eval(parsedCode)
    } catch (e) {
      console.error(
        Gd.beautify(
          'Failed to run WOSScript:', 
          [...Gd.preset.cherryblossoms, ...Gd.preset.amethyst].sort(() => Math.random() - 0.5), 
          true
        ), 
        
        '\n\n', 
        e, 
        '\n',  
        parsedCode, 
        '\n\n'
      )
      return e
    }

    return evalResp;
  }
}

;(
  (globalThis?.window) && (Object.assign(window, { WOSScript })) 
    ||
  (globalThis?.module) && (module.exports = { WOSScript })
);