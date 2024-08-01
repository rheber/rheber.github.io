// https://stackoverflow.com/a/22015930
export const zip = (a: any[], b: any[]): [any, any][] => a.map((k, i) => [k, b[i]]);