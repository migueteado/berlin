import { Context, deunionize } from "telegraf"

export const dice = async (ctx: Context) => {
  const n = deunionize(ctx.message)?.text?.split(" ")
  let sides = 6
  if (n && n.length > 1 && !isNaN(parseInt(n[1]))) {
    sides = parseInt(n[1])
  }

  ctx.reply(`You rolled a ${Math.floor(Math.random() * sides) + 1} 🎲`)
}
