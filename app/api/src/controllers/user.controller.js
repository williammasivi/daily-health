import userSchema from "../models/user.model.js";
import isValidEmail from '../utils/isValidEmail.js';
import isValidInput from '../utils/isValidInput.js';
import isValidPassword from '../utils/isValidPassword.js';
import { encryptPassword } from "../models/user.model.js";
import client from "../client.js";

export default class UserController {
   static async create(req, res) {
      /*
     ===================================================================================
     CREATE A NEW USER | REGISTER USER
     ===================================================================================
     */
      const { userEmail, userPassword, userName } = req.body;
      try {
         if (!isValidEmail(userEmail)) {
            res.status(400).json({ message: 'Invalid email adress' });
            return;
         }
         if (!isValidInput(userName)) {
            res.status(400).json({ message: 'Enter a name' });
            return;
         }
         if (!isValidPassword(userPassword)) {
            res.status(400).json({ message: 'The password must be at least 6 characters long, must contain at least one letter, must contain at least one number and must not be an empty string' });
            return;
         }
         /**
          * hash password in order to store it in the data
          * warning: Don't store plain text into a database
          */
         const hashPassword = await encryptPassword(userPassword);
         const user = await userSchema.create({
            data: { userEmail, userPassword: hashPassword, userName },
         });
         res.status(201).json({
            status: "created",
            message: "Registration successful",
            data: {
               // accessToken: ,
               userId: user.userId,
               userName: user.userName,
               userEmail: user.userEmail
            }
         });
      } catch (error) {
         res.status(400).json({
            status: "Bad request",
            message: "Registration unsuccessful",
            statusCode: 400,
            error: error.message
         });
      } finally {
         await client.$disconnect();
      }

   }

   static async list(_, res) {
      /*
      ===================================================================================
      GET ALL USERS
      ===================================================================================
      */
      try {
         const allUsers = await userSchema.findMany({
            select: {
               userId: true,
               userName: true,
               userEmail: true,
               created: true,
               updated: true
            }
         });
         if (!allUsers) {
            res.send('cannot retrieve all users!');
            return;
         }
         res.status(200).json({
            status: "OK",
            message: 'retrieve all users succesfully',
            users: allUsers,
         });
      } catch (error) {
         res.status(400).json({
            status: "Bad request",
            message: "failed to retrieve all users",
            statusCode: 400,
            error: error.message
         });
      } finally {
         await client.$disconnect();
      }
   }

   static async userById(req, res, next, userId) {
      /*
      ===================================================================================
      GET A SPECIFIC USER BY ID
      ===================================================================================
      */
      try {
         const user = await userSchema.findUnique({
            where: {
               userId: userId
            }
         });
         if (!user) {
            res.status(400).json('user not found!');
            return;
         }
         req.profile = user;
         next();
      } catch (error) {
         res.status(400).json({
            statusCode: 400,
            message: 'Could not retrieve user',
            error: error.message
         });
      } finally {
         await client.$disconnect();
      }
   }

   static read(req, res) {
      req.profile.role = null;
      req.profile.userPassword = null;
      res.send(req.profile);
   }

   static async update(req, res) {
      const { userName, userEmail, userPassword } = req.body;
      try {
         let user = req.profile;
         const id = user.userId;
         await userSchema.update({
            where: {
               userId: id
            },
            data: {
               userName: userName,
               userEmail: userEmail,
               userPassword: userPassword,
               // updated: Date.now().toLocaleString() how to handle date errors in my code
            }
         })
         user.userPassword = null;
         user.role = null;
         res.json(user);
      } catch (error) {
         res.status(400).json({
            status: 'Bad request',
            message: 'Failed to update user information',
            statusCode: 400,
            error: error.message
         });
      }
   }

   static async remove(req, res) {
      try {
         const user = req.profile;
         await userSchema.delete({
            where: {
               userId: user.userId
            }
         });
         user.userPassword = undefined;
         user.role = null;
         res.json(user);
      } catch (error) {
         res.status(400).json({
            statusCode: 400,
            message: 'Failed to delete!',
            error: error.message
         })
      }
   }
}