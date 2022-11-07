import type { Currency } from '@prisma/client'

import { currencies } from './currencies'
import type { StandardScenario } from './currencies.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('currencies', () => {
  scenario('returns all currencies', async (scenario: StandardScenario) => {
    const result = await currencies()

    expect(result.length).toEqual(Object.keys(scenario.currency).length)
  })
})
