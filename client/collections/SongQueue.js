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
      console.log('ended detected from within songqueue collection');
      if (this.length >= 1) {
        this.playFirst();
      }
    });

    // this.on('enqueue', function(context) {
    //   this.add(context);
    //   console.log("enqueue heard from within songqueue collection");

    // });

    this.on('dequeue', function(context) {
      this.remove(context);
      console.log('remove from sq');
    });
  },

  playFirst: function() {
    this.models[0].play();
  }

});