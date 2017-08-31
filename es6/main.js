import a from './a.js';
import $ from '../jquery-wrap.js';
var obj = window.document.body;
obj.innerHTML = a();
console.log($("body").html());