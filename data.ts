// Local store for testing api

export interface IPost  {
    id: number;
    title: string;
    content: string;
    publish: string;
}

class DB {
    posts = [
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

    deletePost(post: IPost): void {
        this.posts = this.posts.filter(p => p.id !== post.id);
    }
}

export const db = new DB();
