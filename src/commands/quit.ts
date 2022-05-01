import { isAdmin } from "../../utils/permission"
import { Context } from "telegraf"

export const quit = async (ctx: Context) => {
  const chatType = ctx.message!.chat.type
  if (chatType === "group" || chatType === "supergroup") {
    if (await isAdmin(ctx)) {
      ctx.reply("Ok Bye! 🙋‍♂️")
      ctx.telegram.leaveChat(ctx.message!.chat.id)
    } else {
      ctx.reply("You don't command me! 🔥")
    }
  } else {
    ctx.reply("You can't do that here 🤷‍♂️")
  }
}
