type Foo = {
    bar: typeof bar;
};
declare function bar(baz: string): string;
type Foo$0 = {
    bar: typeof bar; // Wrong `bar` function. The correct one is obmitted :(
};
export { Foo as AFoo, Foo$0 as BFoo };
