const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const grammarRouter = require("./routes/grammarCheck");
const rephraseRouter = require("./routes/rephrasing");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/grammarCheck", grammarRouter);
app.use("/api/rephrasing", rephraseRouter);

app.listen(PORT, console.log(`Server Running on PORT ${PORT}`));
