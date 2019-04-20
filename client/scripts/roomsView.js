var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  }, 
  renderRoom: function(roomName) {
    //Input is string that represents the name of the room
    // append an option to the rooms select tag 
    this.$select.append(`<option>${roomName}</option>`)
  }

};
