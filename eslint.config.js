module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 12,
            sourceType: "module",
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
];