<script setup lang="ts">
  import useLogo from "~/composables/logo";
  
  const { t } = useI18n()
  
  const mailboxStore = useMailboxStore()
  const currentMailboxStore = useCurrentMailboxStore()
  const { currentMailbox } = storeToRefs(currentMailboxStore)
  
  useAsyncData('mailboxReadAll', () => mailboxStore.readAllMailboxes())
  
  
  const runtimeConfig = useRuntimeConfig()
  
  const accountStore = useAccountStore()
  
  const { logoUrl } = useLogo();
  
  const availableMailboxes = computed(() => {
    return currentMailboxStore.allAvailableMailboxes.map(mailbox => ({
      title: mailbox.name,
      value: mailbox.id,
    }))
  })
</script>

<template>
  <v-navigation-drawer v-model="accountStore.showMenu" :temporary="$vuetify.display.mobile">
    <v-select
      class="ma-4"
      :label="t('aside.currentMailbox')"
      :placeholder="t('aside.currentMailboxPlaceholder')"
      variant="underlined"
      :items="availableMailboxes"
      :model-value="currentMailbox ? currentMailbox.id : null"
      @update:model-value="currentMailboxStore.select"
    />
    <v-divider />
    <v-list density="compact" nav>
      <v-list-item :disabled="!currentMailbox" :title="$t('aside.nav.dashboard')" prepend-icon="i-mdi:view-dashboard" to="/" />
      <v-list-item :disabled="!currentMailbox" :title="$t('aside.nav.folders')" prepend-icon="i-mdi:folder" to="/folders" />
      <v-list-item :disabled="!currentMailbox" :title="$t('aside.nav.rules')" prepend-icon="i-mdi:order-alphabetical-ascending" to="/rules" />
      <v-list-item :disabled="!currentMailbox" :title="$t('aside.nav.logs')" prepend-icon="i-mdi:text-long" to="/logs" />
    </v-list>
    <template #append>
      <v-divider />
      <v-footer class="flex-column align-start ga-4">
        <p>MailBurner V{{ runtimeConfig.public.version }}</p>
        <a class="d-inline w-auto" href="https://github.com/Forge-Panel/MailBurner" target="_blank"><img class="w-50" :src="logoUrl" alt="Forge Logo"></a>
      </v-footer>
    </template>
  </v-navigation-drawer>
  <v-fab
    v-if="$vuetify.display.mobile"
    style="z-index: 100"
    class="ma-4 pb-4 position-fixed bottom-0 right-0"
    icon="i-mdi:menu"
    location="bottom right"
    size="large"
    @click="accountStore.toggleMenu()"
  />
</template>

<style scoped>

</style>