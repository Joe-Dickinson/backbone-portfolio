app.Router = Backbone.Router.extend({

  routes: {
    '': "userIndex",
    'users': "userIndex",
    '/users/:id': "userShow"
  },

  userIndex: function() {
    var users = new app.collections.UserList();
    users.fetch();

    var view = new app.views.UserListView({
      collection: users
    });
    $('#user-template')append(view.render().el); //<<<<
  },


  userShow: function(id) { //show

    me = new app.models.User({
      id: id,
      firstName: "Joe",
      lastName: "Dickinson", 
      bio: "Synergistic upward-trending methodology expert",
      mission: "Mission: To streamline proactive supply-chains"
    });

    me.save();
    me.projects.fetch();

    var userView = new app.views.UserView({  
      model: me
    });

    var projectListView = new app.views.ProjectListView({
      collection: me.projects
    });

    $('#user-profile').html(userView.render().el); 
    $('#project-list').html(projectListView.render().el);
    //}); //??
  }
});