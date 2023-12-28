import { container } from "webpack";
import { ModuleFederationPluginOptions } from "./types/types";

export function moduleFederation(options: ModuleFederationPluginOptions) {
    return new container.ModuleFederationPlugin({
        name: options.name,
        filename: options.filename || 'remoteEntry.js',
        exposes: options.exposes || {},
        remotes: options.remotes || {},
        shared: options.shared || {},
    })
}