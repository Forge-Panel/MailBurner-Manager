<script setup lang="ts">
const tabs = ref<string | null>(null)
</script>

<template>
  <div>
    <v-tabs
        v-model="tabs"
        align-tabs="center"
        stacked
    >
      <v-tab prepend-icon="i-mdi:account-circle" value="account">{{ $t('settings.account.tabName') }}</v-tab>
      <v-tab prepend-icon="i-mdi:password" value="password">{{ $t('settings.password.tabName') }}</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tabs" class="h-100 pa-4">

      <v-tabs-window-item value="account">
        <SettingsAccount />
      </v-tabs-window-item>
      <v-tabs-window-item value="password">
        <SettingsPassword />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<style scoped>

</style>