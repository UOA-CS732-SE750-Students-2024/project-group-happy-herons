module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV);
  const isTest = api.env("test");

  const plugins = [
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
      },
    ],
  ];

  // Only add this plugin if it's not in the test environment
  if (!isTest) {
    plugins.push("nativewind/babel");
  }

  return {
    presets: ["babel-preset-expo"],
    plugins: plugins,
  };
};
