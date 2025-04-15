<script setup lang="ts">
const emits = defineEmits(['close']);

const loading = ref(false);

const step = useState('step', () => 1);

const name = useState('name', () => '');
const connectionType = useState<'imap' | 'oauth' | 'google'>('connectionType', () => 'imap')

const configImap = useState('configImap', () => {
  return {
    hostname: '',
    port: 993,
    username: '',
    password: '',
    tls: true
  }
})

function submit() {
  loading.value = true
}

function close() {
  step.value = 1
  
  emits('close')
}

function testConnection() {
  loading.value = true
  
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>

<template>
  <v-form validate-on="submit lazy" @submit.prevent="submit">
    <v-card :title="$t('settings.mailboxes.create.title')" max-width="800" class="mx-auto" :loading="loading">
      <v-card-text>
        <v-stepper
          v-model="step"
          hide-actions
          :items="[
            $t('settings.mailboxes.create.step.1.title'),
            $t('settings.mailboxes.create.step.2.title')
          ]">
          <template v-slot:item.1>
            <v-text-field
              v-model="name"
              :label="$t('settings.mailboxes.create.step.1.inputName')"
            />
            <v-select
              v-model="connectionType"
              :label="$t('settings.mailboxes.create.step.1.selectConnectionType')"
              :items="['imap', 'oauth', 'google']"
            />
          </template>
          
          <template v-slot:item.2>
            <template v-if="connectionType === 'imap'">
              <v-text-field
                v-model="configImap.hostname"
                :label="$t('settings.mailboxes.create.step.2.imap.inputHostname')"
              />
              <v-text-field
                v-model="configImap.hostname"
                :label="$t('settings.mailboxes.create.step.2.imap.inputPort')"
              />
              <v-text-field
                v-model="configImap.hostname"
                :label="$t('settings.mailboxes.create.step.2.imap.inputUsername')"
              />
              <v-text-field
                v-model="configImap.hostname"
                :label="$t('settings.mailboxes.create.step.2.imap.inputPassword')"
              />
              <v-switch
                v-model="configImap.tls"
                :label="$t('settings.mailboxes.create.step.2.imap.toggleTls')"
              />
              <v-btn @click="testConnection" :text="$t('settings.mailboxes.create.step.2.btnTestConnection')" />
            </template>
          </template>
          
          <template v-slot:item.3>
            <p>Confirm</p>
          </template>
        </v-stepper>
      </v-card-text>
      
      <v-card-actions>
        <v-btn
          :disabled="![2].includes(step)"
          @click="step -= 1"
          :text="$t('forms.btnPrev')"
        />
        <v-btn
          :disabled="![1].includes(step)"
          @click="step += 1"
          :text="$t('forms.btnNext')"
        />
        <v-divider />
        <v-btn
          :disabled="step !== 3"
          :text="$t('forms.btnSubmit')"
          type="submit"
        />
        <v-btn
          :text="$t('forms.btnClose')"
          @click="close"
        />
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<style scoped>

</style>