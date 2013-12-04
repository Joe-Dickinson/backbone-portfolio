app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  className: 'project',
  template: JST['templates/project'], //<<not user_list
  events: {
    'dblclick .project-name': 'editProjectName',
    'keypress .edit-title': 'updateTitle',
    'click .remove-project': 'deleteProject',
    'click .project-link': 'editProjectLink' //<< create
  },

  render: function() {
    var locals = {
      project: this.model.attributes
    };

    var skill_list = new app.views.SkillListView({
      collection: this.model.skills
    });

    this.$el.html(this.template(locals));
    this.$el.find(".skills").replaceWith(skill_list.render().el);
    return this;
  },


  editProjectName: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-title').show().focus().prev('h3').hide();
  },

  updateTitle: function() {
    var new_title = this.$el.find('.edit-title').val().trim();
    if(event.which !== 13 || !new_title) {
      return;
    }

    this.model.set('title', new_title);
    this.model.save();
    this.$el.find('.edit-title').val('').hide().prev('h3').show().html(new_title);
  },

  editProjectLink: function() {
    event.preventDefault();
  },

   deleteProject: function() {
    var projects = this.model.collection;
    projects.remove(this.model);
    this.model.destroy();
    // projects.sync();
    console.log("Delete");
  }
});