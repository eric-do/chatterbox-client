
var Rooms = {
    allRooms : {},

    add : function(inputText) {
        Rooms.allRooms[inputText] = 0;
    },
    hasRoom : function(roomName) {
        return this.allRooms[roomName] ? true : false;
    }    
};