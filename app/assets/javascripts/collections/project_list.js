app.collections.ProjectList = Backbone.Collection.extend({

  model: app.models.Project,
  localStorage: new Backbone.LocalStorage('portfolio-project'),

  initialize: function() {
    this.bind("add", this.getId);
  },

  getId: function(p) {
    if(this.user && p.get("userId") === undefined ) { 
      p.set({ userId : this.user.id });
    }
  }


});