export const schema = gql`
  type Category {
    id: Int!
    name: String!
    Product: [Product]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    categories: [Category!]! @requireAuth
  }

  input CreateCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String
  }
`
