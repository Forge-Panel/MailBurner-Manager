<script setup lang="ts">
import type {Folder} from "~/lib/types";

const model = defineModel<Folder[]>()
</script>

<template>
  <v-treeview
    expand-icon="i-mdi:menu-right"
    collapse-icon="i-mdi:menu-down"
    :items="model"
  >
    <template #prepend="{ isOpen }">
      <v-icon :icon="isOpen ? 'i-mdi:folder-open' : 'i-mdi:folder'"/>
    </template>
    <template #append="{item}">
      <FoldersEdit v-model="item.config" />
    </template>
  </v-treeview>
</template>