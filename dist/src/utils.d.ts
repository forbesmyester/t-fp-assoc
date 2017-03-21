export default function assoc<A, B>(k: string, v: A, ob: {
    [k: string]: B;
}): {
    [k: string]: B | A;
};
