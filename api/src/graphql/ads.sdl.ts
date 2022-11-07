export const schema = gql`
  type Ad {
    id: Int!
    user: User!
    product: Product!
    productId: Int!
    price: Int!
    currency: Currency!
    currencyId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    userId: Int!
  }

  type Query {
    ads: [Ad!]! @requireAuth
    ad(id: Int!): Ad @requireAuth
  }

  input CreateAdInput {
    productId: Int!
    price: Int!
    currencyId: Int!
    userId: Int!
  }

  input UpdateAdInput {
    productId: Int
    price: Int
    currencyId: Int
    userId: Int
  }

  type Mutation {
    createAd(input: CreateAdInput!): Ad! @requireAuth
    updateAd(id: Int!, input: UpdateAdInput!): Ad! @requireAuth
    deleteAd(id: Int!): Ad! @requireAuth
  }
`
