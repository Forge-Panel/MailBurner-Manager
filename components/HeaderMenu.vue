<script setup lang="ts">
const accountStore = useAccountStore()
</script>

<template>
  <v-app-bar :elevation="2">
    <template #prepend>
      <v-app-bar-nav-icon v-if="!$vuetify.display.mobile" @click="accountStore.toggleMenu()" />
    </template>

    <v-app-bar-title>MailBurner</v-app-bar-title>

    <v-btn v-if="$vuetify.display.mobile" icon="i-mdi:inbox" to="/mailboxes" />
    <v-btn v-else prepend-icon="i-mdi:inbox" :text="$t('header.nav.mailboxes')" to="/mailboxes" />

    <v-menu>
      <template #activator="{ props }">
        <v-btn
            icon="i-mdi:dots-vertical"
            v-bind="props"
            variant="text"
        />
      </template>
      <v-list>
        <v-list-item :title="$t('header.nav.settings')" to="/settings" prepend-icon="i-mdi:cog"/>
        <v-list-item :title="$t('header.nav.logout')" to="/login" prepend-icon="i-mdi:logout"/>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>

</style>