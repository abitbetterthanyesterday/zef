import type { QueryResolvers, BrandRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const brands: QueryResolvers['brands'] = () => {
  return db.brand.findMany()
}

export const brand: QueryResolvers['brand'] = ({ id }) => {
  return db.brand.findUnique({
    where: { id },
  })
}

export const Brand: BrandRelationResolvers = {
  Product: (_obj, { root }) => {
    return db.brand.findUnique({ where: { id: root?.id } }).Product()
  },
}
