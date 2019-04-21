var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // Inputs
    //  Message object: contains message, user, etc
    //  Success callback: function to execute if POST successful
    //  Error callback: function to execute if POST unsuccessful
    // Call jQuery .ajax function, pass url, type, message text as data
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to create messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readRoom: function(roomname, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { where: `{"roomname":"${roomname}"}` },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages from room', error);
      }
    });
  },

  // DOESN'T WORK RIGHT NOW
  getRooms: function() {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { distinct: `roomname`, project:`{'roomname':'1'}` },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch rooms', error);
      }
    });
  }

};