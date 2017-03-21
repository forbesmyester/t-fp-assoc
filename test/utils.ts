import test from 'ava';
import assoc from '../src/utils';

test('can assoc', (t) => {
    t.deepEqual(
        assoc('a', 1, {b: 2}),
        {a: 1, b: 2}
    );
});
