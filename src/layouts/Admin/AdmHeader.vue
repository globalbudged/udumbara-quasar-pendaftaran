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
          icon="segment"
          @click="emit('toggleLeft')"
        />
      </div>
      <div class="q-pr-md">
        <q-avatar>
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
