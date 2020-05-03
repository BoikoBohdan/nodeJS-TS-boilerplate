import { Schema, model } from "mongoose";
import { IUser } from "./user.iterface";

const UserSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minlength: [4, "First Name too short"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    minlength: [4, "Last Name too short"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "This email exist in the system. Choose another!"],
    minlength: [4, "Email too short"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password too short"],
  },
});

const UserModel = model<IUser>("User", UserSchema);

export { UserModel };
