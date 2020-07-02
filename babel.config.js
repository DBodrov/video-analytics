module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@emotion/babel-preset-css-prop',
      {
        autoLabel: true,
        labelFormat: '[local]',
      },
    ],
  ],
  plugins: ['emotion'],
};
