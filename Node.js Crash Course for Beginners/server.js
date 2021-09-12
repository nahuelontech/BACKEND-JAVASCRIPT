//2. We r gonna put everything that we´ve learned all together. We r gonna send and HTML file so we need to
//access that file. In order to do that we need to import the file system module. So create const fs and ofc const server.

const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
//3. Let´s look at some basic routing. Right now we´re sending this file no matter what url or method that we r using.
//If we´d go to the browser, localhost: and if we write slash about we´r still getting the same file/webpage. We wanna be able
// to route certain files to certain urls. 
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
//3.1. Después de definir las rutas, solo tenemos q escribir los html asociados.
  let path = "./";
  switch (req.url) {
    case "/": // if its the route directory
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about": // in case if we write this in the browser. WWe allow it it visit this /about
      path += "about.html";
      res.statusCode = 200;
      break;
    default: //tmb podemos cambiar esto pero por ahora no me interesa
      path += "404.html";
      res.statusCode = 404;
      break;
  }
//2.1. This is if u wanna read the file. Iinicialmente iba debajo de setheader.
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});
//FINAL.en vez de parar nuestro servidor y reestablecerlo, nodemon nos deja hacerlo automatico.
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
