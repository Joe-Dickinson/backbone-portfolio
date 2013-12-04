app.views.SkillView = Backbone.View.extend({

  tagName: 'div',
  className: 'skill',
  template: JST['templates/skill'],
  events: {
    // 'click .name': 
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'change', this.save);
  },

  render: function() {
    var locals = this.template({ //this.template
      skill: this.model.attributes
    });

    this.$el.html(locals);
    return this;
  },

  save: function() {
    this.model.collection.project.save();
  }



});