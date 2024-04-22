import { makeSchema } from 'nexus'
import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import requireAll from 'require-all'
import { PubSub } from 'graphql-subscriptions'

import loaders from "./graphql/dataLoaders/loaders"
const pubsub = new PubSub()


const queries = requireAll({
  dirname: __dirname + '/graphql/queries',
  filter: /^(.+)\.ts$/,
  recursive: true,
})

const mutations = requireAll({
  dirname: __dirname + '/graphql/mutations',
  filter: /^(.+)\.ts$/,
  recursive: true,
})

const subscriptions = requireAll({
  dirname: __dirname + '/graphql/subscriptions',
  filter: /^(.+)\.ts$/,
  recursive: true,
})


const types = [...Object.values(queries), ...Object.values(mutations), ...Object.values(subscriptions)]

const schema = makeSchema({
  types,
  outputs: {
    schema: __dirname + '/nexus/generated/schema.graphql',
    typegen: __dirname + '/nexus/generated/typings.ts',
  },
})





const yoga = createYoga({ schema,
  context: req => ({
    ...req,
    loaders,
    pubsub
  }),
 })

const server = createServer(yoga)

// Start the server and you're done!
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})