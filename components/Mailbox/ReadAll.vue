<script setup lang="ts">
const mailboxStore = useMailboxStore()

const { status, error } = useAsyncData('mailboxReadAll', () => mailboxStore.readAllMailboxes())

const {mailboxes} = storeToRefs(mailboxStore)
</script>

<template>
  <v-list
    v-if="mailboxes && mailboxes?.length >= 1 && status === 'success'"
  >
    <v-list-item
        v-for="item in mailboxes"
        :key="item.id"
    >
      <v-list-item-title>{{ item.name }}</v-list-item-title>
      <v-list-item-subtitle>{{ item.type }}</v-list-item-subtitle>
      <template #append>
        <MailboxUpdateConnection :id="item.id" />
        <MailboxDeleteConnection :id="item.id" />
      </template>
    </v-list-item>
  </v-list>
  <v-list v-else-if="status === 'pending'">
    <v-skeleton-loader v-for="i in 5" :key="i" type="list-item-two-line"/>
  </v-list>
  <v-list v-else-if="error && status === 'error'" :items="[$t('mailboxes.readAll.error')]"/>
  <v-list v-else :items="[$t('mailboxes.readAll.noResults')]"/>
</template>

<style scoped>

</style>