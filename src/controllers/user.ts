import { Router, Request, Response } from "express";

class UserController {
  public basePath = "/user";

  private router = Router();

  constructor() {
    this.router.get("/all", this.getAllUser);
  }

  private getAllUser(req: Request, res: Response) {
    res.send({
      users: [],
    });
  }
}

export { UserController };
