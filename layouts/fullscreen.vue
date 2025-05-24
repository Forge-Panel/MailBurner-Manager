<script setup lang="ts">
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
  <v-app>
    <v-layout>
      <HeaderMenu />
      <SideMenu />
      <v-main>
        <NuxtPage />
      </v-main>
    </v-layout>
  </v-app>
</template>