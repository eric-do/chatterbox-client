var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    App.beginUpdates();
    // setInterval(() => {
    //   // Set a named function to be executed immediately
    //   // Named function is returned to setInterval and gets called again on interval
    //   let newMessages = App.getNewMessages();
    //   if (newMessages.length > 0) {
    //     this.renderNewMessages(newMessages);
    //     console.log('posting new');
    //   } else {
    //     console.log('no new messages');
    //   }
    // }, 10000);

  },

  // Input: a callback function definition
  // Return: nothing
  // Fetch is a function that is passed a callback function def
  // Fetch then calls Parse.readAll, passing an anonymous function as the success callback
  // The success callback is ran if the ajax call is successful
  // The success callback in this case is the fadeout of the spinner, and setting Formview Status to false
  fetch: function(callback = ()=>{}) {
    Parse.readAll(data => {
      data.results.forEach(message => {
        MessagesView.renderMessage(message);
      });
      var roomsAlpha = Object.keys(Rooms).sort((a,b) => a.toLowerCase() - b.toLowerCase());
      roomsAlpha.forEach(room => RoomsView.renderRoom(room));
      console.log(data);
      callback();
    });
  },

  // Input: nothing
  // Return: nothing
  // Description: update() should update the chat messages only with new messages
  // Call Parse.readAll, passing in a function to filter only unique objectId, and render those messages
  getNewMessages: () => {
    let newMessages = [];
    Parse.readAll(data => {
      newMessages = data.results.filter(message => {
        return (!Messages[message['objectId']]);
      });
    });
    return newMessages;
  },
  
  renderNewMessages: (data) => {
    if (data.length > 0) {
      data.results.forEach(message => {
        MessagesView.renderMessage(message);
      });
    }
  },

  beginUpdates: () => {
    // Set a named function to be executed immediately
    // Named function is returned to setInterval and gets called again on interval
    setTimeout(function callback() {
      let newMessages = App.getNewMessages();
      if (newMessages.length > 0) {
        this.renderNewMessages(newMessages);
          console.log('posting new');
        } else {
        console.log('no new messages');
       }
       return callback;
    }, 5000);
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
