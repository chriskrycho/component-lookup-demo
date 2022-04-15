import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';
import Foo from '../components/foo';
import Bar from '../components/bar';
import Baz from '../components/baz';

const Components = {
  foo: Foo,
  bar: Bar,
  baz: Baz,
};

export default helper(([name]) => {
  assert('Passed an invalid name', Object.keys(Components).includes(name));
  return Components[name];
});
