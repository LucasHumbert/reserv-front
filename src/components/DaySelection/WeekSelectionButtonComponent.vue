<script setup lang="ts">
const props = withDefaults(defineProps<{
  onClick: () => void,
  isClickable?: boolean
}>(), {
  isClickable: true
})
</script>

<template>
  <div @click="onClick" class="mx-1 p-1 border rounded-full" :class="{ 'text-gray-500': !props.isClickable, 'cursor-pointer': props.isClickable }">
    <slot />
  </div>
</template>

<style scoped>

</style>
