<script setup lang="ts">
const { data, status, error } = useFetch('/api/mailbox/all')

</script>

<template>
  <v-list
    v-if="data && data?.length >= 1 && status === 'success'"
  >
    <v-list-item
        v-for="item in data"
        :key="item.id"
    >
      <v-list-item-title>{{ item.name }}</v-list-item-title>
      <v-list-item-subtitle>{{ item.type }}</v-list-item-subtitle>
      <template #append>
        <v-btn icon="i-mdi:edit" size="small" class="mr-4" />
        <MailboxDeleteConnection :id="item.id" />
      </template>
    </v-list-item>
  </v-list>
  <v-list v-else-if="status === 'pending'" :items="['Loading items...']"/>
  <v-list v-else-if="error && status === 'error'" :items="['Error loading in items...']"/>
  <v-list v-else :items="['No data.']"/>
</template>

<style scoped>

</style>