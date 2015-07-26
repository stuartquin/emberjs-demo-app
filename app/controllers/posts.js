import Ember from 'ember';

export default Ember.Controller.extend({
  newTitle: "Something cool",
  newContent: "",
  actions: {
    addPost: function() {
      this.model.posts.addObject({
        "title": this.get("newTitle"),
        "content": this.get("newContent"),
        "likes": 0
      });
    }
  }
});
