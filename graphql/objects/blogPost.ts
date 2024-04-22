import { objectType } from "nexus";
import author from "./author";

const BlogPost = objectType({
    name: "BlogPost",
    definition(t) {
        t.nonNull.int("id")
        t.string("title")
        t.string("content")
        t.string("published"),
        t.field("author", {
            type: author,
            resolve: (parent, args, context) => {

                const postTitle = parent.title;
                
                if (!postTitle) {
                    return null;
                }

                return context.loaders.authorLoader.load(postTitle);

            }
        })
    },
});

export default BlogPost;