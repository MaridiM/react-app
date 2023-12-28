import path from 'path';
import { Configuration, container } from 'webpack';
import { BuildMode, BuildPlatform, BuildPaths, buildWebpack } from '@packages/webpack';
import packageJson from './package.json'


interface EnvVariables {
    mode: BuildMode
    platform?: BuildPlatform
    port?: number
    analyzer?: boolean
}

module.exports = (env: EnvVariables) => {
    const isDev: boolean = env.mode !== 'production'

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        public: path.resolve(__dirname, 'public'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        alias: {
            '*': path.resolve(__dirname, 'src'),
            'app': path.resolve(__dirname, 'src/app'),
            'pages': path.resolve(__dirname, 'src/pages'),
            'widgets': path.resolve(__dirname, 'src/widgets'),
            'features': path.resolve(__dirname, 'src/features'),
            'entities': path.resolve(__dirname, 'src/entities'),
            'shared': path.resolve(__dirname, 'src/shared'),
            'assets': path.resolve(__dirname, 'src/shared/assets'),
            'icons': path.resolve(__dirname, 'src/shared/assets/icons'),
        }
    }

    const config: Configuration = buildWebpack({
        paths,
        isDev,
        isProd: !isDev,
        port: env.port ?? 3001,
        mode: env.mode ?? 'development',
        platform: env.platform ?? 'desktop',
        analyzer: env.analyzer,
    })

    config.plugins.push(new container.ModuleFederationPlugin({
        name: 'about',
        filename: 'remoteEntry.js',
        exposes: {
            './Router': './src/router/Router.tsx',
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
                requiredVersion: packageJson.dependencies['react'],
            },
            'react-router-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-router-dom'],
            },
            'react-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-dom'],
            },
        },
    }))

    return config
}