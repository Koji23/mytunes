// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  initialize: function() {
    var context = this;
    return $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET', 
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
        console.log(context);
        _.each(data, function(datum) {
          context.add(datum);
        });
        console.log(context);
      },
      error: function() {
        console.log(':(');
      }
    });
  },

  model: SongModel,


  // request: function() {
  //   var context = this;
  //   return $.ajax({
  //     url: 'https://api.parse.com/1/classes/songs',
  //     type: 'GET', 
  //     dataType: 'json',
  //     contentType: 'application/json',
  //     success: function(data) {
  //       console.log(context);
  //       _.each(data, function(datum) {
  //         context.add(datum);
  //       });
  //       console.log(context);
  //     },
  //     error: function() {
  //       console.log(':(');
  //     }
  //   });
  // }

});