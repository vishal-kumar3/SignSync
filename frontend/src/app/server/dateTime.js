export function formatRelativeTime(timestampStr) {
  const timestamp = new Date(timestampStr);
  const currentTime = new Date();
  const timeDifference = (currentTime - timestamp) / 1000; // Difference in seconds

  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (let interval in intervals) {
    const value = Math.floor(timeDifference / intervals[interval]);
    if (value >= 1) {
      return value + " " + interval + (value > 1 ? "s" : "") + " ago";
    }
  }

  return "just now";
}
