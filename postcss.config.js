import postcssPresetEnv from 'postcss-preset-env';

const config = {
    parser: 'sugarss',
    syntax: 'postcss-scss',
    plugins: [
        require('autoprefixer'),
        postcssPresetEnv({
            features: {
                'nesting-rules': {
                    noIsPseudoSelector: false,
                },
            },
        }),
    ],
};

export default config;
