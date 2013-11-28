app.views.UserListView = Backbone.View.extend ({

  tagName: 'div',
  className: 'user-list',
  template: _.template($('#user-list-template').html()),

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
  }

})