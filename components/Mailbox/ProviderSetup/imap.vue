<script setup lang="ts">
const model = defineModel<boolean>()
const config = defineModel<object>('config')

const configImap = useState('configImap', () => {
  return {
    hostname: '',
    port: 993,
    username: '',
    password: '',
    tls: true
  }
})

watchEffect(() => {
  model.value = false
  if (configImap.value.hostname === '') {
    return
  }
  if (configImap.value.username === '') {
    return
  }
  if (configImap.value.password === '') {
    return
  }
  model.value = true
  config.value = configImap.value
})
</script>

<template>
  <v-form>
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
  </v-form>
</template>

<style scoped>

</style>