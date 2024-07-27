import { Router } from "express";

const router = Router();


router.route('/api/horaires', function (req, res) {
   res.send('all doctors');
});


export default router;