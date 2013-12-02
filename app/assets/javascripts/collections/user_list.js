app.collections.UserList = Backbone.Collection.extend ({

  model: app.models.User,
  url: "/users",

  initialize: function() {
    // this.bind("click #addProject", this.addProject);
    console.log(this);
    console.log("user_list hello");
    
  }


});