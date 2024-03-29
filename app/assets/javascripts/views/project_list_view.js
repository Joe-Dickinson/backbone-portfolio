app.views.ProjectListView = Backbone.View.extend({

  tagName: 'div',
  className: 'project-list',
  template: JST['templates/project_list'],
  
  events: {
    'click #add-project': 'newProject'
  },

  initialize: function() {
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'remove', this.render);
  },

  render: function() {
    var _this = this;

    this.$el.html(this.template());

    this.collection.forEach(function(project) {
      var view = new app.views.ProjectView({ model: project }); //2nd time, this is the window
      _this.$el.append(view.render().el);
    });


    return this;
  },

  newProject: function() {
    this.collection.add({
      title: "New Project",
      url: "Click to edit",
      body: "Click to edit"
    });
  },

  deleteProject: function() {
    console.log("Delete button");
  }

});