import { extendType, intArg, nonNull, stringArg } from "nexus";
import { db } from "../../data";
import BlogPost from "../objects/blogPost";

export default extendType({
    type: "Mutation",
    definition(t) {
        t.field("addPost", {
            type: BlogPost,
            args: {
                id: nonNull(intArg()),
                title: nonNull(stringArg()),
                published: nonNull(stringArg()),
                content: nonNull(stringArg())
            },
            resolve: (_parent, args) => {
                const post = {
                    title: args.title,
                    id: args.id,
                    published: args.published,
                    content: args.content
                };

                db.addPost(post)
                return post;
            }
        })
    }
})