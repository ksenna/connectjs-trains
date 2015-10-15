import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('train-station', 'Unit | Model | train station', {
  // Specify the other units that are required for this test.
  needs: ['model:train']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('train station has many trains', function(assert) {
  const station = this.store().modelFor('train-station');
  const relationship = Ember.get(station, 'relationshipsByName').get('trains');

  assert.equal(relationship.key, 'trains');
  assert.equal(relationship.kind, 'hasMany');
});
