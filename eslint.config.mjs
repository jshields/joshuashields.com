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
