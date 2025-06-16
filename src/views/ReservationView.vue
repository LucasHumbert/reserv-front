<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getOwner } from '@/utils/reserv.ts'
import DisplayOpeningHoursComponent from '@/components/DisplayOpeningHoursComponent.vue'
import WeekSelectionComponent from '@/components/DaySelection/WeekSelectionComponent.vue'

const route = useRoute()
const ownerId = route.params.id as string

const owner = getOwner(ownerId)
</script>

<template>
  <div class="m-2">
    <h1 class="text-center mb-4 text-3xl font-bold tracking-tight">
      Réserver chez {{ owner.name }}
    </h1>

    <div class="collapse border-base-300 border w-80 mx-auto text-center">
      <input type="checkbox" />
      <div class="collapse-title font-semibold">Voir les horaires</div>
      <div class="collapse-content text-sm">
        <DisplayOpeningHoursComponent :opening-hours="owner.openingHours" />
      </div>
    </div>
  </div>

  <WeekSelectionComponent />
</template>

<style scoped></style>
