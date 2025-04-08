<script setup lang="ts">
import useLogo from "~/composables/logo";

definePageMeta({
  layout: 'centered',
})
const { logoUrl } = useLogo();
</script>

<template>
  
  <v-card class="white">
    <v-card-title class="pt-8 px-16">
      <img :src="logoUrl">
    </v-card-title>
    <v-card-subtitle class="pb-4">
      <h1 class="text-center">MailBurner</h1>
    </v-card-subtitle>
    <v-divider/>
    <v-card-text class="pa-4">
      <v-text-field :label="$t('pages.login.inputEmail')" prepend-icon="i-mdi:user"></v-text-field>
      <v-text-field :label="$t('pages.login.inputPassword')" prepend-icon="i-mdi:password"></v-text-field>
      <div class="d-flex justify-end">
        <v-btn color="green-lighten-1" prepend-icon="i-mdi:send">{{ $t('pages.login.btnLogin') }}</v-btn>
      </div>
    </v-card-text>
    <v-divider/>
    <v-card-text class="pa-4">
      <p>{{ $t('pages.login.textRegister') }} <a href="/">{{ $t('pages.login.linkRegister') }}</a></p>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>