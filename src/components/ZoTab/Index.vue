<script setup lang="ts">
defineProps<{
  activeKey: string
  label: string
  icon?: string
}>()

const actKey = inject('activeKey')
</script>

<template>
  <div v-show="activeKey === actKey">
    <slot />
  </div>
</template>
