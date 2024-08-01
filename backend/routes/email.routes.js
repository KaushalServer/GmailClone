import express from 'express'
import { sendMail, allMail, deleteMail } from '../controllers/email.controller.js'

const router = express.Router()

router.post("/send", sendMail)
router.get("/", allMail)
router.delete("/:id", deleteMail)


export default router