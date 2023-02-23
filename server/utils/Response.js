const response = (res, statusCode, success, message) => {
  return res.status(statusCode).json({ success: success, message: message });
};
export default response;
