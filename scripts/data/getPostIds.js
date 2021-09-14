import path from 'path';
import fs from 'fs';

export default function getAllPostIds() {
    const postsDirectory = path.join(path.join(process.cwd(), 'public/content/posts'));
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        }
      }
    });
}
  