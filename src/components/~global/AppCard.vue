<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6 text-weight-bold">
        {{ title }}
      </div>
      <div class="title-desc">
        {{ desc }}
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <slot name="content" />
    </q-card-section>
  </q-card>
</template>
<script setup>

defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  desc: {
    type: String,
    default: 'Deskripsi'
  }
})
</script>
