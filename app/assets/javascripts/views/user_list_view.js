app.views.UserListView = Backbone.View.extend ({

  tagName: 'div',
  className: 'user-list',
  template: JST['templates/user_list'],

  events: {
    'click .user-link': 'showUser'
  },

  initialize: function() {
    this.listenTo(this.collection, "change", this.render);
  },

  render: function() {
    var template_html = this.template({
      users: this.collection //users is undefined //this.collection.models[3].id
    });

    this.$el.html(template_html); //move?
    return this;
  },

  showUser: function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).data('user-id');
    new app.Router().navigate('users/' + id, {trigger: true});

  }

});