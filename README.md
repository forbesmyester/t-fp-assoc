# t-fp-assoc

## Usage

Simple `assoc()` function wrote in Typescript.

    import assoc from 't-fp-assoc';

    let input: {[k: string]: number} = {b: 2};
    let result = assoc('a', 'one', input); // {a: 'one', b: 2}

The type for result is `{ [k: string]: string | number }`.

## Installation

Use `npm install t-fp-assoc` to install.
