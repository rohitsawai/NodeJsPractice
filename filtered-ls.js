const fs = require("fs");
const path = require("path");

const folderPath = process.argv[2];
const ext = process.argv[3];

let count = 0;
fs.readdir(folderPath, function (err, list) {
  if (err) return console.error(err.message);
  else {
    list.forEach((element) => {
      let currFileExt = path.extname(element).toString().slice(1);
      if (currFileExt == ext) {
        console.log(element);
      }
    });
  }
});
