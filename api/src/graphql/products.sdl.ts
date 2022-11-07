export const schema = gql`
  type Product {
    id: Int!
    name: String!
    brand: Brand!
    brandId: Int!
    Category: Category!
    categoryId: Int!
    Ad: [Ad]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    name: String!
    brandId: Int!
    categoryId: Int!
  }

  input UpdateProductInput {
    name: String
    brandId: Int
    categoryId: Int
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`
