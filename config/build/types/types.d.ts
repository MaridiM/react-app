export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    alias: Record<string, string | string[]>;
}

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
    isDev: boolean;
    isProd: boolean;
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    analyzer?: boolean;
}