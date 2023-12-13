import { PluginItem } from "@babel/core";

export function  removeDataTestIdBuildPlugin(): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbiddenProps = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if(forbiddenProps.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    }
                })
            }
        }
    }
}

function JSXIdentifier(current: any) {
    throw new Error("Function not implemented.");
}
