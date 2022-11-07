import type { Ad } from '@prisma/client'

import { ads, ad, createAd, updateAd, deleteAd } from './ads'
import type { StandardScenario } from './ads.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ads', () => {
  scenario('returns all ads', async (scenario: StandardScenario) => {
    const result = await ads()

    expect(result.length).toEqual(Object.keys(scenario.ad).length)
  })

  scenario('returns a single ad', async (scenario: StandardScenario) => {
    const result = await ad({ id: scenario.ad.one.id })

    expect(result).toEqual(scenario.ad.one)
  })

  scenario('creates a ad', async (scenario: StandardScenario) => {
    const result = await createAd({
      input: {
        productId: scenario.ad.two.productId,
        price: 8576568,
        currencyId: scenario.ad.two.currencyId,
        updatedAt: '2022-11-07T03:13:24Z',
        userId: scenario.ad.two.userId,
      },
    })

    expect(result.productId).toEqual(scenario.ad.two.productId)
    expect(result.price).toEqual(8576568)
    expect(result.currencyId).toEqual(scenario.ad.two.currencyId)
    expect(result.updatedAt.toISOString()).toEqual('2022-11-07T03:13:24.000Z')
    expect(result.userId).toEqual(scenario.ad.two.userId)
  })

  scenario('updates a ad', async (scenario: StandardScenario) => {
    const original = (await ad({ id: scenario.ad.one.id })) as Ad
    const result = await updateAd({
      id: original.id,
      input: { price: 3131902 },
    })

    expect(result.price).toEqual(3131902)
  })

  scenario('deletes a ad', async (scenario: StandardScenario) => {
    const original = (await deleteAd({ id: scenario.ad.one.id })) as Ad
    const result = await ad({ id: original.id })

    expect(result).toEqual(null)
  })
})
