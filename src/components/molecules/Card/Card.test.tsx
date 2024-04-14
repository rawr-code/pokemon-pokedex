import runCommonTests from '@/testing/runCommonTests'

// Component
import Card, { testIDs } from './Card'

describe('Molecule | Card', () => {
  runCommonTests(
    Card,
    { rootTestID: testIDs.root },
    {
      id: '#001',
      name: 'bulbasaur',
      types: ['grass', 'poison'],
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      onClick: () => undefined,
    },
  )
})
