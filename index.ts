import express, { Express } from "express"
import { graphqlHTTP } from "express-graphql" // allow express to understand graphql
import dotenv from "dotenv"
import { schema } from "schema"

dotenv.config()
const port = process.env.PORT

const app: Express = express()

// middleware for '/graphql'
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
