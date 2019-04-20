var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $roomAdd: $('#addingroom'),

  initialize: function() {
    RoomsView.$button.on('click', '.chat .username', function() {
      var select = $("#rooms select")[0];
      var roomname = select[select.selectedIndex].value
      RoomsView.renderRoom(username);
    });
  },

  render: function() {
  }, 
  renderRoom: function(roomName) {
    //Input is string that represents the name of the room
    // append an option to the rooms select tag 
    this.$select.append(`<option>${roomName}</option>`) 
  }

};
