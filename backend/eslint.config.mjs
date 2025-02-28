import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        it: "readonly",
        describe: "readonly"
      }
    }
  },
  { ignores: ["**/node_modules/", ".git/", "coverage/"] },
  { languageOptions: { globals: { ...globals.node } } },
  { languageOptions: { globals: { ...globals.jest } } },
  pluginJs.configs.recommended,
];