import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes";

dotenv.config();
const app: express.Application = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(route);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});

export default app;
