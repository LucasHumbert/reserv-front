<script setup lang="ts">
import { type DayOpeningHours, frenchDays, type OpeningHours } from '@/types/owner.ts'

defineProps<{
  openingHours: OpeningHours
}>()
const dayHours = (hours: DayOpeningHours, dayKey: keyof OpeningHours) => {
  let result = `${frenchDays[dayKey]}: `

  if (hours.opened) {
    result += `${hours.dayStart}-`

    result +=
      hours.pauseStart && hours.pauseEnd
        ? `${hours.pauseStart} ${hours.pauseEnd}-${hours.dayEnd}`
        : hours.dayEnd
  } else {
    result += 'Fermé'
  }

  return result
}
</script>

<template>
  <template v-for="(hours, dayKey) in openingHours" :key="dayKey">
    <p>{{ dayHours(hours, dayKey) }}</p>
  </template>
</template>

<style scoped></style>
