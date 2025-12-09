import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  // this is for creating JsonWebToken
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // send in cookie
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    secure: true, // HTTPS only
    sameSite: "none", // allow cross-site cookies
    path: "/", // cookie valid for all routes
  });

  return token;
};
