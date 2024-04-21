import { extendType } from "nexus";
import BlogPost from "../objects/blogPost";

export default extendType({
    type: 'Query',
    definition(t) {
        t.list.field('blogPosts', {
            type: BlogPost,
            resolve:  async (_parent, _args) => {
                return [
                    {
                        id: 1,
                        title: "Post 1",
                        content: "This is just the content of the post",
                        publish: "2023-01-01"
                    },
                    {
                        id: 2,
                        title: "Post 2",
                        content: "This is just the content of the post",
                        publish: "2023-01-02"
                    }
                ];
            },
        });
    },
});
