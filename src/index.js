import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/index.js";
const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
