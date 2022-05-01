import { Context } from "telegraf"

export const coin = async (ctx: Context) => {
  ctx.reply(`You got ${Math.random() > 0.5 ? "Heads" : "Tails"} 💰`)
}
