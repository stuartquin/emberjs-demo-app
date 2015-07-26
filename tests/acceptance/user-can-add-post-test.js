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
  visit('/posts');
  fillIn('#title', 'Test Post');
  fillIn('#content', 'Test content');
  click('.create');

  andThen(function() {
    assert.equal(currentURL(), '/posts');
    assert.equal(find("article").length, 3);
  });
});
