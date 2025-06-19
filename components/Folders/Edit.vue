<script setup lang="ts">
import type {FolderConfig} from "~/lib/types";

const { t } = useI18n()

const config = reactive<FolderConfig>({
  enabled: true,
  folderScanning: true,
  prompt: undefined
})

const showDialog = ref(false)

const model = defineModel<FolderConfig>()

function show() {
  showDialog.value = true
  
  if (!model.value) {
    return
  }
  
  config.enabled = model.value.enabled
  
  config.folderScanning = model.value?.folderScanning
  config.prompt = model.value?.prompt
}

function close() {
  showDialog.value = false
}

function edit() {
  showDialog.value = false
  
  if (!config.enabled) {
    model.value = {
      enabled: config.enabled
    }
  } else {
    model.value = {
      enabled: config.enabled,
      folderScanning: config.folderScanning || false,
      prompt: config.prompt || ''
    }
  }
}
</script>

<template>
  <v-dialog v-model="showDialog">
    <template #activator>
      <v-btn icon="i-mdi:edit" variant="text" @click="show()" />
    </template>
    <template #default>
      <v-card
        max-width="1000"
        class="mx-auto"
        :title="t('folders.edit.title')"
        :text="t('folders.edit.text')"
      >
        <v-card-text>
          <p>{{ t('folders.edit.toggleEnabledHelper') }}</p>
          <v-switch
            v-model="config.enabled"
            :color="config.enabled ? 'primary' : undefined"
            :label="t('folders.edit.toggleEnabled')"
          />
          <p>{{ t('folders.edit.toggleFolderScanningHelper') }}</p>
          <v-switch
            v-model="config.folderScanning"
            :disabled="!config.enabled"
            :color="config.folderScanning ? 'primary' : undefined"
            :label="t('folders.edit.toggleFolderScanning')"
          />
          <v-textarea v-model="config.prompt" :disabled="!config.enabled" :label="t('folders.edit.inputPrompt')" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" :text="t('folders.edit.btnSend')" @click="edit()" />
          <v-btn :text="t('folders.edit.btnClose')" @click="close()" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>