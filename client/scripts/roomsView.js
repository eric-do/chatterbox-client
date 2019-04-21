var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $input: $('#rooms input'),

  initialize: function() {
    RoomsView.$button.on('click', function() {
      // Take the value from the input field 
      // check that value against all off the current keys in Rooms 
      // if the value doesn't exist as a  key inside of room then add it 
      // check if that room already exists
      // if it does exist then alert user.
      var roomname = RoomsView.$input.val();

      if(!Rooms.hasRoom(roomname)) {  
        Rooms.add(roomname);
        RoomsView.renderRoom(roomname);
      } else {
        alert("You suck!!!");
      }
    });
    RoomsView.$select.on('change', function() {
      var select = $("#rooms select")[0];
      var roomname = select[select.selectedIndex].value;
      // var filteredRooms = Messages.getFilteredRooms(roomname);
      // MessagesView.clearMessages();
      // MessagesView.render(filteredRooms);
      Parse.readRoom(roomname, data => {
        MessagesView.clearMessages();
        MessagesView.render(data.results);
        console.log(data.results);
      });
    });
  },

  render: function(messages) {
    Rooms.getSortedRooms().forEach(room => {
      this.renderRoom(room);
    });
  }, 

  renderRoom: function(roomName) {
    // Input is string that represents the name of the room
    // append an option to the rooms select tag 
    this.$select.append(`<option>${roomName}</option>`);
  }
};
