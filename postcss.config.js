module.exports = {
    plugins: {
        'postcss-preset-env': {
            stage: 3,
        },
        'cssnano': {
            preset: ['default'],
        }
    }
};