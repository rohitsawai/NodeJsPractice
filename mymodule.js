const fs = require("fs");
const path = require("path");

function myModuleFunction(folderPath, ext, callback) {
  let fileList = [];
  ext = "." + ext;
  fs.readdir(folderPath, "utf-8", (err, data) => {
    if (err) {
      callback(err, fileList);
    } else {
      data.forEach((Element) => {
        if (path.extname(Element) === ext) {
          fileList.push(Element);
        }
      });

      callback(err, fileList);
    }
  });
}

module.exports = myModuleFunction;
