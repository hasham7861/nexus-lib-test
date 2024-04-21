import { nonNull, extendType, stringArg } from "nexus"

export default extendType({
    type: 'Query',
    definition(t) {
      t.string('hello', {
        args: { name: nonNull(stringArg()) },
        resolve: (parent, { name }) => `Hello ${name || 'World'}!`,
      })
    },
})