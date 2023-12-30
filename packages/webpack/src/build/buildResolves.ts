import { Configuration } from 'webpack';
import { BuildOptions } from '../types/types';

export function buildResolves (options: BuildOptions): Configuration['resolve'] {
    return {
        alias: {
            ...options.paths.alias,
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg'],
    }
}