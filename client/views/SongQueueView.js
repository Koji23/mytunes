// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.render();

    this.collection.on('add', function(event) {
      this.render();
    }, this);

    this.collection.on('remove', function() {
      this.render();
      console.log('remove heard, render');
    }, this);
  },


  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        var html = new SongQueueEntryView({model: song}).render();
        return html;
      })
    );
  },


});

