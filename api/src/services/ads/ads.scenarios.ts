import type { Prisma, Ad } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AdCreateArgs>({
  ad: {
    one: {
      data: {
        price: 8318581,
        updatedAt: '2022-11-07T03:13:24Z',
        user: {
          create: {
            username: 'String',
            email: 'String2398847',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-11-07T03:13:24Z',
          },
        },
        product: {
          create: {
            name: 'String',
            updatedAt: '2022-11-07T03:13:24Z',
            brand: {
              create: {
                name: 'String6842361',
                updatedAt: '2022-11-07T03:13:24Z',
              },
            },
            Category: {
              create: {
                name: 'String2500125',
                updatedAt: '2022-11-07T03:13:24Z',
              },
            },
          },
        },
        currency: {
          create: {
            name: 'String2376645',
            exchange_rate: 7046826.493508156,
            updatedAt: '2022-11-07T03:13:24Z',
          },
        },
      },
    },
    two: {
      data: {
        price: 2141273,
        updatedAt: '2022-11-07T03:13:24Z',
        user: {
          create: {
            username: 'String',
            email: 'String8545540',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-11-07T03:13:24Z',
          },
        },
        product: {
          create: {
            name: 'String',
            updatedAt: '2022-11-07T03:13:24Z',
            brand: {
              create: {
                name: 'String1067544',
                updatedAt: '2022-11-07T03:13:24Z',
              },
            },
            Category: {
              create: {
                name: 'String8856218',
                updatedAt: '2022-11-07T03:13:24Z',
              },
            },
          },
        },
        currency: {
          create: {
            name: 'String9530831',
            exchange_rate: 3348451.8292985866,
            updatedAt: '2022-11-07T03:13:24Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Ad, 'ad'>
