import { mutationType, nonNull, stringArg } from "nexus"

const mockMutateMethod = (name: string) => {
  console.log(`Goodbye ${name}`)
  return "Goodbye is sent"
}

export default mutationType({
  definition(t){
    t.string('sayGoodbye', {
      args: { name: nonNull(stringArg()) },
      resolve: (parent, { name }) => mockMutateMethod(name),
    })
  }
})
