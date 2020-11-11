//MY SOLUTION

const net = require("net");
const port = Number(process.argv[2]);

const server = net.createServer((socket) => {
  const dateObj = new Date();

  let data = `${dateObj.getFullYear()}-${
    dateObj.getMonth() + 1
  }-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}\n`;

  socket.write(data, "utf-8", () => {});
  socket.end();
});

server.listen(port);
