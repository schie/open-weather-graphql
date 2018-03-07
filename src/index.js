const { GraphQLServer } = require('graphql-yoga')
const axios = require('axios')

require('dotenv').config();

const opts = {
  port: process.env.PORT
}

const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  opts
})

server.start(() => console.log(`Server is running at http://localhost:${opts.port}`))
