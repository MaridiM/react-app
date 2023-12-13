import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin'
import { Configuration, DefinePlugin, ProgressPlugin } from 'webpack';
import { BuildOptions } from './types/types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import path from 'path';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: options.paths.html,
            favicon: path.resolve(options.paths.public, 'favicon.ico')
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
        })
    ];

    if (options.isDev) {
        plugins.push(new ProgressPlugin());
        /** Выносить проверку типов в отдельный процесс: не нагружая сборку */
        plugins.push(new ForkTsCheckerWebpackPlugin());
        /** Уберает перезагрузку при изменении */
        plugins.push(new ReactRefreshWebpackPlugin());
    }
    
    if (options.isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[id].[contenthash:8].css"
        }));

        /** Позволяет перенести файлы */
        plugins.push(new CopyPlugin({
            patterns: [ 
                { 
                    from: path.resolve(options.paths.public, 'locales'),
                    to: path.resolve(options.paths.output, 'locales')
                },
            ],
        }));
    }
    
    if(options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}
