import { objectType } from "nexus";
import author from "./author";
import { db } from "../../data";

const BlogPost = objectType({
    name: "BlogPost",
    definition(t) {
        t.nonNull.int("id")
        t.string("title")
        t.string("content")
        t.string("published"),
        t.field("author", {
            type: author,
            resolve: (parent) => {
                console.log("n query ran on top of main query")

                const postTitle = parent.title;
                
                if (!postTitle) {
                    return null;
                }

                try {
                    const postAuthor = db.getAuthorForPost(postTitle);
                    return postAuthor;
                } catch (error) {
                    console.error(error);
                    return null;
                }

                
            }
        })
    },
});

export default BlogPost;