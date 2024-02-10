// record тайпскриптовый класс, которй обозначает ключ и
// значение (mods обьект где ключ=классБ значнеие=условие)
type Mods = Record<string, boolean | string | undefined>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
    // .trim();
}

// пример использования тест
console.log(classNames('test', { cls: true, sex: '123', slon: true }, ['cls1', 'cls3']));
