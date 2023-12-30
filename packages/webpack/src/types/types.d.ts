export interface BuildPaths {
    entry: string;
    html: string;
    public: string;
    output: string;
    alias: Record<string, string | string[]>;
}

export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildOptions {
    isDev: boolean;
    isProd: boolean;
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    platform: BuildPlatform;
    analyzer?: boolean;
}

// Module Federation
export interface ModuleFederationPluginOptions {
    name: string;
    filename?: string;
    remotes?: Record<string, string>;
    exposes?: Record<string, string>;
    shared?: Record<string, any>;
}
