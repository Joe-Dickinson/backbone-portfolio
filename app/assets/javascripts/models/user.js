app.models.User = Backbone.Model.extend({

  localStorage: new Backbone.LocalStorage('portfolio-user'),

  initialize: function() {
    this.projects = new app.collections.ProjectList();
    this.projects.user = this;
    this.bind("change:firstName change:lastName", this.setFullName); //
    this.bind("sync", this.getProjects); //fetch?
    this.bind("fetch", this.getProjects); //<<
    this.setFullName();
  },

  getProjects: function(){
    this.projects.fetch();

    this.projects = new app.collections.ProjectList(this.projects.where({userId : this.id}));
    this.projects.user = this;
    return this.projects;
  },

  setFullName: function() {
    this.set("fullName", this.getName());
  },

  getName: function() {
    return _.compact([this.get("firstName"), this.get("lastName")]).join(" ");
  }

  // validate: function(attrs) {
  //   if(attrs.title === undefined) {
  //     return { message: "First Name must be defined" };
  //   } else if(attr.lastName === undefined) {
  //     return { message: "Last Name must be defined" };
  //   }
  // }
});

