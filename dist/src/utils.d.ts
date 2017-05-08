export interface Assoc {
    <A, B>(k: string, v: A, ob: {
        [k: string]: B;
    }): {
        [k: string]: B | A;
    };
    <X, K extends keyof X>(k: K, v: X[K], a: X): X;
}
declare let assoc: Assoc;
export default assoc;
