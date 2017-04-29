let dig = (o, ...args) => {
  if (args.length === 0) {
    return o;
  }

  o = o[args.shift()];

  if (typeof o === 'undefined') {
    return null;
  }

  return dig(o, ...args);
}

module.exports = {
  init: () => {
    Object.prototype.dig = function(...args) {
      return dig(this, ...args);
    }
  },
  dig: dig
}
