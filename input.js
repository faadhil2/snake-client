const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    console.log("Game Ended!");
    process.exit();
  } else if (key === '\u0077') { //w
    connection.write("Move: up")
  }else if (key === '\u0073') { //s
    connection.write("Move: down")
  }else if (key === '\u0061') { //a
    connection.write("Move: left") 
  }else if (key === '\u0064') { //d
    connection.write("Move: right")
  }else if (key === '\u0020') { //spacebar
    connection.write("Say: Trash!")
  }
};

let connection;

module.exports = {
  setupInput,
  handleUserInput
}