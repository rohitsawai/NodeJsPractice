const http = require("http");
const fs = require("fs");

const agent = new http.Agent({ keepAlive: true });
const connect = agent.createConnection({ port: 8110 }, () => {
  console.log("connected to server!");

  const writeStream = fs.createWriteStream("D:/writeStream.txt");
});
