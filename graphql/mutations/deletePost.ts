import { extendType, intArg, nonNull } from "nexus";
import { db } from "../../data";

export default extendType({
    type: "Mutation",
    definition(t) {
        t.field("deletePost", {
            type: "Boolean",
            args: {
                id: nonNull(intArg()),
            },
            resolve(_parent, args) {
                const { id } = args;
                return db.deletePost(id);
            }
        })
    }
})