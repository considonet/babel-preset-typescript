import { declare } from "@babel/helper-plugin-utils";

import pluginProposalObjectRestSpread from "@babel/plugin-proposal-object-rest-spread";
import pluginSyntaxDynamicImport from "@babel/plugin-syntax-dynamic-import";
import pluginProposalDecorators from "@babel/plugin-proposal-decorators";
import pluginProposalClassProperties from "@babel/plugin-proposal-class-properties";
import pluginProposalPrivateMethods from "@babel/plugin-proposal-private-methods";
import presetEnv from "@babel/preset-env";
import presetReact from "@babel/preset-react";
import presetTypeScript from "@babel/preset-typescript";
import presetTypeScriptVue from "babel-preset-typescript-vue";

export default declare(
(api, {
    vue = false,
    react = true,
    presetEnvSettings = {
      "modules": "auto",
      "useBuiltIns": "usage",
      "corejs": 3
    },
    presetReactSettings = {}
  }) => {
  api.assertVersion(7);

  if (typeof vue !== "boolean") {
    throw new Error("vue must be a boolean, or undefined");
  }

  if (typeof presetEnvSettings !== "object") {
    throw new Error("presetEnvSettings must be an object, or undefined");
  }

  if (typeof presetReactSettings !== "object") {
    throw new Error("presetEnvSettings must be an object, or undefined");
  }

  const presets = [];

  presets.push(vue ? presetTypeScriptVue : presetTypeScript);

  presets.push([
    presetEnv,
    presetEnvSettings
  ]);

  if(react) {
    presets.push([
      presetReact,
      presetReactSettings
    ]);
  }

  return {
    "plugins": [
      pluginProposalObjectRestSpread,
      pluginSyntaxDynamicImport,
      [ pluginProposalDecorators, { "legacy": true } ],
      [ pluginProposalClassProperties, { "loose": true } ],
      [ pluginProposalPrivateMethods, { "loose": true }]
    ],
    presets
  };

});
