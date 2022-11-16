import type { QueryResolvers, CurrencyRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const currencies: QueryResolvers['currencies'] = () => {
  return db.currency.findMany()
}

export const currency: QueryResolvers['currency'] = ({ id }) => {
  return db.currency.findUnique({
    where: { id },
  })
}

export const Currency: CurrencyRelationResolvers = {
  Ad: (_obj, { root }) => {
    return db.currency.findUnique({ where: { id: root?.id } }).Ad()
  },
}
