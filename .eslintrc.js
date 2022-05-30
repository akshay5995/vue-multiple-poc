module.exports = {
  root: true,
  plugins: ["@nrwl/nx"],
  extends: ["plugin:vue/recommended", "plugin:vue/base"],
  overrides: [
    {
      files: ["*.js", "*.vue", "*.ts", "*.jsx", "*.tsx"],
      rules: {
        "@nrwl/nx/enforce-module-boundaries": [
          "error",
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: "scope:vue2",
                onlyDependOnLibsWithTags: ["scope:vue2"],
              },
              {
                sourceTag: "scope:vue3",
                onlyDependOnLibsWithTags: ["scope:vue3"],
              },
            ],
          },
        ],
      },
    },
    {
      files: ["*.js", "*.jsx"],
      extends: ["plugin:@nrwl/nx/javascript"],
      rules: {},
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@nrwl/nx/typescript"],
      parserOptions: { project: "./tsconfig.*?.json" },
      rules: {},
    },
  ],
};
