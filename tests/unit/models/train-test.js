import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('train', 'Unit | Model | train', {
  // Specify the other units that are required for this test.
  needs: ['model:train-station']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('should correctly concat trainName', function(assert) {
  let model = this.subject({
    manufacturer: 'NS',
    manufacturerModel: '123'
  });
  assert.equal(model.get('trainName'), 'NS123');
});

test('train should belong to a train station', function(assert) {
  const train = this.store().modelFor('train');
  const relationship = Ember.get(train, 'relationshipsByName').get('trainStation');

  assert.equal(relationship.key, 'trainStation');
  assert.equal(relationship.kind, 'belongsTo');
});
