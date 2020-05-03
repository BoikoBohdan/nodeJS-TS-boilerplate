import { UserModel } from "../models/user.model";
import { pick, map } from "ramda";
import { IUser, IUserLogin } from "../models/user.iterface";
import { ErrorHandler } from "../utils/errorHandler";

export class UserService {
  static pickUserInfo(user: IUser) {
    return pick(["firstName", "lastName", "email"])(user);
  }

  static pickUsersInfo(users: IUser[]) {
    return map(this.pickUserInfo)(users);
  }

  static async getUsersInfoWithOmit(params) {
    const users = await UserModel.find(params);
    return this.pickUsersInfo(users);
  }

  static async validateUserToCreate(user: IUser) {
    const validationErrors = user.validateSync();
    if (validationErrors) {
      const normalizedErrors = ErrorHandler.transformMongooseErrors(
        validationErrors
      );
      return { errors: normalizedErrors };
    }
    const userInDB = await UserModel.find({ email: user.email });
    if (userInDB.length) {
      return { errors: ["User with provided email exist in the system!"] };
    }
    return null;
  }

  static validateUserForLogin(user: IUserLogin) {
    if (!user.email) {
      return { errors: ["Email is required!"] };
    }
    if (!user.password) {
      return { errors: ["Password is required!"] };
    }
    return null;
  }
}
