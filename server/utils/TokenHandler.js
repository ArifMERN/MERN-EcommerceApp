const sendToken = (user, statusCode, res) => {
  const token = user.getJWT(user._id, user.isAdmin);
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("accessToken", token, options);
  const { password, ...info } = user._doc;
  res.status(statusCode).json({
    success: true,
    message: info,
  });
};

export default sendToken;
