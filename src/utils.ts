export default function assoc<A, B>(k: string, v: A, ob: {[k: string]: B}): {[k: string]: B|A} {
    let {...r}: {[k: string]: B|A} = {...ob};
    r[k] = v;
    return r;
}
