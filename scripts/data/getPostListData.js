import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import processTags from '../util/processTags';

export default function getPostListData(filter) {
    const postsDirectory = path.join(path.join(process.cwd(), 'public/content/posts'));
    let tags = {};
    const fileNames = fs.readdirSync(postsDirectory);
    
    const allPostData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        if((filter && filter(processTags(matterResult.data.tags))) || !filter) {
            return {
                id,
                ...matterResult.data,
            };
        } else { 
            return null;
        }
    }).filter(e => { return e ? true : false });

    return allPostData?.sort(({ data: a }, { data: b }) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    }) ?? [];
}