import Mailbox from "~/server/lib/Entities/Mailbox";

export default defineEventHandler(async () => {
    return await Mailbox.findAll();
})