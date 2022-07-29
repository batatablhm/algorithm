
let str = "your long string.";
let wordCount = str.match(/(\w+)/g).length;
let n = str.length; 
let m = str.replace(/[^aeiou]/gi, "").length; 