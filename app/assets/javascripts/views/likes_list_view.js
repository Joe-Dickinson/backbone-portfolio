app.views.LikesListView = Backbone.View.extend({

  tagName: 'div',
  className: 'likes',
  template: JST['template/likes_list'],

  initialize: function() {

  },

  render: function() {
    var _this = this;
    this.$el.html(this.template());

    this.collection.forEach(function(likes) {
      var likes_view = new app.views.LikesView({ model: likes });
    });
    return this;
  }


});