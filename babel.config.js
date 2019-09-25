module.exports = function(api) {
    api.cache(true);
    return {
        presets: [
            'module:metro-react-native-babel-preset',
            "@babel/preset-env",
            "@babel/preset-flow"
        ],
        plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import"
        ]
    };
};
