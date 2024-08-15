// GENERIC HELPERS

// https://stackoverflow.com/a/22015930
export const zip = (a: any[], b: any[]): [any, any][] => a.map((k, i) => [k, b[i]]);

// ASTRO HELPERS

export const cmpPostPubDate = (a: {data: {pubDate: Date}}, b: {data: {pubDate: Date}}) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf();