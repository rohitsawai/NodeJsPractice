"use strict";
let fs = require("fs");

let filePath = process.argv[2].toString();

async function getTotalLines() {
  await fs.readFile(filePath, (err, data) => {
    if (err) return console.error(err.message);
    else {
      let totalNewLines = data.toString().split("\n").length - 1;
      return console.log(totalNewLines);
    }
  });
}

// fs.readFile(filePath, function (err, contents) {
//   if (err) return console.error(err);
//   const lines = contents.toString().split("/n").length - 1;
//   console.log(lines);
// });
getTotalLines();
