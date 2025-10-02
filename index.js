import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Sert les fichiers statiques (HTML, JS, CSS) depuis /public
app.use(express.static("public"));

app.get("/health", (req, res) => res.send("OK"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
