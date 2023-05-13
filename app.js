const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  // Event loop:
  // Node uses a concept called event loop, actually it is a process that keeps on running as long as there are event listeners are registered. So, we registered the event createServer and it will keep running, actually node is single threaded. And this event loop help it to listen of hundred of thousands of requests.

  // we can unregister the event, with hard exit.
  process.exit();
});

server.listen(3000);
