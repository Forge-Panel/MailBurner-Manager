<script setup lang="ts">
import type {Folder} from "~/lib/types";

const hasBeenUpdated = useState('hasBeenUpdated', () => false)

const items = ref<Folder[]>([
  {
    id: 1,
    title: 'Inbox',
    config: {enabled: false},
  },
  {
    id: 2,
    title: 'Spam',
    config: {enabled: false},
  },
  {
    id: 3,
    title: 'Trash',
    config: {enabled: false},
  },
  {
    id: 4,
    title: 'bol',
    config: {enabled: false},
  },
  {
    id: 5,
    title: 'discounts',
    config: {enabled: false},
  },
  {
    id: 6,
    title: 'invoices',
    config: {enabled: false},
  },
  {
    id: 7,
    title: 'security',
    config: {enabled: false},
  },
])

watch(items, () => {
  hasBeenUpdated.value = true
})
</script>

<template>
  <v-card title="Folders" text="Click to edit a folder description for the AI to know what messages to put there.">
    <v-card-text>
      <FoldersOverview v-model="items" @update:model-value="hasBeenUpdated = true" />
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" prepend-icon="i-mdi:floppy">Save changes</v-btn>
    </v-card-actions>
  </v-card>
</template>