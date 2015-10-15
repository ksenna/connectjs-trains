import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'connectjs/tests/helpers/start-app';

module('Acceptance | train station', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /train-station', function(assert) {
  visit('/train-station');

  andThen(function() {
    assert.equal(currentURL(), '/train-station');
  });
});

test('train stations should be listed on the page', function(assert) {
  visit('/train-station');

  andThen(function() {
    var stations = find('.train-station-list .train-station');
    assert.equal(stations.length, 4);
  });
});
