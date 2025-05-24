<script setup lang="ts">
const accountStore = useAccountStore()
</script>

<template>
  <div class="d-flex flex-column flex-wrap ga-4">
    <v-card>
      <v-card-text>
        <v-text-field :label="$t('settings.account.inputName')"/>
        <v-text-field :label="$t('settings.account.inputEmail')"/>
        <v-select
          v-model="accountStore.currentTheme"
          :label="$t('settings.account.inputTheme')"
          :items="accountStore.availableThemes"
        />
        <v-select
            v-model="accountStore.currentLocale"
            :label="$t('settings.account.inputLanguage')"
            :items="accountStore.availableLocales"
            @update:model-value="accountStore.setLocale"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn prepend-icon="i-mdi:content-save">{{ $t('settings.account.btnSave') }}</v-btn>
      </v-card-actions>
    </v-card>
    <div>
      <v-btn color="red-lighten-1" :width="$vuetify.display.mobile ? '100%' : undefined">{{ $t('settings.account.btnAccountDelete') }}</v-btn>
    </div>
  </div>
</template>

<style scoped>

</style>