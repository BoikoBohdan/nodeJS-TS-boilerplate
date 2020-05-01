import express, { Request, Response } from "express";

class Server {
  public app = express();

  constructor({ controllers, middlewares }) {
    this.setupMiddlewares(middlewares);
    this.setupController(controllers);
    // this.setupErrorHandler();
  }

  private setupMiddlewares(middlewares) {
    middlewares.forEach((middleware: any) => {
      this.app.use(middleware);
    });
  }

  private setupController(controllers) {
    controllers.forEach((controller: any) => {
      this.app.use(controller.basePath, controller.router);
    });
  }

  private setupErrorHandler() {
    this.app.use((err: any, req: any, res: Response, next: any) => {
      console.log(">>>");
      //   res.status(404).send("Route not found!");
    });
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Server started at port ", process.env.PORT);
    });
  }
}

export { Server };
