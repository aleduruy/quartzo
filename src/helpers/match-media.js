export const medias = { mobile: 320, tablet: 480, desktop: 1025 };

export const getMedia = breakpoint => {
  switch (breakpoint) {
    case 'mobile':
      return medias.mobile;
    case 'tablet':
      return medias.tablet;
    case 'desktop':
      return medias.desktop;
    default:
      return medias.mobile;
  }
};

export function getBreakpoint() {
  let media = 'mobile';
  if (typeof window !== 'undefined') {
    if (window.innerWidth > medias.tablet && window.innerWidth <= medias.desktop) {
      media = 'tablet';
    }
    if (window.innerWidth > medias.desktop) {
      media = 'desktop';
    }
  }
  return media;
}
