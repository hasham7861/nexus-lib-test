import { extendType, stringArg } from "nexus";
import BlogPost from "../objects/blogPost";
import { IPost, db } from "../../data";


export default extendType({
    type: 'Query',
    definition(t) {
        t.list.field('blogPosts', {
            type: BlogPost,
            args: {
                name: stringArg(),
            },
            resolve:  async (_parent, args) => {
                const {name} = args;
                if(name && name.length > 0) {
                    return [db.getPost(name) as IPost]
                }
                    
                return db.getPosts();
            },
        })
        t.int('blogPostsCount', {
            resolve: () => {
                const posts = db.getPosts();
                return posts.length;
            },
        });
    },
});
