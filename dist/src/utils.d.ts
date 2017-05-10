export interface Assoc {
    <Ob, K extends keyof Ob>(k: K, v: Ob[K], a: Ob): Ob;
    <A, B>(k: string, v: A, ob: {
        [k: string]: B;
    }): {
        [k: string]: B | A;
    };
    <Ob, V, K extends keyof Ob>(k: string, v: V, a: Ob): Ob & {
        [k: string]: Ob[K] | V;
    };
}
declare let assoc: Assoc;
export default assoc;
