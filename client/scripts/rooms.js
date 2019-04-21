
var Rooms = {
  allRooms: {},

  addRoom: function(roomname) {
    this.allRooms[roomname] = this.allRooms[roomname] ? this.allRooms[roomname] : 0;
  },

  getSortedRooms: function() {
    return Object.keys(this.allRooms).sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  }
};