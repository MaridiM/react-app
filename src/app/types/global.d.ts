declare module '*.sass' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module '*.css' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import React from 'react';
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>
    export default SVG
}


declare module '*.webp';
declare module '*.gif';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module 'icons';

// Global variables
declare const __ENV__: boolean;
declare const __DEV__: boolean;
declare const __PROD__: boolean;
declare const __TEST__: boolean;
declare const __VERSION__: string;
declare const __BUILD_DATE__: string;
declare const __PLATFORM__: 'mobile' | 'desctop';