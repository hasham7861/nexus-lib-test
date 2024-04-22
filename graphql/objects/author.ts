import { objectType } from "nexus";

const author = objectType({
    name: "Author",
    definition(t){
        t.nonNull.int("id"),
        t.nonNull.string("name")
    }
})

export default author;