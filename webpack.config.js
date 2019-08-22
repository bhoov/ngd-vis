module.exports = {
    // 1
    entry: './src/index.ts',
    // 2
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    // 3
    devServer: {
        contentBase: './public'
    }
};
