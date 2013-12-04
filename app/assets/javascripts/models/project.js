app.models.Project = Backbone.Model.extend({

  initialize: function() {
    this.bind("change", this.updateTitle);
    this.skills = new app.collections.SkillList();
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