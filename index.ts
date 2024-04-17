import { queryType, stringArg, makeSchema, nonNull, mutationType } from 'nexus'
import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'


const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: { name: nonNull(stringArg()) },
      resolve: (parent, { name }) => `Hello ${name || 'World'}!`,
    })
  },
})

const mockMutateMethod = (name: string) => {
  console.log(`Goodbye ${name}`)
  return "Goodbye is sent"
}

const Mutation = mutationType({
  definition(t){
    t.string('sayGoodbye', {
      args: { name: nonNull(stringArg()) },
      resolve: (parent, { name }) => mockMutateMethod(name),
    })
  }
})

const schema = makeSchema({
  types: [Query, Mutation],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/typings.ts',
  },
})


const yoga = createYoga({ schema })

const server = createServer(yoga)

// Start the server and you're done!
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})