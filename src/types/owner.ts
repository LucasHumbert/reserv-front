import type { Product } from '@/types/reserv.ts'

export default interface Owner {
  id: string
  name: string
  openingHours: OpeningHours
  products: Product[]
}

export interface OpeningHours {
  monday: DayOpeningHours
  tuesday: DayOpeningHours
  wednesday: DayOpeningHours
  thursday: DayOpeningHours
  friday: DayOpeningHours
  saturday: DayOpeningHours
  sunday: DayOpeningHours
}

export interface DayOpeningHours {
  opened: boolean
  morningStart: string | null
  morningEnd: string | null
  afternoonStart: string | null
  afternoonEnd: string | null
}

export const frenchDays = {
  monday: 'Lundi',
  tuesday: 'Mardi',
  wednesday: 'Mercredi',
  thursday: 'Jeudi',
  friday: 'Vendredi',
  saturday: 'Samedi',
  sunday: 'Dimanche',
}
