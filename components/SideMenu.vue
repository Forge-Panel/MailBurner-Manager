<script setup lang="ts">
  import useLogo from "~/composables/logo";
  
  const runtimeConfig = useRuntimeConfig()
  
  const [showMenu, toggleMenu] = useToggle(true);
  
  const { logoUrl } = useLogo();
</script>

<template>
  <v-navigation-drawer v-model="showMenu" :temporary="$vuetify.display.mobile">
    <v-row class="pa-4" align="center" justify="space-between">
      <v-col cols="auto">
        <v-btn icon="i-mdi:menu-open" variant="text" @click="toggleMenu()"/>
      </v-col>
      <v-col cols="auto">
        <h1>MailBurner</h1>
      </v-col>
    </v-row>
    <v-divider />
    <v-select
      class="ma-4"
      label="Mailbox"
      :items="['johndoe@gmail.com', 'johndoe@outlook.com']"
      variant="underlined"
    ></v-select>
    <v-list density="compact" nav>
      <v-list-item :title="$t('aside.nav.dashboard')" prepend-icon="i-mdi:view-dashboard" to="/" title="Dashboard" value="dashboard" />
      <v-list-item :title="$t('aside.nav.folders')" prepend-icon="i-mdi:folder" to="/folders" title="Folders" value="folder" />
      <v-list-item :title="$t('aside.nav.flows')" prepend-icon="i-mdi:source-branch" to="/flows" title="Flows" value="flows" />
      <v-list-item :title="$t('aside.nav.logs')" prepend-icon="i-mdi:text-long" to="/logs" title="Logs" value="logs" />
    </v-list>
    <template #append>
      <v-divider />
      <div class="pa-4 d-flex ga-4">
        <v-btn :title="$t('aside.nav.logout')" icon="i-mdi:logout" variant="text"/>
        <v-btn :title="$t('aside.nav.settings')" to="/settings" icon="i-mdi:cog" variant="text"/>
      </div>
      <v-footer class="flex-column align-start ga-4">
        <p>MailBurner V{{ runtimeConfig.public.version }}</p>
        <a class="d-inline w-auto" href="https://github.com/Forge-Panel/AI" target="_blank"><img class="w-50" :src="logoUrl" alt="Forge Logo"></a>
      </v-footer>
    </template>
  </v-navigation-drawer>
  <v-fab
    style="z-index: 100"
    :class="{'ma-4 pb-4': true, 'position-fixed bottom-0 right-0': $vuetify.display.mobile}"
    :icon="$vuetify.display.mobile ? 'i-mdi:menu' : 'i-mdi:menu-close'"
    :location="$vuetify.display.mobile ? 'bottom right' : 'top left'"
    :size="$vuetify.display.mobile ? 'large' : undefined"
    :absolute="!$vuetify.display.mobile"
    @click="toggleMenu()"
  />
</template>

<style scoped>

</style>