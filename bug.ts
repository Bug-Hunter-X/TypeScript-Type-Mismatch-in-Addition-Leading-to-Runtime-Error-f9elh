function add(a: number, b: number): number {
  return a + b;
}

const result = add("hello", 10); // This will compile without error in TypeScript
console.log(result); // This will result in a runtime error