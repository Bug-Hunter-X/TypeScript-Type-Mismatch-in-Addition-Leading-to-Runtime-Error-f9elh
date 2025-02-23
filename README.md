# TypeScript Type Mismatch Bug

This repository demonstrates a subtle bug in TypeScript where type mismatches during addition operations are not caught at compile time, leading to runtime errors.  The `add` function is intended to add two numbers but can be called with a string, resulting in unexpected string concatenation instead of numeric addition.

## How to Reproduce

1. Clone this repository.
2. Compile and run the `bug.ts` file using a TypeScript compiler (e.g., `tsc bug.ts && node bug.js`).

## Solution

The `bugSolution.ts` file shows how to avoid this by using stricter type checking to prevent the addition of mismatched types. This requires a runtime type check or using generics to handle different type of inputs.