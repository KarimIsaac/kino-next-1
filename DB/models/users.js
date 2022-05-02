import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    token: String,
    isAdmin: Boolean,
    registered: Date
});

const User = models.User || model("user", userSchema);
export default User;