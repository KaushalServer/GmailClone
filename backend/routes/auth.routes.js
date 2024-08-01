import express from 'express'
import { google, logout, signin, signup } from '../controllers/auth.controller.js'


const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.post("/signout", logout)
router.post("/google", google)

export default router