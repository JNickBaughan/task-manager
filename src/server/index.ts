import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
let PORT = 3000;
let server: Application = express();

const middlewares = [
  express.static("dist"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
];

server.use(...middlewares);

server.get("/", (_: Request, res: Response) => {
  res.status(200).send(
    `<!DOCTYPE html>
        <html>
        <head></head>
        <body>
            <div id="root" />
            <script src="bundle.js"></script>
        </body>
        </html>
    `
  );
});

server.listen(PORT, function () {
  console.log("server listening on port: " + PORT);
});
