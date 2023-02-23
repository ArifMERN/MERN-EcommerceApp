import response from "../utils/Response.js";
import jwt from "jsonwebtoken";
const Authenticator = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) response(res, 401, false, "user not authenticated");
  else {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        response(res, 403, false, "Token expired try login!");
      } else {
        req.payload = payload;
        next();
      }
    });
  }
};

export default Authenticator;
