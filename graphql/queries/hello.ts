import { nonNull, queryType, stringArg } from "nexus"

export default queryType({
    definition(t) {
      t.string('hello', {
        args: { name: nonNull(stringArg()) },
        resolve: (parent, { name }) => `Hello ${name || 'World'}!`,
      })
    },
})