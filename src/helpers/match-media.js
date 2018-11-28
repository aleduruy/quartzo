export const medias = { xxs: 320, xs: 480, sm: 768, md: 1025, lg: 1280, xl: 1360 };
export const allMedias = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'];

export const getMedia = breakpoint => {
  switch (breakpoint) {
    case 'xxs':
      return medias.xxs;
    case 'xs':
      return medias.xs;
    case 'sm':
      return medias.sm;
    case 'md':
      return medias.md;
    case 'lg':
      return medias.lg;
    case 'xl':
      return medias.xl;
    default:
      return medias.sm;
  }
};

export const isMobile = () => {
  return getBreakpoint() === 'xxs' || getBreakpoint() === 'xs' || getBreakpoint() === 'sm';
};

export const isDesktop = () => {
  return getBreakpoint() === 'md' || getBreakpoint() === 'lg' || getBreakpoint() === 'xl';
};

export function getBreakpoint() {
  let media = 'xxs';
  if (typeof window !== 'undefined') {
    if (window.innerWidth > medias.xxs && window.innerWidth <= medias.xs) {
      media = 'xs';
    }
    if (window.innerWidth > medias.xs && window.innerWidth <= medias.sm) {
      media = 'sm';
    }
    if (window.innerWidth > medias.sm && window.innerWidth <= medias.md) {
      media = 'md';
    }
    if (window.innerWidth > medias.md && window.innerWidth <= medias.lg) {
      media = 'lg';
    }
    if (window.innerWidth > medias.lg) {
      media = 'xl';
    }
  }
  return media;
}
