<script setup lang="ts">
const {id} = defineProps<{
  id: number
}>()

const mailboxStore = useMailboxStore()

const { data, status, error } = useAsyncData('mailboxFetch', () => mailboxStore.fetchMailbox(id))

// Show/hide dialog
const showDialog = ref(false)
const isLoading = ref(false)

function show() {
  showDialog.value = true
}

function close() {
  showDialog.value = false
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
          color="red"
          icon="i-mdi:trash"
          size="small"
          @click="show()"
      />
    </template>
    <template v-if="data && status === 'success'" #default>
      <v-card
        max-width="1000"
        class="mx-auto"
        :title="$t('mailboxes.deleteConnection.title')"
        :text="$t('mailboxes.deleteConnection.text', data)"
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

<style scoped>

</style>