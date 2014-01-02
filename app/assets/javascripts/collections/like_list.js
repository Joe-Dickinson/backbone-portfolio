app.collections.LikeList = Backbone.Collection.extend ({

  model: app.models.Like,
  url: function() {
    return "/users/" + this.user.id + "/likes";
  }

});