app.Router = Backbone.Router.extend({

  routes: {
    '': "userIndex",
    'users': "userIndex",
    'users/:id': "userShow"
  },

  userIndex: function() {
    var users = new app.collections.UserList();
    users.fetch({
      success: function(users) {
        var view = new app.views.UserListView({
          collection: users
        });

        $('#content').html(view.render().el); //<<<
      }
    });
  },


  userShow: function(id) { //show

    me = new app.models.User({
      id: id
    });

    console.log("1");

    me.fetch({
      success: function(me) {
        console.log("3");
        var userView = new app.views.UserView({
          model: me
        });

        var projectListView = new app.views.ProjectListView({
          collection: me.projects
        });


        $('#content').html(userView.render().el); //<
        $('#content').append(projectListView.render().el);
        $('#content').append('<div class="clear"></div>');
      }
    });

    console.log("2");

    //<
    //}); //??
  }
});