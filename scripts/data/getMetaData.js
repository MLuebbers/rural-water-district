import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import processTags from '../util/processTags';

export default function getMetaData() {
    const fileName = path.join(path.join(process.cwd(), 'public/content', 'meta.json'));
    const fileContents = fs.readFileSync(fileName, 'utf8');
    const jsonResult = JSON.parse(fileContents);
    jsonResult.tags = getAllTags();
    return jsonResult;
}

function getAllTags() {
    const postsDirectory = path.join(path.join(process.cwd(), 'public/content/posts'));
    const fileNames = fs.readdirSync(postsDirectory);
    let tags = {};

    fileNames.forEach((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        const tagsForPost = processTags(matterResult.data.tags);
        tagsForPost.forEach((tag) => {
            if(tags[tag]){
                tags[tag].push(id)
            } else {
                tags[tag] = [id];
            }
        });
    });

    return tags;
}