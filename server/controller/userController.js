import User from "../model/userModel.js";
import response from "../utils/Response.js";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return response(res, 400, false, "user not found");

  if (user?._id.toString() === req.payload.id || req.payload.isAdmin) {
    await User.findByIdAndDelete(req.params.id);
    response(res, 200, true, "user deleted!");
  } else {
    response(res, 403, false, "You can delete your account only");
  }
};
export const changePassword = async (req, res) => {};
export const updateUser = async (req, res) => {};
