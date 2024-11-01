import express from "express";
import { json } from "body-parser";
import colors from "colors";

const app = express();
app.use(json());

app.listen(3000, () => {
  console.log(
    `${colors.cyan("[Auth]")} listening on port: ${colors.cyan("3000")}!`
  );
});
