let fs = require("fs");

let thisFilePath = process.argv[2].toString();

let buff = fs.readFileSync(thisFilePath,'utf-8');

let eleW_n = buff.split("\n").length;

console.log(eleW_n - 1);
