const net = require("net");
const client = require('./client');

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost",// IP address here,
//     port: 50541 // PORT number here,
//   });
  // interpret incoming data as text
//   conn.setEncoding("utf8");
//   conn.on("connect", () => {
//     console.log("you are dead!")
//     conn.write("Hello from client")
//   })
//   return conn;
// };

//console.log("Connecting ...");
client.connect();