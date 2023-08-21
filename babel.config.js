module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './components',
            '@context': './store/context',
            '@hooks': './hooks',
            '@lib': './lib',
            '@util': './util',
          },
        },
      ],
    ],
  };
};
