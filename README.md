# @considonet/babel-preset-typescript

> Configurable TypeScript preset for Babel 7.x supporting Vue.js TS SFC, React, JS and TypeScript

## What is this?

This preset was created as a part of [G-Build](https://www.npmjs.com/package/@considonet/g-build) evolution. Starting from version 4.0, there are no longer configuration files for Babel and these have to be provided manually (as they are project-specific). Because all our existing legacy projects have exactly the same config, this package makes the transition to G-Build 4 and Babel TypeScript transpilation easy. Also it provides a setup which was proved to work for us.

This preset loads the following presets and plugins:

- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) - pre-configured but ready to be customized depending on configuration
- [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) optionally, depending on configuration
- [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) or our [babel-preset-typescript-vue](https://www.npmjs.com/package/babel-preset-typescript-vue) depending on configuration
- [@babel/plugin-proposal-object-rest-spread](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread)
- [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)
- [@babel/plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators) - with `legacy: true` to support TypeScript decorators
- [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - with `loose: true` to support TypeScript decorators

## Options

- `vue` (boolean, default: false) - enables TS Vue SFCs transpilation. Because the check is a potentially expensive operation, it is disabled by default. Once enabled, it replaces [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) with our own [babel-preset-typescript-vue](https://www.npmjs.com/package/babel-preset-typescript-vue) 

- `react` (boolean, default: true) - enables `@babel/preset-react`

- `presetEnvSettings` (object, default: see below) - configures `@babel/preset-env`.

The default setup is as follows:

```json
{
  "modules": "auto",
  "useBuiltIns": "usage",
  "corejs": 3
}
```

Please refer to [@babel/preset-env docs](https://babeljs.io/docs/en/babel-preset-env) for more details.

## Install

Using npm:

```sh
npm install --save-dev @considonet/babel-preset-typescript
```

or using yarn:

```sh
yarn add @babel/babel-preset-typescript --dev
```
