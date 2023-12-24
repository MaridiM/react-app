import { BuildOptions } from "../build/types/types";
import { removeDataTestIdBabelPlugin } from './removeDataTestIdBuildPlugin'

export function builBabelLoader(options: BuildOptions) {
    const plugins: any[] = []

    if(options.isProd) {
        plugins.push([
            removeDataTestIdBabelPlugin,
            {
                props: ['data-testid'],
            },
        ])
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