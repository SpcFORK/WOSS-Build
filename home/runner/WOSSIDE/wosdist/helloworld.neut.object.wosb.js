import Shout from './shoutp';

/*@!!
  THIS IS A WOSSCRIPT
  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS
*/

const $wosglobe = {
  core: {
    wow: ''
  },
  
  wow: {
    asd: "asd"
  },
  
  jeez: ({
    'wow': {
      wow: "wow"
    }
  }),
}

;(
  (
    (globalThis?.window) && (window.$wosglobe = $wosglobe)
  )
    ||
  (
    (globalThis?.__dirname) && (globalThis.$wosglobe = $wosglobe)
  )
);