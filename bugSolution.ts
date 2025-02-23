function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result = add(10, 20); 
console.log(result); // Output: 30

try {
  const result2 = add("hello", 10); 
  console.log(result2);
} catch (error) {
  console.error(error.message); //Output: Both arguments must be numbers
}
