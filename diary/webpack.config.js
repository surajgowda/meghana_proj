// webpack.config.js

export const resolve = {
    fallback: {
        util: require.resolve('util/'),
        path: require.resolve('path-browserify'),
    },
};