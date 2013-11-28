app.models.Skill = Backbone.Model.extend ({

  localStorage: new Backbone.localStorage('porfolio-skill'), //not yet set

  initialize: function() {
    this.bind("change", this.update) //??
  }



})