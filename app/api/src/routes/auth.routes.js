import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";


const router = Router();

router.route('/auth/signin')
   .post(AuthController.signin);

router.route('/auth/signout')
   .get(AuthController.signout);

export default router;