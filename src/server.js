import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js server!");
});

app.get("/hola", (req, res) => {
  res.send("Holas from Node.js server!");
});

app.get("/chao", (req, res) => {
  res.send("Chaos from Node.js server!");
});

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`Server running 6 at http://localhost:${PORT}`)
  );
}

export default app;
