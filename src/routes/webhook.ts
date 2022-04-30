import express, { Request, Response } from "express"
import config from "../config"
import bot from "../bot"

const router = express.Router()

router.post("/", async (req: Request, res: Response) => {
  try {
    bot.telegram.sendMessage(config.CHAT_ID, req.body.message)
    res.setHeader("Content-Type", "application/json")
    res.setHeader("status", "200")
    res.send(JSON.stringify({ status: "success" }))
  } catch (e) {
    res.setHeader("Content-Type", "application/json")
    res.setHeader("status", "500")
    res.send(JSON.stringify(e))
  }
})

export default router
