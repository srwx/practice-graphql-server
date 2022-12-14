import { tempAuthor } from "db/author"
import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql"
import { AuthorType } from "./Author"

// @ts-ignore
export const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    authorId: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent: any, _) {
        // parent: book ที่ถูก query
        return tempAuthor.find((author) => author.id === parent.authorId)
      },
    },
  }),
})
