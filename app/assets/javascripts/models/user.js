app.models.User = Backbone.Model.extend({

  localStorage: new Backbone.LocalStorage('portfolio-user'),

  initialize: function() {
    this.projects = new new app.collections.ProjectList();
    // this.
    // this.bind("change:firstName change:lastName", this.setFullName);
    this.setFullName();
  },

  setFullName: function() {
    this.set("fullName", this.getName());
  },

  getName: function() {
    return _.compact([this.get("firstName"), this.get("lastName")]).join(" ");
  },

  validate: function(attrs) {
    if(attrs.title === undefined) {
      return { message: "First Name must be defined" };
    } else if(attr.lastName === undefined) {
      return { message: "Last Name must be defined" };
    }
  }
});

