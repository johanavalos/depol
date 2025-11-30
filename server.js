import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js server!");
});

app.get("/hola", (req, res) => {
  res.send("Hola from Node.js server!");
});

app.get("/chao", (req, res) => {
  res.send("Chao from Node.js server!");
});

app.listen(PORT, () => {
  console.log(`Server running 3 on http://localhost:${PORT}`);
});
