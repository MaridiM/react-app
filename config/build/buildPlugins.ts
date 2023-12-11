import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, ProgressPlugin } from 'webpack';
import { BuildOptions } from './types/types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: options.paths.html })
    ];

    if (options.isDev) {
        plugins.push(new ProgressPlugin());
    }
    
    if (options.isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[id].[contenthash:8].css"
        }));
    }
    
    if(options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}
