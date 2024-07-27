import { Router } from "express";
import DoctorController from "../controllers/doctor.controller.js";
import AuthController from "../controllers/auth.controller.js";

const router = Router();

router.route('/api/doctors')
   .get(DoctorController.list)
   .post(DoctorController.create);

router.route('/api/users/:doctorId')
   .get([AuthController.requireSignin, DoctorController.read])
   .put([AuthController.requireSignin, AuthController.hasAuthorization, DoctorController.update])
   .delete([AuthController.requireSignin, AuthController.hasAuthorization, DoctorController.remove]);

router.param('doctorId', DoctorController.doctorById);


export default router;