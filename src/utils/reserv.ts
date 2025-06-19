import type Owner from '@/types/owner.ts'

export function getOwner(id: string) {
  // fetch by id

  const owner: Owner = {
    id: '572160dd-de9d-4d6c-84df-664b27652b67',
    name: 'Tennis Seyssinet',
    openingHours: {
      monday: {
        opened: true,
        dayStart: '08h00',
        dayEnd: '20h30',
        pauseStart: null,
        pauseEnd: null,
      },
      tuesday: {
        opened: true,
        dayStart: '08h00',
        dayEnd: '20h30',
        pauseStart: null,
        pauseEnd: null,
      },
      wednesday: {
        opened: true,
        dayStart: '08h00',
        dayEnd: '20h30',
        pauseStart: null,
        pauseEnd: null,
      },
      thursday: {
        opened: true,
        dayStart: '08h00',
        dayEnd: '20h30',
        pauseStart: null,
        pauseEnd: null,
      },
      friday: {
        opened: true,
        dayStart: '08h00',
        dayEnd: '22h30',
        pauseStart: null,
        pauseEnd: null,
      },
      saturday: {
        opened: true,
        dayStart: '08h00',
        dayEnd: '20h30',
        pauseStart: '12h00',
        pauseEnd: '14h00',
      },
      sunday: {
        opened: false,
        dayStart: null,
        dayEnd: null,
        pauseStart: null,
        pauseEnd: null,
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
