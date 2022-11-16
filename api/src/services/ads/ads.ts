import type {
  QueryResolvers,
  MutationResolvers,
  AdRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const ads: QueryResolvers['ads'] = () => {
  return db.ad.findMany()
}

export const ad: QueryResolvers['ad'] = ({ id }) => {
  return db.ad.findUnique({
    where: { id },
  })
}

export const createAd: MutationResolvers['createAd'] = ({ input }) => {
  return db.ad.create({
    data: input,
  })
}

export const updateAd: MutationResolvers['updateAd'] = ({ id, input }) => {
  return db.ad.update({
    data: input,
    where: { id },
  })
}

export const deleteAd: MutationResolvers['deleteAd'] = ({ id }) => {
  return db.ad.delete({
    where: { id },
  })
}

export const Ad: AdRelationResolvers = {
  user: (_obj, { root }) => {
    return db.ad.findUnique({ where: { id: root?.id } }).user()
  },
  product: (_obj, { root }) => {
    return db.ad.findUnique({ where: { id: root?.id } }).product()
  },
  currency: (_obj, { root }) => {
    return db.ad.findUnique({ where: { id: root?.id } }).currency()
  },
}
