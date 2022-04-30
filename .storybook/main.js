const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
  webpackFinal: (config) => {
    const cwd = process.cwd();
    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/core": path.join(cwd, "node_modules", "@emotion", "react"),
      "@emotion/styled": path.join(cwd, "node_modules", "@emotion", "styled"),
    };

    return config;
  },
};
