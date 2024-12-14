const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, (req, res) => {
  console.log("Server Runing On Port 4000");
});
