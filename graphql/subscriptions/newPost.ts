import { extendType } from "nexus";
import BlogPost from "../objects/blogPost";
import { IPost } from "../../data";

export default extendType({
    type: "Subscription",
    definition(t) {
        t.field('postAdded', {
            type: BlogPost,
            subscribe: (_, __, context) => {
              return context.pubsub.asyncIterator('POST_ADDED')
            },
            resolve: (payload: IPost) => {
              return payload
            },
        })
    }
})