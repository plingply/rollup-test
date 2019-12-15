
// src/main.js
import { version } from '../package.json';
import { join } from 'path'

var test = 'test'

// import $ from 'jquery'

let myObject = {
  name: 'myObject',
  show() {
    console.log('myObject.show => ', this.name)
    let f = () => console.log('func')
    f()

    const path_base = 'E://node'
    const path_joined = join(path_base, 'bin')
    console.log(path_joined)

    // $('p').css("color", 'red')
  }
}

export default function () {
  console.log('version: ' + version);
  myObject.show()
}