<template>
  <q-layout
    view="lHh LpR lFr"
    :class="dark?'':'page-light'"
  >
    <AdmHeader
      :dark="dark"
      @toggle-left="toggleLeftDrawer"
    />
    <LeftDrawer v-model="leftDrawerOpen" />
    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="desktop"
      bordered
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { computed, ref } from 'vue'

import LeftDrawer from './LeftDrawer.vue'
import AdmHeader from './AdmHeader.vue'

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)
const $q = useQuasar()

const dark = computed(() => {
  return $q.dark.isActive
})

console.log(dark)

$q.dark.set(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

// function toggleRightDrawer() {
//   rightDrawerOpen.value = !rightDrawerOpen.value
// }
</script>
