import { Context } from "telegraf"

export const isCreator = async (ctx: Context) => {
  const { message, telegram } = ctx
  const member = await telegram.getChatMember(
    message!.chat.id,
    message!.from.id
  )
  return member && member.status === "creator"
}

export const isAdmin = async (ctx: Context) => {
  const { message, telegram } = ctx
  const member = await telegram.getChatMember(
    message!.chat.id,
    message!.from.id
  )
  return (
    member && (member.status === "creator" || member.status === "administrator")
  )
}
