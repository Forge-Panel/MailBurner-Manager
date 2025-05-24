<script setup lang="ts">
const accountStore = useAccountStore()
</script>

<template>
  <div class="d-flex flex-column flex-wrap ga-4">
    <v-card :title="$t('settings.account.account.title')">
      <v-card-text>
        <v-text-field :label="$t('settings.account.account.inputName')"/>
        <v-text-field :label="$t('settings.account.account.inputEmail')"/>
        <v-select
          v-model="accountStore.currentTheme"
          :label="$t('settings.account.account.inputTheme')"
          :items="accountStore.availableThemes"
        />
        <v-select
            v-model="accountStore.currentLocale"
            :label="$t('settings.account.account.inputLanguage')"
            :items="accountStore.availableLocales"
            @update:model-value="accountStore.setLocale"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn variant="flat" color="green-lighten-1" prepend-icon="i-mdi:content-save">{{ $t('settings.account.account.btnSave') }}</v-btn>
      </v-card-actions>
    </v-card>
    <v-card :title="$t('settings.account.password.title')">
      <v-card-text>
        <v-text-field :label="$t('settings.account.password.inputOldPassword')"/>
        <v-text-field :label="$t('settings.account.password.inputNewPassword')"/>
        <v-text-field :label="$t('settings.account.password.inputNewPasswordConfirm')"/>
      </v-card-text>
      <v-card-actions>
        <v-btn variant="flat" color="green-lighten-1" prepend-icon="i-mdi:content-save">{{ $t('settings.account.password.btnSave') }}</v-btn>
      </v-card-actions>
    </v-card>
    <div>
      <v-btn color="red-lighten-1" :width="$vuetify.display.mobile ? '100%' : undefined">{{ $t('settings.account.btnAccountDelete') }}</v-btn>
    </div>
  </div>
</template>

<style scoped>

</style>