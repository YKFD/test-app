import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | type/category', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:type/category');
    assert.ok(route);
  });
});
