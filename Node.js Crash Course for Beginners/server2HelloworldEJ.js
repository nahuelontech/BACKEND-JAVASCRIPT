//1.Vamos a ver un BASIC HELLO WORLD. First we write the const below. node js comes with a bunch of built-in modules
//and we need to import them as needed. By default node.js uses commonjs which has this require syntax.
const http = require("http")
//1.1. Or localhost if thats not defined. Or port3000 if that´s not defined.
const HOSTNAME = process.env.HOSTNAME || "localhost" ;
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200
  response.serHeader("Content-Type", "text/plain");
  response.end("Hello World");
});
//1.2.Lastly we need to starrt the server by having it listen on the port and host name provided
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}´);
});
//1.3.Now we go to the terminal, we´ll type `` node server ´´  y si nos vamos a localhost:3000 nos dirá Hello World
