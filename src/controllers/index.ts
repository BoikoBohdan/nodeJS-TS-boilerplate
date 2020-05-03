import { UserController } from "./user";
import { NotFoundController } from "./notFound";
import { AuthController } from "./AuthController";

export const controllers = [
  new UserController(),
  new AuthController(),
  new NotFoundController(),
];
