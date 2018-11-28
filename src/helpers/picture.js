export const defaultSizeSequence = ['medium', 'small', 'extraSmall', 'large', 'extraLarge'];

export const getDefaultSource = (sources, defaultSize) => {
  if (!sources) {
    return '';
  }

  if (sources[defaultSize]) {
    return sources[defaultSize];
  }

  return defaultSizeSequence.reduce((acc, cur) => {
    if (acc) return acc;
    return sources[cur] || acc;
  }, null);
};
