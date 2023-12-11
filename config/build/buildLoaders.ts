import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';

export function buildLoaders (options: BuildOptions): ModuleOptions['rules'] {
    // Image Loader
    const fileLoader = {
        test: /\.(png|jpe?g|gif|webp|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    
    // Svg Loader
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    // Style Module Loader
    const styleModuleLoader = {
        loader: "css-loader",
        options: {
            modules:{
                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                localIdentName: options.isDev
                    ? '[path][name]__[local]--[hash:base64:5]'
                    : '[hash:base64:8]' 
            },
        }
    }
    // Style Loader
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            styleModuleLoader,
            "sass-loader",
        ],
    }

    // TS Loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        fileLoader,
        svgLoader,
        cssLoader,
        typescriptLoader,
    ]
}