import { BuildOptions } from "../build/types/types";
import { removeDataTestIdBuildPlugin } from "./removeDataTestIdBuildPlugin";

export function builBabelLoader(options: BuildOptions) {
    const plugins = []

    if(options.isDev) {
        plugins.push(
            [
                removeDataTestIdBuildPlugin,
                {
                    props: ['data-testId'],
                }
            ]
        )
    }

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                [
                    '@babel/preset-react', 
                    {
                        'runtime': options.isDev ? 'automatic' : 'classic'
                    }
                ],
            ],
            plugins: plugins.length ? plugins : undefined
          }
        }
    }

}