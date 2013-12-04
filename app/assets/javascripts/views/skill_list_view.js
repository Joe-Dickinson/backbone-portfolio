app.views.SkillListView = Backbone.View.extend({

  tagName: 'div',
  className: 'skills',
  template: JST['templates/skill_list'],

  events: {
    'click .add-skill': 'addSkill'
  },

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render); //collection
  },

  render: function() {
    var _this = this;
    this.$el.html(this.template());

    this.collection.forEach(function(skill) {
      var skill_view = new app.views.SkillView({ model: skill });
    });
    return this;
  },

  addSkill: function() {
    this.collection.add({
      title: 'Skill'
    });
  }


});