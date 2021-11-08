const net = require("net");
const connect = function () {
    const conn = net.createConnection({
      host: "localhost",// IP address here,
      port: 50541 // PORT number here,
    });
    
    conn.setEncoding("utf8");
    conn.on("connect", () => {
    console.log("you are dead!")
    conn.write("Hello from client")
  })
  return conn;
};



module.exports = { connect };