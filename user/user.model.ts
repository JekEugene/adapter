import { Model, model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema: Schema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

const User: Model<IUser> = model("User", userSchema);

export default User;