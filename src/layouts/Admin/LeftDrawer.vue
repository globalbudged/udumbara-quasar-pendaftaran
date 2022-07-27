<template>
  <q-drawer
    show-if-above
    :width="80"
  >
    <div class="absolute-top">
      <div
        class=" flex flex-center"
        style="height: 80px;"
      >
        <q-avatar size="40px">
          <img src="~assets/logos/logo.png">
        </q-avatar>
      </div>
    </div>
    <!-- <q-scroll-area
        class="fit"
        style="height:calc(100%-50px) ;padding-top:50px"
      > -->
    <div
      class="flex column flex-center full-height"
      style="height:calc(100%-80px) "
    >
      <div
        v-for="(menu, i) in menus"
        :key="i"
        class="sidebar flex flex-center cursor-pointer"
        :class="activated(menu.active)"
      >
        <!-- :class="!dark?'page-light':'page-dark'" -->
        <q-icon
          :name="menu.icon"
          size="25px"
        />
      </div>
    </div>
    <!-- </q-scroll-area> -->
  </q-drawer>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})

const menus = ref([
  { id: 1, name: 'dashboard', icon: 'icon-mat-dashboard', active: false },
  { id: 2, name: 'pendaftaran', icon: 'icon-mat-app_registration', active: true },
  { id: 3, name: 'dashboard', icon: 'icon-mat-medical_information', active: false }
])

function activated(val) {
  if (val) {
    if (props.dark) {
      return 'page-dark active'
    } else {
      return 'page-light active'
    }
  }
  return 'text-grey-5'
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: calc(100% - 5px);
  height:60px;

}
.active {
    margin-left: 5px;
    border-radius: 10px 0px 0px 10px;
    border-left: 3px solid $primary;
  }
</style>
