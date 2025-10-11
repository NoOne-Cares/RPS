import { Router } from "express";
import { logoutHandler, meHandler, nonceHandler, verifyHandler } from "../controllers/Auth.controler";

const router = Router()
router.route('/nonce').get(nonceHandler)
router.route('/verify').post(verifyHandler)
router.route('/logout').get(logoutHandler)
router.route('/isAuthinticated').get(meHandler)
export default router