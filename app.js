const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

// Define a root directory for file serving
const pages = path.join(__dirname, "pages");

// Routes
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: pages });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("contact-me.html", { root: pages });
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: pages });
});

// 404 Catch-All Route
app.use((req, res) => {
  res.status(404).sendFile("404.html", { root: pages });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express app running on http://localhost:${PORT}`);
});
