import DataLoader from "dataloader";
import { db } from "../../data";

const authorLoader = () => new DataLoader(async (postTitles: readonly string []) => {

    const authors = db.getAuthorsForPosts(postTitles);

    return authors;

})

export default authorLoader;