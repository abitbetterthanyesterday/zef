import type { Prisma, Brand } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BrandCreateArgs>({
  brand: {
    one: { data: { name: 'String1986463', updatedAt: '2022-11-07T03:11:26Z' } },
    two: { data: { name: 'String2988838', updatedAt: '2022-11-07T03:11:26Z' } },
  },
})

export type StandardScenario = ScenarioData<Brand, 'brand'>
