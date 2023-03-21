import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

import { Build } from './src/utils/build.utils.js';

const { htmlWebpackTemplateConfig, components } = Build.prototype.generateHtmlWebpackTemplateConfig();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.css', '.scss'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Data Structures (Playground)',
            template: './src/index.html',
            filename: 'index.html',
            components,
        }),
        new CopyWebpackPlugin({
            patterns: [ { from: 'src/assets', to: 'images' } ]
        }),
   ].concat(htmlWebpackTemplateConfig),
};
