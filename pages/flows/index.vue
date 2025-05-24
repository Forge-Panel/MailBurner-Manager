<script lang="ts" setup>
const flows = useState('flows', () => [
  {
    id: 1,
    name: 'Personal mail',
    disabled: false
  },
  {
    id: 2,
    name: 'Bol.com',
    disabled: false
  },
  {
    id: 3,
    name: 'Invoices',
    disabled: true
  }
])
</script>

<template>
  <v-card title="Flows">
    <v-card-text class="pa-4">
      <v-btn color="primary" prepend-icon="i-mdi:add" text="Add new flow"/>
      <v-list class="mt-4">
        <v-list-item v-for="flow in flows" :key="flow.id" :disabled="flow.disabled" :to="`/flows/${flow.id}`">
          <v-list-item-title>
            {{ flow.name }}
          </v-list-item-title>
          <template #append>
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                    icon="i-mdi:dots-vertical"
                    size="small"
                    v-bind="props"
                    variant="text"
                />
              </template>
              <v-list>
                <v-list-item prepend-icon="i-mdi:rename" title="Rename" @click="console.log('test')"/>
                <v-list-item prepend-icon="i-mdi:power-standby" :title="flow.disabled ? 'Disable' : 'Enable'" @click="console.log('test')"/>
                <v-list-item prepend-icon="i-mdi:trash" title="Delete" @click="console.log('test')"/>
              </v-list>
            </v-menu>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>