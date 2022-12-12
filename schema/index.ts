import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql"
import { GET_BOOK } from "./queries/Book"

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: GET_BOOK,
  },
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {},
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})
