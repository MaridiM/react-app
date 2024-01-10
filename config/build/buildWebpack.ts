import type { Configuration } from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import type { BuildOptions } from '../types/types';

export function buildWebpack(options: BuildOptions): Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        devtool: options.isDev ? 'inline-source-map' : 'source-map',
        devServer: options.isDev ? buildDevServer(options) : undefined,
        performance: {
            hints: false,
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            },
        },
    };
}
