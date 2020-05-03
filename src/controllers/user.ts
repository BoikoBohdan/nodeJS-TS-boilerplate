import { Router, Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { ErrorHandler } from "../utils/errorHandler";

class UserController {
  public basePath = "/user";

  private router = Router();

  constructor() {
    this.router.get("/all", this.getAllUser);
    this.router.post("/sign-up", this.createNewUser);
  }

  private async getAllUser(req: Request, res: Response) {
    const users = await UserModel.find({});
    return res.send({ users });
  }

  private async createNewUser(req: Request, res: Response) {
    const user = new UserModel(req.body);
    const validationErrors = user.validateSync();
    if (validationErrors) {
      const normalizedErrors = ErrorHandler.transformMongooseErrors(
        validationErrors
      );
      res.status(422).send(normalizedErrors);
    }
    await user.save();
    res.send(`User with email: ${req.body.email} was saved!`);
  }
}

export { UserController };
