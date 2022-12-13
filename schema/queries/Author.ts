import { tempAuthor } from "db/author"
import { GraphQLID, GraphQLList } from "graphql"
import { AuthorType } from "schema/types/Author"

export const GET_AUTHOR = {
  type: AuthorType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent: any, args: { id: string }) {
    return tempAuthor.find((author) => author.id === args.id)
  },
}

export const GET_ALL_AUTHOR = {
  type: new GraphQLList(AuthorType),
  resolve() {
    return tempAuthor
  },
}
