/*eslint-env es6*/

const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/server.ts'),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, '/build'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: { loader: 'ts-loader' },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
