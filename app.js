const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const req_method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<title>");
    res.write("<title>Message</title>");
    res.write("<body>");
    res.write(
      "<form action='/message' method='POST'><input type='text' name='message' /><button type='submit'>Send</button></form>"
    );
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/message" && req_method === "POST") {
    const data = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      data.push(chunk);
    });

    req.on("end", () => {
      const parsedData = Buffer.concat(data).toString();
      console.log(parsedData);
      const message = parsedData.split("=")[1];

      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<title>");
  res.write("<title>Home Page</title>");
  res.write("<body><h1>It's my first node response</h1></body>");
  res.write("</html>");

  res.end();
});

server.listen(3000);
