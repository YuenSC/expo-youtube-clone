export const formatViewCount = (viewCount: number) => {
  return viewCount > 1_000_000
    ? `${(viewCount / 1_000_000).toFixed(1)}M`
    : viewCount > 1_000
    ? `${(viewCount / 1_000).toFixed(1)}K`
    : viewCount;
};
