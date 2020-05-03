import { Router, Request, Response } from "express";
import { UserService } from "../services/userServices";

class UserController {
  public basePath = "/user";
  public requireAuth = true;
  private router = Router();

  constructor() {
    this.router.get("/all", this.getAllUser);
  }

  private async getAllUser(req: Request, res: Response) {
    console.log(req["userId"]);
    const users = await UserService.getUsersInfoWithOmit({});
    return res.send({ users });
  }
}

export { UserController };
