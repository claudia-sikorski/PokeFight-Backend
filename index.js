import app from "./app.js";
import pool from "./db/client.js";

const port = process.env.PORT || 8080;

app.get("/", async (req, res) => res.send(`Connected to SQL database`));

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
