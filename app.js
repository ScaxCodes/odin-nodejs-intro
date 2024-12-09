const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});
app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "pages", "contact-me.html"))
);
app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "pages", "about.html"))
);

// 404 Catch-All Route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express app running on http://localhost:${PORT}`);
});
