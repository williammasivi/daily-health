import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import AuthController from "../controllers/auth.controller.js";


const router = Router();

router.route('/api/users')
   .get(UserController.list)
   .post(UserController.create);

router.route('/api/users/:userId')
   .get([AuthController.requireSignin, UserController.read])
   .put([AuthController.requireSignin, AuthController.hasAuthorization, UserController.update])
   .delete([AuthController.requireSignin, AuthController.hasAuthorization, UserController.remove]);

router.param('userId', UserController.userById);

export default router;