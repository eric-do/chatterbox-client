var Messages = {
  currentMessages : [],
  lastTimeStamp: 0,

  getFilteredRooms : function(roomFilter) {
    var filtered = this.currentMessages.filter(message => {
      return message.roomname === roomFilter;
    });
    return filtered;
  }
};