import type { Prisma, Currency } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CurrencyCreateArgs>({
  currency: {
    one: {
      data: {
        name: 'String2574184',
        exchange_rate: 8854156.774104035,
        updatedAt: '2022-11-07T03:14:08Z',
      },
    },
    two: {
      data: {
        name: 'String7551268',
        exchange_rate: 3085596.367796832,
        updatedAt: '2022-11-07T03:14:08Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Currency, 'currency'>
