import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | blogs/category/post', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:blogs/category/post');
    assert.ok(route);
  });
});
