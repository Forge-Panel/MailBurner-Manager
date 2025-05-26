<script setup lang="ts">
enum folderIcon {
  inbox = 'i-mdi:inbox',
  spam = 'i-mdi:inbox-remove',
  trash = 'i-mdi:trash',
  folder = 'i-mdi:folder'
}

type folder = {
  id: number,
  title: string,
  icon: folderIcon,
  children?: folder[]
}

const items = ref<folder[]>([
  {
    id: 1,
    title: 'Inbox',
    icon: folderIcon.inbox
  },
  {
    id: 2,
    title: 'Spam',
    icon: folderIcon.spam
  },
  {
    id: 3,
    title: 'Trash',
    icon: folderIcon.trash
  },
  {
    id: 4,
    title: 'Stores',
    icon: folderIcon.folder,
    children: [
      {
        id: 5,
        title: 'Bol',
        icon: folderIcon.folder
      },
      {
        id: 6,
        title: 'Amazon',
        icon: folderIcon.folder
      },
      {
        id: 7,
        title: 'Temu',
        icon: folderIcon.folder
      }
    ]
  },
])
</script>

<template>
  <v-treeview
    expand-icon="i-mdi:menu-right"
    collapse-icon="i-mdi:menu-down"
    :items="items"
  >
    <template #prepend="{ item, isOpen }">
      <v-icon v-if="item.icon === folderIcon.folder" :icon="isOpen ? 'i-mdi:folder-open' : 'i-mdi:folder'"/>
      <v-icon v-else :icon="item.icon" />
    </template>
  </v-treeview>
</template>