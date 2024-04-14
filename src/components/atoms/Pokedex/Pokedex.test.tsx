import runCommonTests from '@/testing/runCommonTests'

// Component
import Pokedex, { testIDs } from './Pokedex'

describe('Atom | Pokedex', () => {
  runCommonTests(
    Pokedex,
    { rootTestID: testIDs.root },
    {
      children: <></>,
    },
  )
})
