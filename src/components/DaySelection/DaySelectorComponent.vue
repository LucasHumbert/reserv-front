<script setup lang="ts">
import type { DateTime } from 'luxon'

defineProps<{
  day: DateTime
}>()
</script>

<template>
  <div class="mx-1 w-[calc(100%/7)] h-24 border rounded-md border-gray-300 flex justify-center items-center flex-col">
    <p class="self-start my-1 mx-2 font-semibold">{{ day.setLocale('fr').toFormat('ccc') }} {{ day.toFormat('dd') }}</p>
    <p class="grow-2 flex items-center text-lg">0 dispo</p>
  </div>
</template>
²
<style scoped>

</style>
