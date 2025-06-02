<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const isLoading = ref(false);

// Step management
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

const allowedToNextStep = computed(() => {
  switch(step.value) {
    case 1:
      return step1FormIsValid.value
    case 2:
      return selectedProvider.value
    case 3:
      return step3FormIsValid.value
    case 4:
      return false
    default:
      return true
  }
})

// Show/hide dialog
const showDialog = ref(false)

function show() {
  execute()

  showDialog.value = true
  step.value = 1;
}

function close() {
  showDialog.value = false
  step.value = 1;
}

// Step 1 form
const step1FormIsValid = ref(false)
const connName = ref('')

// Step 2 Provider selection
const {data: mailboxProviders, status, execute} = useLazyFetch('/api/mailbox/available_providers')
const selectedProvider = ref<string | null>(null)
const providerSetup = shallowRef(null)

function selectProvider(value: string) {
  if (selectedProvider.value === value) {
    selectedProvider.value = null
    providerSetup.value = null
    return
  }

  selectedProvider.value = value

  providerSetup.value = defineAsyncComponent(() =>
      import((`~/components/Mailbox/ProviderSetup/${selectedProvider.value}.vue`))
  )
}

// Step 3 Provider config
const step3FormIsValid = ref(false)
const connConfig = ref<object>({})

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
      <v-card max-width="1000" class="mx-auto" :title="$t('mailboxes.newConnection.title')" :loading="isLoading">
        <v-card-text class="d-flex flex-wrap justify-space-between px-0">
          <v-stepper v-model="step" :items="[$t('mailboxes.newConnection.steps.1'), $t('mailboxes.newConnection.steps.2'), $t('mailboxes.newConnection.steps.3'), $t('mailboxes.newConnection.steps.4')]" flat hide-actions>
            <template #item.1>
              <v-form v-model="step1FormIsValid" validate-on="input lazy">
                <v-text-field
                  v-model="connName"
                  :rules="[
                    v => !!v || 'Name is required',
                    v => (v && v.length >= 4) || 'Name must be 4 characters or more',
                    v => (v && v.length <= 32) || 'Name must be 32 characters or less',
                  ]"
                  required
                  :label="$t('mailboxes.newConnection.inputName')"
                />
              </v-form>
            </template>
            <template #item.2>
              <div class="d-flex flex-wrap justify-space-between ga-4 py-4">
                <template v-if="status === 'success'">
                  <v-card
                      v-for="mailboxProvider in mailboxProviders"
                      :key="mailboxProvider.key"
                      variant="flat"
                      :class="{
                        'pa-2': selectedProvider === mailboxProvider.key,
                        'ma-2': selectedProvider !== mailboxProvider.key
                      }"
                      :color="selectedProvider === mailboxProvider.key ? 'primary' : undefined"
                      @click="selectProvider(mailboxProvider.key)">
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
              <template v-if="providerSetup">
                <component :is="providerSetup" v-model="step3FormIsValid" v-model:config="connConfig" />
              </template>
              <template v-else>
                Failed to load...
              </template>
            </template>

            <template #item.4>
              <v-card title="Step Three" flat>
                {{ connConfig }}
              </v-card>
            </template>
          </v-stepper>
        </v-card-text>
        <v-card-actions>
          <v-btn :text="$t('$vuetify.stepper.prev')" :disabled="step <= 1" @click="previousStep()" />
          <v-btn :text="$t('$vuetify.stepper.next')" :disabled="!allowedToNextStep" class="mr-auto" @click="nextStep()" />
          <v-btn :text="$t('mailboxes.newConnection.btnCancel')" @click="close()" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>