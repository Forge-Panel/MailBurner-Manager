<script setup lang="ts">
type mailboxProvider = {
  key: string,
  name: string
}

const mailboxProviders = computed<mailboxProvider[]>(() => [
  {
    key: 'gmail',
    name: 'Gmail',
  },
  {
    key: 'outlook',
    name: 'Outlook',
  },
  {
    key: 'exchange',
    name: 'Microsoft 365 Exchange',
  },
  {
    key: 'proton',
    name: 'Protonmail',
  },
  {
    key: 'yahoo',
    name: 'Yahoo!',
  },
  {
    key: 'icloud',
    name: 'iCloud',
  },
  {
    key: 'imap',
    name: 'IMAP',
  }
])
</script>

<template>
  <v-dialog>
    <template #activator="{ props: activatorProps }">
      <v-btn
          class="mb-8"
          color="blue-lighten-1"
          prepend-icon="i-mdi:plus"
          v-bind="activatorProps"
          variant="flat"
          :text="$t('mailboxes.btnNewConnection')"
      />
    </template>
    <template #default="{ isActive }">
      <v-card max-width="1000" class="mx-auto p-0" title="Choose prodiver">
        <v-card-text class="d-flex flex-wrap justify-space-between">
          <v-card v-for="mailboxProvider in mailboxProviders" :key="mailboxProvider.key" class="mx">
            <v-img
                color="surface-variant"
                class="mx-auto my-2"
                width="250"
                :src="`/img/mail_providers/${mailboxProvider.key}.jpg`"
                cover
            />
            <v-card-actions>
              <v-btn>test</v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>