<script setup lang="ts">
const {id} = defineProps<{
  id: number
}>()

const mailboxStore = useMailboxStore()

const { data: mailbox, status, execute, clear } = useLazyAsyncData(() => mailboxStore.fetchMailbox(id))

// Show/hide dialog
const showDialog = ref(false)
const isLoading = ref(false)

async function show() {
  showDialog.value = true
  
  await execute()
}

function close() {
  showDialog.value = false
  
  clear()
}

async function sendDelete() {
  isLoading.value = true

  await mailboxStore.deleteMailbox(id)
  
  isLoading.value = false
  showDialog.value = false
}
</script>

<template>
  <v-dialog v-model="showDialog">
    <template #activator>
      <v-btn
          icon="i-mdi:trash"
          size="small"
          variant="flat"
          @click="show()"
      />
    </template>
    <template v-if="mailbox && status === 'success'" #default>
      <v-card
        max-width="1000"
        class="mx-auto"
        :title="$t('mailboxes.deleteConnection.title')"
        :text="$t('mailboxes.deleteConnection.text', mailbox)"
        :loading="isLoading">
        <v-card-actions>
          <v-btn color="red" :text="$t('mailboxes.deleteConnection.btnSend')" @click="sendDelete()" />
          <v-btn :text="$t('mailboxes.deleteConnection.btnCancel')" @click="close()" />
        </v-card-actions>
      </v-card>
    </template>
    <template v-else-if="status === 'pending'" #default>
      <v-card
        max-width="1000"
        class="mx-auto">
        <v-card-text>
          <v-skeleton-loader type="list-item-two-line" width="300"/>
        </v-card-text>
        <v-card-actions>
          <v-btn disabled color="red" :text="$t('mailboxes.deleteConnection.btnSend')" />
          <v-btn disabled :text="$t('mailboxes.deleteConnection.btnCancel')" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>