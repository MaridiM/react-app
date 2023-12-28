import path from 'path';
import { Configuration, container } from 'webpack';
import { BuildMode, BuildPlatform, BuildPaths, buildWebpack } from '@packages/webpack';
import packageJson from './package.json'

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
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        platform: env.platform ?? 'desktop',
        analyzer: env.analyzer,
    })

    const APP_REMOTE_URL = env.APP_REMOTE_URL ?? 'http://localhost:3001'

    config.plugins.push(new container.ModuleFederationPlugin({
        name: 'root',
        filename:'remoteEntry.js',
        remotes: {
            'about': `about@${APP_REMOTE_URL}/remoteEntry.js`,
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