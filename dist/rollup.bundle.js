/* my-library version 1.0.0 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.rollupTest = factory());
}(this, (function () { 'use strict';

  var version = "1.0.0";

  // import $ from 'jquery'

  let myObject = {
    name: 'myObject',
    show() {
      console.log('myObject.show => ', this.name);
      let f = () => console.log('func');
      f();

      // const path_base = 'E://node'
      // const path_joined = join(path_base, 'bin')
      // console.log(path_joined)

      // $('p').css("color", 'red')
    }
  };

  function main () {
    console.log('version: ' + version);
    myObject.show();
  }

  return main;

})));
/* follow me on Twitter! @rich_harris */
