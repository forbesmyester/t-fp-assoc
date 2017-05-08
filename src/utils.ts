export interface Assoc {
    <A, B>(k: string, v: A, ob: {[k: string]: B}): {[k: string]: B|A};
    <X, K extends keyof X>(k: K, v: X[K], a: X): X;
}

let assoc: Assoc = (k, v, ob) => {
    let r = Object.assign({}, ob);
    r[k] = v;
    return r;
};

export default assoc;
