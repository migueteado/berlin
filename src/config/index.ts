import dotenv from "dotenv"

dotenv.config()

const { BOT_TOKEN, CHAT_ID } = process.env

if (!BOT_TOKEN || !CHAT_ID) {
  throw new Error("Missing environment variables")
}

const config: Record<string, string> = {
  BOT_TOKEN,
  CHAT_ID,
}

export default config
