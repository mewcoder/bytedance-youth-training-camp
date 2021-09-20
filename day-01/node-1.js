const fs = require("fs");
const http = require("http");

http
  .createServer()
  .on("request", (request, response) => {
    let url = request.url;
    if (url === "/") {
      response.end("hello");
    } else if (url === "/r") {
      fs.readFile("../README.md", function (error, data) {
        if (error) {
          response.end("文件读取失败");
        } else {
          response.end(data);
        }
      });
    } else {
      response.end("404");
    }
  })
  .listen(3000, function () {
    console.log("server start on port 3000...");
  });
