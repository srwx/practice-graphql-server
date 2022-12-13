import { tempBook } from "db/book"
import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql"
import { BookType } from "./Book"

// @ts-ignore
export const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent: any, _) {
        return tempBook.filter((book) => book.authorId === parent.id)
      },
    },
  }),
})
