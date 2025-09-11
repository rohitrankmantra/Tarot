// server.js
const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000; // cPanel/Passenger port lega
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// App prepare and start
app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`🚀 Tarot Website running on http://localhost:${port}`);
  });
});
