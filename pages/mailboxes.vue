<script setup lang="ts">
</script>

<template>
  <v-card title="Mailbox connections" text="Manage mailbox connections to connect MailBurner with your email services.">
    <v-card-text>
      <MailboxReadAll />
    </v-card-text>
    <v-card-actions>
      <MailboxNewConnection />
    </v-card-actions>
  </v-card>
</template>