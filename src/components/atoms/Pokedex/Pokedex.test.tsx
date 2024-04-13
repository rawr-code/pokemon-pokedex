import { runCommonTests } from '@utils'

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
