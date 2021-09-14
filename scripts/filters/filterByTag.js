export default function filterByTag(tag) {
    return (data) => {
      return (data?.includes(tag) ? true : false);
    }
}
  