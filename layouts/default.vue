<template>
  <v-app>
    <v-layout>
      <SideMenu />
      <v-main>
        <v-container class="h-100">
          <v-row class="h-100">
            <v-col v-if="!$vuetify.display.mobile"/>
            <v-col :cols="$vuetify.display.mobile ? undefined : 6" class="d-flex flex-column ga-8 h-100">
              <NuxtPage />
            </v-col>
            <v-col v-if="!$vuetify.display.mobile"/>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>