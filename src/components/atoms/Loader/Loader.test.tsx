import runCommonTests from '@/testing/runCommonTests'

// Component
import Loader, { testIDs } from './Loader'

describe('Atom | Loader', () => {
  runCommonTests(Loader, { rootTestID: testIDs.root })
})
