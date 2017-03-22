import test from 'ava';
import assoc from '../src/utils';

test('can assoc', (t) => {
    let input: {[k: string]: number} = {b: 2};
    let result = assoc('a', 'one', input);
    t.deepEqual(result, {a: 'one', b: 2});
});
