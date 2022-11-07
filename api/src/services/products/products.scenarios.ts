import type { Prisma, Product } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2022-11-07T03:13:54Z',
        brand: {
          create: { name: 'String1047570', updatedAt: '2022-11-07T03:13:54Z' },
        },
        Category: {
          create: { name: 'String3944443', updatedAt: '2022-11-07T03:13:54Z' },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2022-11-07T03:13:54Z',
        brand: {
          create: { name: 'String984125', updatedAt: '2022-11-07T03:13:54Z' },
        },
        Category: {
          create: { name: 'String8424088', updatedAt: '2022-11-07T03:13:54Z' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Product, 'product'>
