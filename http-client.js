const http = require("http");

const url = process.argv[2];

http
  .get(url, (res) => {
    res.setEncoding("utf-8");
    res.on("data", console.log);
    res.on("error", console.error);
    //   res.on("data", (data) => {
    //     console.log(data);
    //   });
  })
  .on("error", console.error);
