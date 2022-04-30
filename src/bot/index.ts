import { Telegraf } from "telegraf"
import config from "../config"
import { coin } from "./commands/coin"
import { dice } from "./commands/dice"
import { quit } from "./commands/quit"

const bot = new Telegraf(config.BOT_TOKEN)
bot.command("quit", quit)
bot.command("coin", coin)
bot.command("dice", dice)
bot.mention("@MoaitoBot", (ctx) => {
  ctx.reply("Que estai hablando mio ahora perro")
})

export default bot
