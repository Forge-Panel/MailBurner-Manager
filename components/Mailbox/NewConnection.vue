<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const {data: mailboxProviders, status, execute} = useLazyFetch('/api/mailbox/available_providers')

const showDialog = ref(false)
const step = ref(1)

function previousStep() {
  step.value--
  if (step.value <= 0) {
    step.value = 1
  }
}

function nextStep() {
  step.value++
  if (step.value >= 4) {
    step.value = 4
  }
}

function show() {
  execute()
  
  showDialog.value = true
  step.value = 1;
}

function close() {
  showDialog.value = false
  step.value = 1;
}

const loading = ref(false);
const currentComponent = shallowRef(null)

function loadProviderSetup(key: string) {
  loading.value = true
  
  currentComponent.value = defineAsyncComponent(() =>
    import((`~/components/Mailbox/ProviderSetup/${key}.vue`))
  )
  
  loading.value = false
  step.value = 3
}

function submit() {

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
          :text="$t('mailboxes.newConnection.btnShow')"
          @click="show()"
      />
    </template>
    <template #default>
      <v-card max-width="1000" class="mx-auto" :title="$t('mailboxes.newConnection.title')" :loading="loading">
        <v-card-text class="d-flex flex-wrap justify-space-between px-0">
          <v-stepper v-model="step" :items="[$t('mailboxes.newConnection.steps.1'), $t('mailboxes.newConnection.steps.2'), $t('mailboxes.newConnection.steps.3'), $t('mailboxes.newConnection.steps.4')]" flat hide-actions>
            <template #item.1>
              <v-form validate-on="submit lazy" @submit.prevent="submit">
                <v-text-field
                  :label="$t('mailboxes.newConnection.inputName')"
                />
              </v-form>
            </template>
            
            <template #item.2>
              <div class="d-flex flex-wrap justify-space-between ga-4 py-4">
                <template v-if="status === 'success'">
                  <v-card v-for="mailboxProvider in mailboxProviders" :key="mailboxProvider.key" @click="loadProviderSetup(mailboxProvider.key)">
                    <v-img
                      color="surface-variant"
                      class="mx-auto"
                      width="250"
                      :src="`/img/mail_providers/${mailboxProvider.key}.jpg`"
                      cover
                      @dragstart.prevent
                    />
                  </v-card>
                </template>
                <template v-else-if="status === 'pending'">
                  <v-skeleton-loader v-for="i in 6" :key="i" type="card" width="250" height="166"/>
                </template>
                <template v-else>
                  <p>No data loaded.</p>
                </template>
              </div>
            </template>

            <template #item.3>
              <template v-if="currentComponent">
                <component :is="currentComponent" />
              </template>
              <template v-else>
                Failed to load...
              </template>
            </template>

            <template #item.4>
              <v-card title="Step Three" flat>...</v-card>
            </template>
          </v-stepper>
        </v-card-text>
        <v-card-actions>
          <v-btn :text="$t('$vuetify.stepper.prev')" :disabled="step <= 1" @click="previousStep()" />
          <v-btn :text="$t('$vuetify.stepper.next')" class="mr-auto" @click="nextStep()" />
          <v-btn :text="$t('mailboxes.newConnection.btnCancel')" @click="close()" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>