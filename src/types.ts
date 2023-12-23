declare type OptsType = 'object' | 'class' | 'function' | 'async' | 'sync'
declare type OptsPlat = 'web' | 'node' | 'neut'

declare type ParsedOptsType = 'object' | 'class' | 'function' | 'async'

declare interface Opts {
  platform?: OptsPlat,
  type?: OptsType
}

declare interface ParsedOpts {
  platform?: OptsPlat,
  type?: ParsedOptsType
}