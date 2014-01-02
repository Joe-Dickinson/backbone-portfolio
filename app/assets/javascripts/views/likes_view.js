app.views.LikesView = Backbone.View.extend({

  tagName: 'div',
  className: 'skill',
  template: JST['templates/likes'],
  events: {
  
  },

  initialize: function() {
    // this.listenTo(this.model, 'change', this.render);
    // this.listenTo(this.model, 'change', this.save);
  },

  render: function() {
    var locals = this.template({
      likes: this.model.attributes
    });

    this.$el.html(locals);
    return this;
  }

});