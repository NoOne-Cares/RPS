import { Router } from "express";
import createUser from "../controllers/user.contrler";

const router = Router()
router.route('/cuser').post(createUser)
export default router