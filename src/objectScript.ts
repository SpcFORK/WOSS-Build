// === AUTHORHEADER ===
// @SpcFORK
// $name: main
// $date: 2023-12-20
// $module: main
// === ===

import Shout from './shoutp';

/** ObjectScript - A Module building language. */
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

ObjectScript,

A parser which is a subset of JS, it loads files and builds an object around that file, which is a cool hacky way to build Object Models

Essentially, the file extention determines the base of your object,
  - .ob.<?> -> cased within {}
  - .cl.<?> -> cased within a class
  - .af.<?> -> cased within an async function
  - .sf.<?> -> cased within a sync function

The syntax follows the syntax of JS, but with some slight variations depending on the object you're in.

The main goal for this is to be able to write Object Models and higher quality modules in JS, where a single root namespace is sufficient.

*/



