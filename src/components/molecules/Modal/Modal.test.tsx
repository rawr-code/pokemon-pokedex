import runCommonTests from '@/testing/runCommonTests'

// Component
import Modal, { testIDs } from './Modal'

describe('Molecule | Modal', () => {
  runCommonTests(
    Modal,
    { rootTestID: testIDs.root },
    {
      pokemon: {
        id: '#001',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        name: 'bulbasaur',
        height: 7,
        weight: 69,
        types: ['grass', 'poison'],
        abilities: ['overgrow', 'chlorophyll'],
        stats: { hp: 45, attack: 49, defense: 49, speed: 45 },
      },
      onClose: () => undefined,
    },
  )
})
