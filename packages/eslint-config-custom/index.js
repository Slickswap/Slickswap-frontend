module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-var-requires": "warning",
  },
};
