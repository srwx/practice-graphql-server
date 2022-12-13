import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql"
import { GET_ALL_AUTHOR, GET_AUTHOR } from "./queries/Author"
import { GET_ALL_BOOK, GET_BOOK } from "./queries/Book"

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: GET_BOOK,
    author: GET_AUTHOR,
    books: GET_ALL_BOOK,
    authors: GET_ALL_AUTHOR,
  },
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {},
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation,
})
