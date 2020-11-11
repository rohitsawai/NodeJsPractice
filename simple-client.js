const net = require("net");
const port = Number(process.argv[2]);

const client = net.createConnection(port, () => {
  console.log("Connected to server!!!");

  client.on("data", (data) => {
    console.log(data.toString());
  });
});
