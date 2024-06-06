export type Foo = {
  bar: typeof bar;
};

function bar(baz: string) {
  return "bar" + baz;
}