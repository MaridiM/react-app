import type { PluginItem } from '@babel/core';

export function removeDataTestIdBabelPlugin(): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbiddenProps = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;
                        if ((forbiddenProps as string[]).includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
