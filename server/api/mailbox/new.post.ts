import Mailbox from "~/server/lib/Entities/Mailbox";

export default defineEventHandler(async (event) => {
    const body = await readBody<{
        name: string,
        config: object,
    }>(event)

    return await Mailbox.create(body)
});