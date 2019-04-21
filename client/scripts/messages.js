var Messages = {
    currentMessages : [],

    getFilteredRooms : function(roomFilter) {
        var filtered = this.currentMessages.filter(message => {
            return message.roomname === roomFilter;
        });
        return filtered;
    }

};