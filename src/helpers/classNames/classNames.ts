//record тайпскриптовый класс, которй обозначает ключ и значение (mods обьект где ключ=классБ значнеие=условие)
type Mods = Record<string, boolean | string | undefined>

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
    return [
        cls,
        Object.keys(mods)
          .filter(cls => mods[cls]).join(' '),
        ...additional
    ].join(' ')
      .trim();
}


//пример использования тест
console.log(classNames('test', { cls: true, sex: '123', slon: true }, ['cls1', 'cls3']))