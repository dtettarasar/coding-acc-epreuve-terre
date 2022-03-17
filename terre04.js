// Exercice 5 : Pair ou impair

const args = process.argv.slice(2);
const pattern = /^-?[0-9]+$/;
const argTester = pattern.test(args[0]);
console.log(argTester);