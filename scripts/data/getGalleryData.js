import path from 'path';
import fs from 'fs';

export default function getGalleryData() {
    const fileName = path.join(path.join(process.cwd(), 'public/content', 'gallery.json'));
    const fileContents = fs.readFileSync(fileName, 'utf8');
    const jsonResult = JSON.parse(fileContents);
    return jsonResult.images;
}