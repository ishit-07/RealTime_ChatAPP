import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.model.js"

// 

// next is used for calling the other function like updateProfile
export const protectRoute = async (req,res,next) => {
  try {

    // first we check if there is token or not
    const token = req.cookies.jwt;

    if(!token){
        return res.status(401).json({message: "Unauthorized - No Token Provided"});
    }

    // we have to parse the token value that's why we are using cookie parser
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded){
        return res.status(401).json({message: "Unauthorized - Invalid Token"});
    }

    // validate the jwt 
    // we are using "select" to select everything from user but except the password
    // we are using this deselect function becuase we don't really want to send the password back to the client
    const user = await User.findById(decoded.userId).select("-password")

    if(!user){
        return res.status(401).json({message: "User not found"});
    }

    // if we just passed everything that mean's now user is authenticated
    req.user = user;

    next();

  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({message: "Internal Server Error"});
  }

}