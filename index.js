import http from "http";
import fs from "fs";

// Helper function to serve files
const serveFile = (res, path, contentType) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 Internal Server Error");
    }
    res.writeHead(200, { "Content-Type": contentType });
    return res.end(data);
  });
};

// Create a local server
http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        serveFile(res, "./pages/index.html", "text/html");
        break;
      case "/contact-me":
        serveFile(res, "./pages/contact-me.html", "text/html");
        break;
      case "/about":
        serveFile(res, "./pages/about.html", "text/html");
        break;
      default:
        serveFile(res, "./pages/404.html", "text/html");
        break;
    }
  })
  .listen(8000, () => console.log("Server running on http://localhost:8000"));
