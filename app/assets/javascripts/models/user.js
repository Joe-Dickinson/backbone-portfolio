app.models.User = Backbone.Model.extend({
  
  localStorageL new Backbone.LocalStorage('portfolio-user'),

  getName: function() {
    return this.get("firstName") + " " + this.get("lastName");
  }
});

