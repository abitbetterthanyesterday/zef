import type { Prisma, Category } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CategoryCreateArgs>({
  category: {
    one: { data: { name: 'String8157826', updatedAt: '2022-11-07T03:13:14Z' } },
    two: { data: { name: 'String5226766', updatedAt: '2022-11-07T03:13:14Z' } },
  },
})

export type StandardScenario = ScenarioData<Category, 'category'>
