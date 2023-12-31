import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import errorHandle from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created succcessfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandle(404, "User not Found"));
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandle(401, "Wrong Credentials"));
      const token = jwt.sign({ _id: validUser._id }, process.env.SECRET_KEY);
      const {password: pass, ...rest} = validUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
  } catch (error) {
    next(error);
  }
};
