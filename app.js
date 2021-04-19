import express from "express";
import config from "config";
import 

const app = express();
const PORT = config.get("app.port");

// Initialize middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Listening on port 3000 by default
app.listen(PORT, console.log(`Server is listening on PORT ${PORT}`));
