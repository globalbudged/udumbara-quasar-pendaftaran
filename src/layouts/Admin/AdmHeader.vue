<template>
  <q-header
    reveal
    :class="dark?'bg-dark':'bg-white text-dark'"
  >
    <div class="q-px-sm q-py-sm flex items-center justify-between">
      <div>
        <q-btn
          flat
          round
          icon="icon-mat-segment"
          class="flip__icon"
          @click="emit('toggleLeft')"
        />
      </div>
      <div class="q-pr-md">
        <q-avatar size="40px">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
      </div>
    </div>
  </q-header>
</template>

<script setup>

const emit = defineEmits(['toggleLeft'])
defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.flip__icon {
  transform: scaleX(-1);
}
</style>
