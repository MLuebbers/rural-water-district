import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';


export default async function getPostData(id) {
    const postsDirectory = path.join(path.join(process.cwd(), 'public/content/posts'));
    const fullPath = path.join(postsDirectory, `${ id }.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const body = processedContent.toString();

    const tags = matterResult.tags;

    return {
        id,
        body,
        tags,
        ...matterResult.data,
    };
}