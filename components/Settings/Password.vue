<script setup lang="ts">
const accountStore = useAccountStore()
</script>

<template>
  <div class="d-flex flex-column flex-wrap ga-4">
    <v-card>
      <v-card-text>
        <v-text-field :label="$t('settings.password.inputOldPassword')"/>
        <v-text-field :label="$t('settings.password.inputNewPassword')"/>
        <v-text-field :label="$t('settings.password.inputNewPasswordConfirm')"/>
      </v-card-text>
      <v-card-actions>
        <v-btn prepend-icon="i-mdi:content-save">{{ $t('settings.password.btnSave') }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>

</style>