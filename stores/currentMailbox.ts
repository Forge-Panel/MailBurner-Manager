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

export const useCurrentMailboxStore = defineStore('currentMailbox', () => {
  const mailboxStore = useMailboxStore()
  const router = useRouter()

  const currentMailbox = useState<Mailbox | null>('currentMailbox', () => null)

  const allAvailableMailboxes = computed(() => {

    return mailboxStore.mailboxes
  })

  function select(id: number) {
    const mailbox = mailboxStore.getMailboxById(id)

    if (!mailbox) {
      throw new Error(`Mailbox ${id} does not exist`)
    }

    currentMailbox.value = mailbox
  }

  function deselect() {
    currentMailbox.value = null
    router.push('/')
  }

  mailboxStore.$onAction(
    ({
       name,
       args,
       after
     }) => {
      if (name !== 'deleteMailbox' || args.length !== 1) {
        return
      }

      if (!currentMailbox.value) {
        return
      }

      after(() => {
        if (args[0] === currentMailbox.value?.id) {
          deselect()
        }
      })
    }
  )

  return {currentMailbox, allAvailableMailboxes, select, deselect}
});