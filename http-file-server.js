const http = require("http");
const fs = require("fs");

const portNumber = Number(process.argv[2]);
const filePath = process.argv[3].toString();

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(filePath);
  readStream.pipe(writeStream);
});

server.listen(portNumber);
