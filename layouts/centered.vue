<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const accountStore = useAccountStore()
const theme = useTheme()
const preferredDark = usePreferredDark()

watchEffect(() => {
  switch (accountStore.currentTheme) {
    case 'light':
      theme.global.name.value = 'light';
      break;
    case 'dark':
      theme.global.name.value = 'dark';
      break;
    default:
      theme.global.name.value = preferredDark.value ? 'dark' : 'light';
      break;
  }
})
</script>

<template>
  <v-app :style="{backgroundColor: $vuetify.theme.name === 'light' ? '#ececec' : undefined}">
    <v-layout class="d-flex align-center justify-center">
      <div class="d-flex flex-column align-center justify-center ga-8">
        <NuxtPage />
        <v-footer class="d-flex flex-column justify-center" style="background: none;">
          <p>MailBurner V{{ runtimeConfig.public.version }}</p>
          <a class="d-inline w-auto" href="https://github.com/Forge-Panel/MailBurner" target="_blank"><v-btn icon="i-mdi:github" :base-color="$vuetify.theme.name === 'dark' ? 'white' : 'black'" variant="plain"/></a>
        </v-footer>
      </div>
    </v-layout>
  </v-app>
</template>

<style scoped>

</style>