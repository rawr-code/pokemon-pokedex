import { runCommonTests } from '@utils'

// Component
import Loader, { testIDs } from './Loader'

describe('Atom | Loader', () => {
  runCommonTests(Loader, { rootTestID: testIDs.root })
})
