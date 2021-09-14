export default function processTags(tags) {
    return tags?.split(/ *, */) ?? [];
}