import Mailbox from "../../lib/Entities/Mailbox"

export default defineEventHandler(async (event) => {
  const mailbox = await Mailbox.create({
    name: "Google",
    config: {
      test: '1234'
    },
  })

  return mailbox
})