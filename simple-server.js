const net = require("net");

const server = net.createServer((socket) => {
  socket.on("end", () => {
    socket.write("Congratulations! You have connected to server");
  });

  socket.on("data", (data) => {
    console.log(data.toString());
  });

  socket.on("connect", () => {
    console.log("Connect event done!");
  });
});

server.listen(Number(process.argv[2]));
