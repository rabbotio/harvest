module.exports = `
type Price { 
  last: String, 
  pair: String,
  exchange: String
}

type Query {
  prices: [Price]
}

type Mutation {
  setContent(value: String!): String
}

schema {
  query: Query
  mutation: Mutation
}
`
