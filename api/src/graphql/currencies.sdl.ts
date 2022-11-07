export const schema = gql`
  type Currency {
    id: Int!
    name: String!
    exchange_rate: Float!
    Ad: [Ad]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    currencies: [Currency!]! @requireAuth
  }

  input CreateCurrencyInput {
    name: String!
    exchange_rate: Float!
  }

  input UpdateCurrencyInput {
    name: String
    exchange_rate: Float
  }
`
