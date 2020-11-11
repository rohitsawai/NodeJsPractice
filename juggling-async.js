const http = require("http");
const bl = require("bl");

const url_1 = process.argv[2];
const url_2 = process.argv[3];
const url_3 = process.argv[4];

async function jugglingFunction(url) {
  let result = "";
  await http.get(url, (res) => {
    res.setEncoding("utf-8");

    res.on("data", (data) => {
      result += data;
    });

    res.on("end", () => {
      console.log(result);
    });
  });
}

jugglingFunction(url_1);
jugglingFunction(url_2);
jugglingFunction(url_3);
