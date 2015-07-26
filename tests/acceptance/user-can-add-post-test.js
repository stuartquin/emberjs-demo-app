import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'demo-app/tests/helpers/start-app';

var application;

module('Acceptance | user can add post', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /user-can-add-post', function(assert) {
  visit('/user-can-add-post');

  andThen(function() {
    assert.equal(currentURL(), '/user-can-add-post');
  });
});
