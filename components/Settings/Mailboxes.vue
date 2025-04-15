<script lang="ts" setup>

</script>

<template>
  <v-dialog>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        class="mb-8"
        color="blue-lighten-1"
        prepend-icon="i-mdi:plus"
        v-bind="activatorProps"
        variant="flat"
        :text="$t('settings.mailboxes.btnNewConnection')"
      />
    </template>
    <template v-slot:default="{ isActive }">
      <MailboxCreate @close="isActive.value = false"/>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>