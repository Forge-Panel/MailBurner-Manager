<script setup lang="ts">

</script>

<template>
  <v-btn prepend-icon="i-mdi:plus" color="blue-lighten-1" variant="flat" class="mb-8">{{ $t('pages.settings.mailboxes.btnNewConnection') }}</v-btn>
  <v-expansion-panels multiple>
    <v-expansion-panel title="stijn.v.d.berg@hotmail.com">
      <v-expansion-panel-text>
        <v-text-field :label="$t('pages.settings.mailboxes.inputName')"></v-text-field>
        <h4>{{ $t('pages.settings.mailboxes.connectionSettings.title') }}</h4>
        <div class="d-flex flex-wrap flex-column">
          <v-select
            :label="$t('pages.settings.mailboxes.connectionSettings.imap.selectServerType')"
            :items="['Imap']"
          ></v-select>
          <v-text-field :label="$t('pages.settings.mailboxes.connectionSettings.imap.inputHost')"></v-text-field>
          <v-text-field :label="$t('pages.settings.mailboxes.connectionSettings.imap.inputPort')"></v-text-field>
          <v-text-field :label="$t('pages.settings.mailboxes.connectionSettings.imap.inputUsername')"></v-text-field>
          <v-text-field :label="$t('pages.settings.mailboxes.connectionSettings.imap.inputPassword')"></v-text-field>
          <v-switch color="primary" :label="$t('pages.settings.mailboxes.connectionSettings.imap.toggleTls')"></v-switch>
        </div>
        <v-btn color="green-lighten-1" prepend-icon="i-mdi:content-save">{{ $t('pages.settings.mailboxes.btnSave') }}</v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>

</style>