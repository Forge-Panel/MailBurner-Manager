<script setup lang="ts">
const configImap = useState('configImap', () => {
  return {
    hostname: '',
    port: 993,
    username: '',
    password: '',
    tls: true
  }
})

const loading = ref(false);

function submit() {
  loading.value = true
}

async function testConnection() {
  loading.value = true
  
  const response = await $fetch('/api/mailbox/provider/imap/test_connection', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: configImap.value
  })
  
  console.log(response)
  
  loading.value = false
}
</script>

<template>
  <v-form validate-on="submit lazy" @submit.prevent="submit">
    <v-text-field
      v-model="configImap.hostname"
      :label="$t('mailboxes.newConnection.providersSetup.imap.inputHostname')"
    />
    <v-number-input
      v-model="configImap.port"
      control-variant="hidden"
      :label="$t('mailboxes.newConnection.providersSetup.imap.inputPort')"
    />
    <v-text-field
      v-model="configImap.username"
      :label="$t('mailboxes.newConnection.providersSetup.imap.inputUsername')"
    />
    <v-text-field
      v-model="configImap.password"
      :label="$t('mailboxes.newConnection.providersSetup.imap.inputPassword')"
    />
    <v-switch
      v-model="configImap.tls"
      :label="$t('mailboxes.newConnection.providersSetup.imap.toggleTls')"
    />
    <v-btn :text="$t('mailboxes.newConnection.providersSetup.imap.btnTestConnection')" @click="testConnection" />
  </v-form>
</template>

<style scoped>

</style>