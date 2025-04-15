import Mailbox from "../../lib/Entities/Mailbox"

export default defineEventHandler(async (event) => {

  return await Mailbox.findAll()
})