//JavaScript Program to Replace All Line Breaks with

const string = `I am Learning JavaScript.
JaaScript is fun.
JavaScript is easy.
javascript is dynamic programming language.
Replace all line breaks with javascript code.`;

const result = string.replace(/(\r\n|\r|\n)/g, '<br>');
console.log(result);