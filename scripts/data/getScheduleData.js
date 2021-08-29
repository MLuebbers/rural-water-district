import path from 'path';
import fs from 'fs';

export default function getScheduleData() {
    const fileName = path.join(path.join(process.cwd(), 'public/content', 'schedule.json'));
    const fileContents = fs.readFileSync(fileName, 'utf8');
    const jsonResult = JSON.parse(fileContents);
    return jsonResult;
}