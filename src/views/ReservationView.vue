<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { getOwner } from '@/utils/owner.ts'
import DisplayOpeningHoursComponent from '@/components/DisplayOpeningHoursComponent.vue'
import WeekSelectionComponent from '@/components/DaySelection/WeekSelectionComponent.vue'
import { onMounted, ref } from 'vue'
import type Owner from '@/types/owner.ts'

const route = useRoute()
const ownerId = route.params.id as string

const router = useRouter()

const owner = ref<Owner | null>(null)

onMounted(async () => {
  try {
    owner.value = await getOwner(ownerId)
  } catch (e: any) {
    if (e.status === 404) {
      await router.push({ name: 'home' })
    }
  }
})
</script>

<template>
  <div class="m-2">
    <h1 class="text-center mb-4 text-3xl font-bold tracking-tight">
      Réserver chez {{ owner?.name || '...' }}
    </h1>

    <div class="collapse border-base-300 border w-80 mx-auto text-center">
      <input type="checkbox" />
      <div class="collapse-title font-semibold">Voir les horaires</div>
      <div v-if="owner" class="collapse-content text-sm">
        <DisplayOpeningHoursComponent :opening-hours="owner.openingHours" />
      </div>
    </div>
  </div>

  <WeekSelectionComponent />
</template>

<style scoped></style>
