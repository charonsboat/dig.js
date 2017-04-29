module.exports = {
    entry: './src/dig.js',
    output: {
        path: './dist',
        filename: 'dig.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                query: {
                  presets: 'es2015',
                  plugins: [
                      'add-module-exports'
                  ]
                }
            }
        ]
    }
};
