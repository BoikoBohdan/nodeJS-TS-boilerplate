import dotenv from "dotenv";
import bodyParser from "body-parser";
import { Server } from "./server";
import { controllers } from "./controllers";

dotenv.config();

const server = new Server({
  controllers,
  middlewares: [
    bodyParser.urlencoded({
      extended: true,
    }),
    bodyParser.json(),
  ],
});

server.app.use((err, req, res, next) => {
  console.log("tst");
});

server.listen();
