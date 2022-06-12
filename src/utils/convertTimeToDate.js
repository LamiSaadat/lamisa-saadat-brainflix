export function convertTimeToDate(timestamp) {
  return timestamp.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}
