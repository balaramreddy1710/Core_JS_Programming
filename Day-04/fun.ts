function func(): void {
  console.log("Hi there");
}

function func1(name: string): void {
  console.log(`HI ${name}`);
}

function func2(a: number, b: number) {
  return a + b;
}

function func3(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((c, d) => c + d, 0);
}

type num = (a: number, b: number) => number;

const func4: num = (a, b) => a + b;

console.log(func4(1901, 213));
