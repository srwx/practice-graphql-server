import { tempBook } from "db/book"
import { GraphQLID, GraphQLList } from "graphql"
import { BookType } from "schema/types/Book"

export const GET_BOOK = {
  type: BookType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent: any, args: { id: string }) {
    return tempBook.find((book) => book.id === args.id)
  },
}

export const GET_ALL_BOOK = {
  type: new GraphQLList(BookType),
  resolve() {
    return tempBook
  },
}
