declare function foo<T extends Element = Element>(): T;
const a = (foo() as HTMLInputElement).value;
