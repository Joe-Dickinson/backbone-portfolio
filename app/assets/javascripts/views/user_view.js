app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  className: 'user',
  template: JST['templates/user'],
  events: {
    'click h1.name' : 'editName',
    'click h2.bio' : 'editBio',
    'click h3.mission' : 'editMission',
    'click h3.likes' : 'editLikes',
    'change #edit-user-name' : 'updateName',
    'change #edit-user-bio' : 'updateBio',
    'change #edit-user-mission' : 'updateMission',
    'change #edit-user-likes' : 'updateLikes'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var template_html = this.template({
    user: this.model.attributes
    });
    var _this = this;
    this.model.likes.fetch({
      success: function(likes) {
        // for(i = 0; i < likes.length; i++) {
        //   console.log("boom!" + i);
        //   this.model.likes.concat(likes + " ");
        // }
        
        //likes.models.each....
        _this.model.likes.reset(likes.models);
        console.log(_this.model.likes.reset(likes.models)[0]);
      }
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
    $('#edit-user-mission').removeClass('hidden-edit').val(h3.html()); //h2
    h3.hide(); //h2
  },

  editLikes: function(event) {
    var h3 = $(event.currentTarget);
    $('#edit-user-likes').removeClass('hidden-edit').val(h3.html());
    h3.hide();
  },

  updateName: function(event) {
    this.model.set("full_name", $('#edit-user-name').val());  //snake_case
  },

  updateBio: function(event) {
    this.model.set("bio", $('#edit-user-bio').val());
  },

  updateMission: function(event) {
    this.model.set("mission", $('#edit-user-mission').val());
  },

  updateLikes: function(event) {
    this.model.set("likes", $('#edit-user-likes').val());
  }

});

    // console.log("hello from render");
    // var template_html = $('#user-template').html();
    // this.$el.html("<p>hello</p>");
    // var p = document.createElement("p");
    // p.appendChild(document.createTextNode("Hello"));
    // this.el.appendChild(p);
