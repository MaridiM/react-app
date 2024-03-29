import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import ReactRefreshTypeScript from 'react-refresh-typescript'
import type { ModuleOptions } from 'webpack';
import { buildBabelLoader } from '../babel/buildBabelLoader';
import type { BuildOptions } from '../types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    // Image Loader
    const fileLoader = {
        test: /\.(png|jpe?g|gif|webp|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // Svg Loader
    const svgLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentcolor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };

    // Style Module Loader
    const styleModuleLoader = {
        loader: 'css-loader',
        options: {
            modules: {
                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                localIdentName: options.isDev
                    ? '[path][name]__[local]--[hash:base64:5]'
                    : '[hash:base64:8]',
            },
        },
    };

    // Style Loader
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            styleModuleLoader,
            'postcss-loader',
            'sass-loader',
        ],
    };

    // Typescript Loader
    // const typescriptLoader = {
    //     exclude: /node_modules/,
    //     test: /\.tsx?$/,
    //     use: {
    //         loader: 'ts-loader',
    //         options: {
    //             /** Уберает перезагрузку при изменении */
    //             getCustomTransformers: () => ({
    //                 before: [options.isDev && ReactRefreshTypeScript()].filter(Boolean),
    //             }),
    //             // Делает проверку типов
    //             transpileOnly: options.isDev,
    //         },
    //     },
    // }

    // Babele Loader
    const babelLoader = buildBabelLoader(options);

    return [
        fileLoader,
        svgLoader,
        cssLoader,
        // typescriptLoader,
        babelLoader,
    ];
}
