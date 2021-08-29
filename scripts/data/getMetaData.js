import path from 'path';
import fs from 'fs';

export default function getMetaData() {
    const fileName = path.join(path.join(process.cwd(), 'public/content', 'meta.json'));
    const fileContents = fs.readFileSync(fileName, 'utf8');
    const jsonResult = JSON.parse(fileContents);
    return jsonResult;
}