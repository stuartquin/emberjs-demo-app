import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    like: function() {
      this.set("likes", this.get("likes") + 1);
    },
    toggleBody: function() {
      this.toggleProperty("isShowingBody");
    }
  }
});
