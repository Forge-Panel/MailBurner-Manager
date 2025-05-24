<script setup lang="ts">
  import useLogo from "~/composables/logo";
  
  const runtimeConfig = useRuntimeConfig()
  
  const accountStore = useAccountStore()
  
  const { logoUrl } = useLogo();
</script>

<template>
  <v-navigation-drawer v-model="accountStore.showMenu" :temporary="$vuetify.display.mobile">
    <v-select
      class="ma-4"
      label="Mailbox"
      :items="['johndoe@gmail.com', 'johndoe@outlook.com']"
      variant="underlined"
    />
    <v-divider />
    <v-list density="compact" nav>
      <v-list-item :title="$t('aside.nav.dashboard')" prepend-icon="i-mdi:view-dashboard" to="/" title="Dashboard" />
      <v-list-item :title="$t('aside.nav.folders')" prepend-icon="i-mdi:folder" to="/folders" title="Folders" />
      <v-list-item :title="$t('aside.nav.flows')" prepend-icon="i-mdi:source-branch" to="/flows" title="Flows" />
      <v-list-item :title="$t('aside.nav.logs')" prepend-icon="i-mdi:text-long" to="/logs" title="Logs" />
    </v-list>
    <template #append>
      <v-divider />
      <v-footer class="flex-column align-start ga-4">
        <p>MailBurner V{{ runtimeConfig.public.version }}</p>
        <a class="d-inline w-auto" href="https://github.com/Forge-Panel/AI" target="_blank"><img class="w-50" :src="logoUrl" alt="Forge Logo"></a>
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