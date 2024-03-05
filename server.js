const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/fetch", async (req, res) => {
  try {
    const url = req.query.url;
    const response = await fetch(url);
    const html = await response.text();
    res.send(html);
  } catch (error) {
    console.error("Error fetching webpage:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
