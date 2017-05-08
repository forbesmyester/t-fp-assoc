import test from 'ava';
import assoc from '../src/utils';

test('can assoc kv pairs', (t) => {
    let input: {[k: string]: number} = {b: 2};
    let result = assoc('a', 'one', input);
    t.deepEqual(result, {a: 'one', b: 2});
});

interface XX { a: string; b: number; };

test('can assoc typed object', (t) => {
    let xx1: XX = {a: 'str', b: -1};
    let xx2: XX = assoc('b', 10, xx1);
    let result = assoc('a', 'string', xx2);
    t.deepEqual(result, {a: 'string', b: 10});
});

