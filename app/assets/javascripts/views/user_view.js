app.views.UserView = Backbone.View.extend({

  tagName: 'div', 
  className: 'user', 
  template: _.template($('#user-template').html()),
  events: {
    'click h1.name' : 'editName',
    'click h2.bio' : 'editBio',
    'click h3.mission' : 'editMission',
    'change #edit-user-name' : 'updateName',
    'change #edit-user-bio' : 'updateBio',
    'change #edit-user-mission' : 'updateMission'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var template_html = this.template({
    user: this.model.attributes
    });

    this.$el.html(template_html);
    return this;
  },

  editName: function(event) {
    var h1 = $(event.currentTarget);
    $('#edit-user-name').removeClass('hidden-edit').val(h1.html());
    h1.hide();
  },

  editBio: function(event) {
    var h2 = $(event.currentTarget);
    $('#edit-user-bio').removeClass('hidden-edit').val(h2.html());
    h2.hide();
  },

  editMission: function(event) {
    var h3 = $(event.currentTarget);
    $('#edit-user-mission').removeClass('hidden-edit').val(h2.html());
    h2.hide();
  },

  updateName: function(event) {
    this.model.set("fullName", $('#edit-user-name').val()); 
  },

  updateBio: function(event) {
    this.model.set("bio", $('#edit-user-bio').val());
  },

  updateMission: function(event) {
    this.model.set("mission", $('#edit-user-mission').val());
  }

});

    // console.log("hello from render");
    // var template_html = $('#user-template').html();
    // this.$el.html("<p>hello</p>");
    // var p = document.createElement("p");
    // p.appendChild(document.createTextNode("Hello"));
    // this.el.appendChild(p);
