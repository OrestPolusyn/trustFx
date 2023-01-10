module.exports = {
  plugins: [
    'preset-default',
    'prefixIds',
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
  ],
};
