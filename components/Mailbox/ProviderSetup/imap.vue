<script setup lang="ts">
const { t } = useI18n();

const model = defineModel<boolean>()
const config = defineModel<{
  hostname: string,
  port: number,
  username: string,
  password: string,
  tls: boolean
}>('config')

const configImap = ref({
  hostname: '',
  port: 993,
  username: '',
  password: '',
  tls: true
})

onMounted(() => {
  if (!config.value) {
    return
  }
  
  configImap.value = config.value
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
      :label="t('mailboxes.newConnection.providersSetup.imap.inputHostname')"
    />
    <v-number-input
      v-model="configImap.port"
      control-variant="hidden"
      :label="t('mailboxes.newConnection.providersSetup.imap.inputPort')"
    />
    <v-text-field
      v-model="configImap.username"
      :label="t('mailboxes.newConnection.providersSetup.imap.inputUsername')"
    />
    <v-text-field
      v-model="configImap.password"
      type="password"
      :label="t('mailboxes.newConnection.providersSetup.imap.inputPassword')"
    />
    <v-switch
      v-model="configImap.tls"
      :color="configImap.tls ? 'primary' : undefined"
      :label="t('mailboxes.newConnection.providersSetup.imap.toggleTls')"
    />
  </v-form>
</template>

<style scoped>

</style>