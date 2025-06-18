<script setup lang="ts">
import {defineAsyncComponent} from "vue";

const {id} = defineProps<{
  id: number
}>()

const mailboxStore = useMailboxStore()

const isValid = ref<boolean>(false)
const connConfig = ref<Record<string, string | number | boolean | null>>({})
const providerSetup = shallowRef(null)

const { data: mailbox, status, execute, clear } = useLazyAsyncData(() => mailboxStore.fetchMailbox(id))

watchEffect(() => {
})

// Show/hide dialog
const showDialog = ref(false)
const isLoading = ref(false)

async function show() {
  await execute()
  
  if (!mailbox.value) {
    providerSetup.value = null
    return
  }
  showDialog.value = true
  
  providerSetup.value = defineAsyncComponent(() =>
    import((`~/components/Mailbox/ProviderSetup/${mailbox.value?.type}.vue`))
  )
  
  connConfig.value = mailbox.value.config || {}
}

function close() {
  showDialog.value = false
  providerSetup.value = null
  connConfig.value = {}
  
  clear()
}

async function sendUpdate() {
  isLoading.value = true
  
  if (!mailbox.value) {
    return
  }
  
  await mailboxStore.updateMailbox(id, {
    name: mailbox.value.name,
    type: mailbox.value.type,
    config: connConfig.value
  })
  
  isLoading.value = false
  showDialog.value = false
}
</script>

<template>
  <v-dialog v-model="showDialog">
    <template #activator>
      <v-btn
        icon="i-mdi:edit"
        size="small"
        variant="flat"
        @click="show()"
      />
    </template>
    <template v-if="mailbox && status === 'success'" #default>
      <v-card
        max-width="1000"
        class="mx-auto"
        :title="$t('mailboxes.updateConnection.title')"
        :text="$t('mailboxes.updateConnection.text', mailbox)"
        :loading="isLoading">
        <v-card-text>
          <template v-if="providerSetup">
            <component :is="providerSetup" v-model="isValid" v-model:config="connConfig" />
          </template>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="!isValid" color="blue" :text="$t('mailboxes.updateConnection.btnSend')" @click="sendUpdate()" />
          <v-btn :text="$t('mailboxes.updateConnection.btnCancel')" @click="close()" />
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
          <v-btn disabled color="blue" :text="$t('mailboxes.updateConnection.btnSend')" />
          <v-btn disabled :text="$t('mailboxes.updateConnection.btnCancel')" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>