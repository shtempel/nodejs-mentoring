let inString = process.openStdin();

console.log('Type any string...');

const revertString = (str: string): string => str.toString().split('').reverse().join('').trim();

inString.addListener('data', (str: string) => console.log(revertString(str)));
