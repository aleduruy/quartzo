export const textTransform = {
  default: {
    acom: 'lowercase',
    suba: 'none',
    shop: 'uppercase',
  },
  custom: {
    acom: 'lowercase',
    suba: 'none',
    shop: 'none',
  },
};

export const getBrandName = brand => {
  if (brand == 'americanas') {
    brand = 'acom';
  }
  if (brand == 'submarino') {
    brand = 'suba';
  }
  if (brand == 'shoptime') {
    brand = 'shop';
  }
  return brand;
};

export const getTextTransform = (brand, children, custom) => {
  let text = `${children}`;
  let type = custom ? textTransform.custom[getBrandName(brand)] : textTransform.default[getBrandName(brand)];

  switch (type) {
    case 'uppercase':
      return toUpperCase(text);
    case 'lowercase':
      return toLowerCase(text);
    case 'none':
      return text;
  }
};

export const toUpperCase = children => {
  return `${children.toUpperCase()}`;
};

export const toLowerCase = children => {
  return `${children.toLowerCase()}`;
};
