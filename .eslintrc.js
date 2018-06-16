module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations

        // disable rules from base configurations
        "no-console": "off",
    },
    "env": {
        "browser": true,
        "jquery": true,
        "commonjs": true
    }
};
