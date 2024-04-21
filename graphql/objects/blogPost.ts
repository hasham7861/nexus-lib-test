import { objectType } from "nexus";

const BlogPost = objectType({
    name: "BlogPost",
    definition(t) {
        t.int("id")
        t.string("title")
        t.string("content")
        t.string("published")
    },
});

export default BlogPost;