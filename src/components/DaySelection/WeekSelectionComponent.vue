<script setup lang="ts">
import { DateTime, type WeekNumbers } from 'luxon'
import { computed, ref } from 'vue'
import DaySelectorComponent from '@/components/DaySelection/DaySelectorComponent.vue'
import WeekSelectionButtonComponent
  from '@/components/DaySelection/WeekSelectionButtonComponent.vue'

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
  <div class="w-[95%] m-auto">
    <div class="flex items-center m-3">
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
      
      <p class="text-2xl">{{ getCurrentWeekDateTime.monthLong }} {{ currentYear }}</p>
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
