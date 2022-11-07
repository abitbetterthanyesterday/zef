export const schema = gql`
  type Brand {
    id: Int!
    name: String!
    Product: [Product]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    brands: [Brand!]! @requireAuth
  }

  input CreateBrandInput {
    name: String!
  }

  input UpdateBrandInput {
    name: String
  }
`
