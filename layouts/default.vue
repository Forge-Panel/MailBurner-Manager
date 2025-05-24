<script setup lang="ts">
const accountStore = useAccountStore()
const theme = useTheme()
const preferredDark = usePreferredDark()

watchEffect(() => {
  console.log(accountStore.currentTheme)
  console.log(preferredDark.value)
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
      <SideMenu />
      <v-main>
        <v-container class="h-100">
          <v-row class="h-100">
            <v-col v-if="!$vuetify.display.mobile"/>
            <v-col :cols="$vuetify.display.mobile ? undefined : 6" class="d-flex flex-column ga-8 h-100">
              <NuxtPage />
            </v-col>
            <v-col v-if="!$vuetify.display.mobile"/>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>