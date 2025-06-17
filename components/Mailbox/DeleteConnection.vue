<script setup lang="ts">
const {id} = defineProps<{
  id: number
}>()

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

  await $fetch(`/api/mailbox/${id}`, {
    method: 'DELETE',
  });

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
    <template #default>
      <v-card
          max-width="1000"
          class="mx-auto"
          :title="$t('mailboxes.deleteConnection.title')"
          text="Are you sure you want to delete the connection?"
          :loading="isLoading">
        <v-card-actions>
          <v-btn color="red" :text="$t('mailboxes.deleteConnection.btnSend')" @click="sendDelete()" />
          <v-btn :text="$t('mailboxes.deleteConnection.btnCancel')" @click="close()" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>