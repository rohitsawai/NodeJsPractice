const http = require("http");

const url = process.argv[2];

let result = "";
http.get(url, (res) => {
  res.setEncoding("utf-8");

  res.on("data", (data) => {
    result += data;
  });

  res.on("end", () => {
    console.log(result.length + "\n" + result);
  });
  res.on("error", console.error);
});
