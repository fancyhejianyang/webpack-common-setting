import a from './a.js';
import $ from '../jquery-wrap.js';
var obj = window.document.body;
obj.innerHTML = a()+1;
console.log($("body").html()+1);