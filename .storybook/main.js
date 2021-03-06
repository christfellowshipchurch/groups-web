module.exports = {
  addons: ['@storybook/addon-essentials'],
  stories: ["../src/**/*.stories.[tj]s"],
  webpackFinal: async (config, { configType }) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => !Array.isArray(rule.test) && rule.test.test('.svg'),
    );

    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
};
