import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {

  try {
    const result = await axios.get("https://zenquotes.io/api/today");
    const respond = result.data[0];
    res.render("index.ejs", { content: respond });
  } catch (error) {
    console.error("Failed to make request", error.message);
    res.status(500);
  }

});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});