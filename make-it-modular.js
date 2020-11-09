const myModule = require("./mymodule");

const folderPath = process.argv[2];
const ext = process.argv[3];

const listOfFiles = myModule(folderPath, ext, callback);

function callback(err, fileList) {
  if (err) console.error(err);
  else {
    fileList.forEach((ele) => {
      console.log(ele);
    });
  }
}
