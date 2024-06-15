import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended, // Recommended config applied to all files
    // Override the recommended config
    {
        rules: {
            indent: ["error", 4],
            "no-unused-vars": "warn",
            "linebreak-style": ["error", "unix"],
            "semi": ["error", "always"],
            "no-console": "off",
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jquery,
                ...globals.commonjs,
            },
        },
    }
];

// import globals from "globals";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import js from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all
// });

// export default [...compat.extends("eslint:recommended"), {
//     languageOptions: {
//         globals: {
//             ...globals.browser,
//             ...globals.jquery,
//             ...globals.commonjs,
//         },
//     },

//     rules: {
//         indent: ["error", 4],
//         "linebreak-style": ["error", "unix"],
//         semi: ["error", "always"],
//         "no-console": "off",
//     },
// }];

// module.exports = {
//     "extends": "eslint:recommended",
//     "rules": {
//         // enable additional rules
//         "indent": ["error", 4],
//         "linebreak-style": ["error", "unix"],
//         "semi": ["error", "always"],

//         // override default options for rules from base configurations

//         // disable rules from base configurations
//         "no-console": "off",
//     },
//     "env": {
//         "browser": true,
//         "jquery": true,
//         "commonjs": true
//     }
// };
