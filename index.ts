import express, { Express, Request, Response } from "express"
import { graphqlHTTP } from "express-graphql" // allow express to understand graphql
import dotenv from "dotenv"

dotenv.config()
const port = process.env.PORT

const app: Express = express()
app.use("/graphql", graphqlHTTP)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
