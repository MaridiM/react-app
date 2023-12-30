import { container } from "webpack";
import { ModuleFederationPluginOptions } from "./types/types";

export function moduleFederation(options: ModuleFederationPluginOptions) {
    const shared =  {
        ...options.shared,
        react: {
            singleton: true,
            eager: true,
            requiredVersion: options.shared ? options.shared['react'] : false,
        },
        'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: options.shared ? options.shared['react-dom'] : false,
        },
        'react-router-dom': {
            singleton: true,
            eager: true,
            requiredVersion: options.shared ? options.shared['react-router-dom'] : false,
        },
    }


    return new container.ModuleFederationPlugin({
        name: options.name,
        filename: options.filename || 'remoteEntry.js',
        exposes: options.exposes || {},
        remotes: options.remotes || {},
        shared,
    })
}