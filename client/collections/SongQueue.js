// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });
    this.on('ended', function() {
      this.remove(this.models[0]);
      console.log('reached ended handler inside of init');
      if (this.length >= 1) {
        this.playFirst();
      }
    });
    this.on('dequeue', function(context) {
      this.remove(context);
    });
  },

  events: {
    enqueue: function(context) { 
      this.add(context);
    },
  },

  playFirst: function() {
    this.models[0].play();
  }

});