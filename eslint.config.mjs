import sharedConfig from "@zen-analytics/config/eslint/eslint-preset.js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
    ...sharedConfig,
    {
        plugins: {
            "@next/next": nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
            // Additional overrides
            "no-var": "off",
            "prefer-rest-params": "off",
            "prefer-spread": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            "@next/next/no-img-element": "off",
            "react/no-unescaped-entities": "off",
            "no-constant-binary-expression": "off"
        },
    }
];
