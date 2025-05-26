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
]);

const showDialog = ref(false)
const step = ref(1)

function previousStep() {
  step.value -= 1
  if (step.value <= 0) {
    step.value = 1
  }
}

function show() {
  showDialog.value = true
  step.value = 0;
}

function close() {
  showDialog.value = false
  step.value = 0;
}
</script>

<template>
  <v-dialog v-model="showDialog">
    <template #activator>
      <v-btn
          class="mb-8"
          color="primary"
          prepend-icon="i-mdi:plus"
          variant="flat"
          :text="$t('mailboxes.btnNewConnection')"
          @click="show()"
      />
    </template>
    <template #default>
      <v-card max-width="1000" class="mx-auto" title="New Mail Connection">
        <v-card-text class="d-flex flex-wrap justify-space-between px-0">
          <v-stepper v-model="step" :items="['Choose provider', 'Connect', 'Confirm']" flat hide-actions>
            <template #item.1>
              <div class="d-flex flex-wrap justify-space-between">
                <v-card v-for="mailboxProvider in mailboxProviders" :key="mailboxProvider.key" class="mx my-4" @click="step = 2">
                  <v-img
                      color="surface-variant"
                      class="mx-auto"
                      width="250"
                      :src="`/img/mail_providers/${mailboxProvider.key}.jpg`"
                      cover
                      @dragstart.prevent
                  />
                </v-card>
              </div>
            </template>

            <template #item.2>
              <v-card title="Step Two" flat>...</v-card>
            </template>

            <template #item.3>
              <v-card title="Step Three" flat>...</v-card>
            </template>
          </v-stepper>
        </v-card-text>
        <v-card-actions>
          <v-btn text="Cancel" @click="close()" />
          <v-btn :text="$t('$vuetify.stepper.prev')" class="mr-auto" :disabled="step <= 1" @click="previousStep()" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>