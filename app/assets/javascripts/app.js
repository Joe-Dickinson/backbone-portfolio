$(document).ready(function() {

     if (window.location.hash && window.location.hash == '#_=_') {
        window.location.hash = '';
    }
 
 var router = new app.Router();
 Backbone.history.start({ pushState: false});
 router.navigate('users/5', {trigger: true});

});

