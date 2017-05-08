# t-fp-assoc

Simple Functional `assoc` function that can be used against typed Interfaces or loose KV pairs.

## Types

The following function signatures exist:

    <A, B>assoc(k: string, v: A, ob: {[k: string]: B}): {[k: string]: B|A};
    <X, K extends keyof X>assoc(k: K, v: X[K], a: X): X;


## Usage - KV Pairs

    import assoc from 't-fp-assoc';

    let input: {[k: string]: number} = {b: 2};
    let result = assoc('a', 'one', input); // {a: 'one', b: 2}

The type for result is `{ [k: string]: string | number }`.

## Usage - Interfaces

    import assoc from 't-fp-assoc-single-type';

    interface XX { a: string; b: number; };

    let xx1: XX = {a: 'str', b: -1};
    let xx2: XX = assoc('b', 10, xx1);
    let result = assoc('b', 10, xx2);

The type for result is `XX`.

## Installation

Use `npm install t-fp-assoc` to install.
