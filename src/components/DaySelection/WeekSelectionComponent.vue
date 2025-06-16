<script setup lang="ts">
import { DateTime, type WeekNumbers } from 'luxon'
import { computed, ref } from 'vue'
import DaySelectorComponent from '@/components/DaySelection/DaySelectorComponent.vue'
import WeekSelectionButtonComponent
  from '@/components/DaySelection/WeekSelectionButtonComponent.vue'

const currentWeek = ref(DateTime.now().weekNumber)
const currentYear = ref(DateTime.now().year)

const getCurrentWeekDateTime = computed(() => DateTime.fromObject({ weekNumber: currentWeek.value, weekYear: currentYear.value }))

const canGoToPrevious = computed(() => !(getCurrentWeekDateTime.value.weekYear === DateTime.now().year && getCurrentWeekDateTime.value.weekNumber <= DateTime.now().weekNumber))

const displayMonth = computed(() => {
  const first = getCurrentWeekDateTime.value.startOf('week')
  const last = getCurrentWeekDateTime.value.endOf('week')

  const sameMonth = first.month === last.month
  const sameYear = first.year === last.year

  if (sameMonth) {
    return `${first.monthLong} ${first.year}`
  }

  if (sameYear) {
    return `${first.monthLong} - ${last.monthLong} ${first.year}`
  }

  return `${first.monthLong} ${first.year} - ${last.monthLong} ${last.year}`
})

const previousWeek = () => {
  if (canGoToPrevious.value) {
    const previousWeek = getCurrentWeekDateTime.value.minus({ week: 1 })
    currentWeek.value = previousWeek.weekNumber as WeekNumbers
    currentYear.value = previousWeek.weekYear
  }
}

const nextWeek = () => {
  const nextWeek = getCurrentWeekDateTime.value.plus({ week: 1 })
  currentWeek.value = nextWeek.weekNumber as WeekNumbers
  currentYear.value = nextWeek.weekYear
}
</script>

<template>
  <div class="w-[95%] m-auto">
    <div class="flex items-center my-3">
      <WeekSelectionButtonComponent :on-click="previousWeek" :is-clickable="canGoToPrevious">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </WeekSelectionButtonComponent>

      <WeekSelectionButtonComponent :on-click="nextWeek">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </WeekSelectionButtonComponent>

      <p class="ml-2 text-2xl select-none">{{ displayMonth }}</p>
    </div>

    <div class="flex">
      <template v-for="value in 7" :key="value">
        <DaySelectorComponent
          :day="DateTime.fromObject({ weekNumber: currentWeek })
          .startOf('week')
          .plus({ day: value - 1 })"
        />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
