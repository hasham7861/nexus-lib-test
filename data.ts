// Local store for testing api

export interface IPost  {
    id: number;
    title: string;
    content: string;
    published: string;
}

class DB {
    posts = [
        {
            id: 1,
            title: "Post 1",
            content: "This is just the content of the post",
            published: "2023-01-01"
        },
        {
            id: 2,
            title: "Post 2",
            content: "This is just the content of the post",
            published: "2023-01-02"
        }
    ] as IPost[];

    constructor () {
        
    }

    getPosts(): IPost[] {
        return this.posts;
    }

    getPost(name: string): IPost | undefined {
        return this.posts.find(post => post.title === name);
    }

    addPost(post: IPost): void {
        this.posts.push(post);
    }

    deletePost(postId: number): boolean {
        
        let newPosts = [];
        let isPostDeleted = false;
        for (let post of this.posts) {
            if(post.id !== postId){
                newPosts.push(post);
                isPostDeleted = true;
            }
        }
        this.posts = newPosts;
        return isPostDeleted;

    }
}

export const db = new DB();
