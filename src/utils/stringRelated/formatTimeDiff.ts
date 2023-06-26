/**
 *
 * @param timeDiff is a number in milliseconds
 * @returns a string in format "x years ago", "x months ago", "x days ago" or "x hours ago" or "x minutes ago" or "x seconds ago"
 */
export const formatTimeDiff = (timeDiff: number) => {
  return timeDiff > 3.154e10
    ? `${Math.floor(timeDiff / 3.154e10)} years ago`
    : timeDiff > 2.628e9
    ? `${Math.floor(timeDiff / 2.628e9)} months ago`
    : timeDiff > 8.64e7
    ? `${Math.floor(timeDiff / 8.64e7)} days ago`
    : timeDiff > 3.6e6
    ? `${Math.floor(timeDiff / 3.6e6)} hours ago`
    : timeDiff > 60000
    ? `${Math.floor(timeDiff / 60000)} minutes ago`
    : `${Math.floor(timeDiff / 1000)} seconds ago`;
};
