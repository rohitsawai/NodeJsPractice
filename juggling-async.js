const jugAsync = require("./juggling-async-main");

const url_1 = process.argv[2];
const url_2 = process.argv[3];
const url_3 = process.argv[4];

async function jugAsyncRes(url) {
  await jugAsync(url, callback);
}

function callback(data) {
  console.log(data);
}

console.log(jugAsyncRes(url_1));
console.log(jugAsyncRes(url_2));
console.log(jugAsyncRes(url_3));
