import Mailbox from "~/server/lib/Entities/Mailbox";

export default defineEventHandler(async (event) => {
    const mailboxId = getRouterParam(event, 'id')

    const mailbox = await Mailbox.findOne({ where: { id: mailboxId } });

    if (!mailbox) {
        throw createError({
            status: 404,
            statusMessage: "Not found",
            message: `Mailbox ${mailboxId} does not exist`
        });
    }

    await mailbox.destroy();
})