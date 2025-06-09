import type Owner from '@/types/owner.ts'

export function getOwner(id: string) {
  // fetch by id

  const owner: Owner = {
    id: '572160dd-de9d-4d6c-84df-664b27652b67',
    name: 'Tennis Seyssinet',
    openingHours: {
      monday: {
        opened: true,
        morningStart: '08h00',
        morningEnd: null,
        afternoonStart: null,
        afternoonEnd: '20h30',
      },
      tuesday: {
        opened: true,
        morningStart: '08h00',
        morningEnd: null,
        afternoonStart: null,
        afternoonEnd: '20h30',
      },
      wednesday: {
        opened: true,
        morningStart: '08h00',
        morningEnd: null,
        afternoonStart: null,
        afternoonEnd: '20h30',
      },
      thursday: {
        opened: true,
        morningStart: '08h00',
        morningEnd: null,
        afternoonStart: null,
        afternoonEnd: '20h30',
      },
      friday: {
        opened: true,
        morningStart: '08h00',
        morningEnd: null,
        afternoonStart: null,
        afternoonEnd: '22h00',
      },
      saturday: {
        opened: true,
        morningStart: '08h00',
        morningEnd: '12h00',
        afternoonStart: '14h00',
        afternoonEnd: '22h00',
      },
      sunday: {
        opened: false,
        morningStart: null,
        morningEnd: null,
        afternoonStart: null,
        afternoonEnd: null,
      },
    },
    products: [
      {
        id: 'd14401d5-debb-44af-a0d6-9062ce6342a6',
        name: 'Terrain tennis 1',
      },
      {
        id: 'fa033dd3-fc8d-444f-a648-30f023381dbe',
        name: 'Terrain tennis 2',
      },
      {
        id: '524e0cab-07ff-4d28-af71-556f7849dbad',
        name: 'Terrain padel 1',
      },
    ],
  }

  return owner
}
