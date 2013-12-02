app.models.User = Backbone.Model.extend({
  urlRoot: '/users',

  initialize: function() {
    this.projects = new app.collections.ProjectList();
    this.projects.user = this;
    this.bind("change:first_name change:last_name", this.setFullName); //
    this.bind("sync", this.getProjects); //fetch?
    this.bind("fetch", this.getProjects); //<<
    // this.bind("click #addProject", this.addProject); //users is not defined. out of scope once initialized
    this.setFullName();
  },

  events: {
    "click #addProject" : "addProject"
  },

  getProjects: function(){
    this.projects.fetch();

    this.projects = new app.collections.ProjectList(this.projects.where({userId : this.id}));
    this.projects.user = this;
    return this.projects;
  },

  setFullName: function() {
    this.set("full_name", this.getName());
  },

  getName: function() {
    return _.compact([this.get("first_name"), this.get("last_name")]).join(" ");
  },

  addProject: function() {
    console.log("Add project!");
  }

  // validate: function(attrs) {
  //   if(attrs.title === undefined) {
  //     return { message: "First Name must be defined" };
  //   } else if(attr.lastName === undefined) {
  //     return { message: "Last Name must be defined" };
  //   }
  // }
});

