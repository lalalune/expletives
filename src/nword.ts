export function nword(text: string) {
    const r = new RegExp(`n+[i1l|]+[gkq469]+[e3a4i]+[ra4]s?`)
    return r.test(text)
  }