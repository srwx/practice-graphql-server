import { tempBook } from "db/book"
import { GraphQLID } from "graphql"
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
