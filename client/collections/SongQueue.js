// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

  },

  events: {
    enqueue: function(context) { 
      this.add(context);
    }
  }

});