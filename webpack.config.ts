import path from 'path';
import { Configuration } from 'webpack';
import { BuildMode, BuildPaths, BuildPlatform, buildWebpack, moduleFederation } from './config';

interface EnvVariables {
    mode: BuildMode
    platform?: BuildPlatform
    port?: number
    analyzer?: boolean
    APP_REMOTE_URL?: string
}

module.exports = (env: EnvVariables) => {
    const isDev: boolean = env.mode !== 'production'

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
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
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        platform: env.platform ?? 'desktop',
        analyzer: env.analyzer,
    })

    

    // // Module Federation Configuration
    // const APP_REMOTE_URL = env.APP_REMOTE_URL ?? `http://localhost:3001`;

    // // Assuming you have a `packageJson` variable with proper typings
    // const deps: { dependencies: { [key: string]: string } } = require('./package.json');
    
    // config.plugins.push(moduleFederation({
    //     name: 'root',
    //     remotes: {
    //         'remoteAppName': `remoteAppName@${APP_REMOTE_URL}/remoteEntry.js`,
    //     },
    //     exposes: {
    //         './Router': './src/router/Router.tsx',
    //     },
    //     shared: { ...deps.dependencies },
    // }))

    return config
}