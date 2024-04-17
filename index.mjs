import { queryType, stringArg, makeSchema, nonNull } from 'nexus'
import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: { name: nonNull(stringArg()) },
      resolve: (parent, { name }) => `Hello ${name || 'World'}!`,
    })
  },
})

const schema = makeSchema({
  types: [Query],
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