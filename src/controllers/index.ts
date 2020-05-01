import { UserController } from "./user";
import { NotFoundController } from "./notFound";

export const controllers = [new UserController(), new NotFoundController()];
