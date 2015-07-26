import Ember from 'ember';

var posts = {"posts": [
  {"title": "Hello World", "content": "This is the first post...", "likes": 3},
  {"title": "Learning EmberJS", "content": "Learning about components", "likes": 2},
]};

export default Ember.Route.extend({
  model: function() {
    return posts;
  }
});
