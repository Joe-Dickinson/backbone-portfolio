app.models.User = Backbone.Model.extend({

  localStorage: new Backbone.LocalStorage('portfolio-user'),

  initialize: function() {
    this.bind("change:firstName change:lastName", this.setFullName);
  },

  setFullName: function() {
    this.set("fullName", this.getName());
  },

  getName: function() {
      return _.compact([this.get("firstName"), this.get("lastName")]).join(" ");
    }

    return this.get("firstName") + " " + this.get("lastName");
  }
});

