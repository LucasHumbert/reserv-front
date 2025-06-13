<script setup lang="ts">
import { DateTime, type WeekNumbers } from 'luxon'
import { computed, ref } from 'vue'

let currentWeek = ref(DateTime.now().weekNumber)
let currentYear = ref(DateTime.now().year)

const getCurrentWeekDateTime = computed(() => DateTime.fromObject({ weekNumber: currentWeek.value }))

const canGoToPrevious = computed(() => !(getCurrentWeekDateTime.value.year === currentYear.value && getCurrentWeekDateTime.value.weekNumber <= DateTime.now().weekNumber))

const previousWeek = () => {
  if (canGoToPrevious.value) {
    const previousWeek = getCurrentWeekDateTime.value.minus({ week: 1 })
    currentWeek.value = previousWeek.weekNumber as WeekNumbers
    currentYear.value = previousWeek.year
  }
}

const nextWeek = () => {
  const nextWeek = getCurrentWeekDateTime.value.plus({ week: 1 })
  currentWeek.value = nextWeek.weekNumber as WeekNumbers
  currentYear.value = nextWeek.year
}
</script>

<template>
  {{ getCurrentWeekDateTime.monthLong }}
  {{ currentYear }}

  <div @click="previousWeek" :class="{ 'text-gray-500': !canGoToPrevious }">Previous</div>
  <div @click="nextWeek">Next</div>

  <div v-for="value in 7" :key="value">
    {{
      DateTime.fromObject({ weekNumber: currentWeek })
        .startOf('week')
        .plus({ day: value - 1 })
        .toFormat('dd')
    }}
  </div>
</template>

<style scoped></style>
