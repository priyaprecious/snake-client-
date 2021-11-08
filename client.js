const net = require("net");
const connect = function () {
    const conn = net.createConnection({
      host: "localhost",// IP address here,
      port: 50541 // PORT number here,
    });
    
    conn.setEncoding("utf8");
    conn.on("connect", () => {

        conn.write('Name: PRI');
        conn.write('Say: Hi');
  })
  return conn;
};



module.exports = { connect };