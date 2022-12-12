import { tempBook } from "db/book"
import { GraphQLString } from "graphql"
import { BookType } from "schema/types/Book"

export const GET_BOOK = {
  type: BookType,
  args: {
    id: { type: GraphQLString },
  },
  resolve(parent: any, args: { id: string }) {
    return tempBook.find((book) => book.id === args.id)
  },
}
