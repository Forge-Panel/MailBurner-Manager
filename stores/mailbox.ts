import {defineStore} from "pinia"

type MailboxBase = {
  name: string,
  type: string,
  config: Record<string, string | number | boolean | null>
}

export type Mailbox = MailboxBase & {
  id: number,
  createdAt: Date,
  updatedAt: Date,
}

export const useMailboxStore = defineStore('mailbox', () => {
  const mailboxesMap = useState('mailboxStoreMap', () => new Map<number, Mailbox>())

  async function createNewMailbox(mailbox: MailboxBase) {
    const data = await $fetch<Mailbox>('/api/mailboxes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: mailbox
    });

    mailboxesMap.value.set(data.id, data)
  }

  async function readAllMailboxes() {
    const data = await $fetch<Mailbox[]>('/api/mailboxes')

    for (const mailbox of data) {
      mailboxesMap.value.set(mailbox.id, mailbox)
    }

    return data
  }

  async function fetchMailbox(id: number, force = false) {
    if (!force && mailboxesMap.value.has(id)) {
      return mailboxesMap.value.get(id)
    }

    const mailbox = await $fetch<Mailbox>(`/api/mailboxes/${id}`)


    mailboxesMap.value.set(mailbox.id, mailbox)

    return mailbox
  }

  async function updateMailbox(id: number, mailboxBody: Mailbox) {
    const mailbox = await $fetch<Mailbox>(`/api/mailboxes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: mailboxBody
    });

    mailboxesMap.value.set(mailbox.id, mailbox)

    return mailbox
  }

  async function deleteMailbox(id: number) {
    await $fetch<Mailbox>(`/api/mailboxes/${id}`, {
      method: 'DELETE'
    });

    mailboxesMap.value.delete(id)
  }

  const mailboxes = computed(() => {
    return Array.from(mailboxesMap.value.values())
  })


  return {mailboxes, createNewMailbox, readAllMailboxes, fetchMailbox, updateMailbox, deleteMailbox}
});