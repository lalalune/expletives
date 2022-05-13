export function nazi(text: string) {
    const r = new RegExp(`n+[a4|]+[z]+[i1l]s?`)
    return r.test(text)
  }  