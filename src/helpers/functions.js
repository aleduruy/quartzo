export const bindAll = (context, funcNames) => {
  funcNames.forEach(name => {
    context[name] = context[name].bind(context);
  });
};

export const debounce = (callback = f => f, wait, context) => {
  let timeout = null;
  let callbackArgs = null;

  const later = () => callback.apply(context, callbackArgs);

  return (...args) => {
    callbackArgs = args;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
