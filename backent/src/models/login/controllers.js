import { errorHandler } from "../../errors/errorHandler.js";
import jwt from "../../lib/jwt.js";
import { loginuser } from "../../validate/validate.js";
import { USERFUNC } from "./model.js";

const LOGINPOST = async (req, res, next) => {
  const { error, value } = loginuser.validate(req.body);
  if (error) {
    return next(new errorHandler(error.message, 400));
  }

  const { username, password } = value

  const user = await USERFUNC().catch((error) =>
    next(new errorHandler(error.message, 500))
  );

  const userfind = user.find(e => e.username == username && e.password == password)

  if(!userfind) {
    return next(new errorHandler("You are entering the wrong user and password", 500))
  }


  if(userfind) {
    res.status(200).json({
        message: "Success",
        token: jwt.sing({userId: user.userfind}),
        status:200
    })
  }

};

export { LOGINPOST };
