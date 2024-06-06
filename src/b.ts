export type Foo = {
  bar: typeof bar;
};

function bar(baz: string, qux: string) {
  return "bar" + baz + qux;
}