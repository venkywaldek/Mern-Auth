import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;  // Ensure cookies are being sent

  if (token) {
    try {
      // Decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user by ID and exclude the password field
      req.user = await User.findById(decoded.userId).select('-password');
      
      // Proceed to next middleware if user found
      if (!req.user) {
        res.status(404);
        throw new Error('User not found');
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not Authorized, token verification failed');
    }
  } else {
    res.status(401);
    throw new Error('Not Authorized, no token');
  }
});

export { protect };
