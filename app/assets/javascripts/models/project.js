app.models.Project = Backbone.Model.extend({

  localStorage: new Backbone.LocalStorage('portfolio-project'),

  initialize: function() {
    this.bind("change", this.updateTitle);
  },


  validate: function() {
    if(this.attributes.url === "") {
      return "Argh!";
    }

    if(this.attributes.title == "") {
      return false;
    }
  }

});