// Local store for testing api

export interface IPost  {
    id: number;
    title: string;
    content: string;
    published: string;
}

export interface IAuthor {
    id: number,
    name: string,
    posts: number []
}

class DB {
    posts = [
        {
            id: 1,
            title: "Post 1",
            content: "This is just the content of the post",
            published: "2023-01-01",
        },
        {
            id: 2,
            title: "Post 2",
            content: "This is just the content of the post",
            published: "2023-01-02",
        }
    ] as IPost[];

    authors = [
        {
            id: 3,
            name: "hasham",
            posts: [1]
        },
        {
            id: 4,
            name: "bobby",
            posts: [2]
        }
    ] as IAuthor[];

    constructor () {
        
    }

    getPosts(): IPost[] {
        return this.posts;
    }

    getAuthor(id: number ): IAuthor | undefined {
        return this.authors.find(author => author.id === id);
    }

    getAuthorForPost(postName: string): IAuthor | null {
        console.log("query is running n many times")
        const author = this.authors.find(author => {
            const postIds = author.posts
            for(let id of postIds){
                const post = this.getPostById(id);
                if(post?.title === postName){
                    return true;
                }
            }

            return false;

        });

        if(!author){
            return null;
        }

        return author;
    }

    getAuthorsForPosts(postTitles: readonly string []): IAuthor [] {
        // Cache posts metadata incase multiple authors contributed to same post
        const postTitleSet = new Set(postTitles);

        // Assume this is just one database query that runs once
        const authors = this.authors.filter(author => {
            return author.posts.some(postId => {
                const post = this.getPostById(postId);
                return post && postTitleSet.has(post.title);
            });
        });

        return authors;
   
    }


    getPost(name: string): IPost | undefined {
        return this.posts.find(post => post.title === name);
    }

    getPostById(id: number): IPost | undefined {
        return this.posts.find(post => post.id === id);
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
