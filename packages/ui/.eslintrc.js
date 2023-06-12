module.exports = {
  ...require('@comosus/config-eslint/ui-library'),
  root: true,
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  },
  extends: ['plugin:storybook/recommended']
};