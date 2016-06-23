// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.render();
    this.on('enqueue', function(event) {
      console.log("Hello from sqView");
      this.render();
    });
  },

  // events: {
  //   'enqueue': function(context) {
  //     this.render();
  //     console.log('hello');
  //   }
  // },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        var html = new SongQueueEntryView({model: song}).render();
        console.log('html', + html);
        return html;
      })
    );
  },


});

