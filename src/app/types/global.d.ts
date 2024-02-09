/*Файл используется для обьявления модулей .module.scss в глобальном пространстве имен,
без него будет ошибка при использовании модульности css
В пример Counter.tsx использует import cls from './Counter.module.scss'
без файла будет ошибка*/
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGAElement>>;
    export default SVG;
}