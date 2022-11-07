import type { Brand } from '@prisma/client'

import { brands } from './brands'
import type { StandardScenario } from './brands.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('brands', () => {
  scenario('returns all brands', async (scenario: StandardScenario) => {
    const result = await brands()

    expect(result.length).toEqual(Object.keys(scenario.brand).length)
  })
})
