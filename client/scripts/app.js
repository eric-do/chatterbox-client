var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    MessagesView.initialize();
    App.startSpinner();
    App.fetch(App.stopSpinner);
    RoomsView.initialize();
  },

  // Input: a callback function definition
  // Return: nothing
  // Fetch is a function that is passed a callback function def
  // Fetch then calls Parse.readAll, passing an anonymous function as the success callback
  // The success callback is ran if the ajax call is successful
  // The success callback in this case is the fadeout of the spinner, and setting Formview Status to false
  fetch: function(callback = () => {}) {
    return Parse.readAll((data) => {
      Messages.currentMessages = data.results.slice();
      Messages.lastTimeStamp = Messages.currentMessages[0].createdAt;
      MessagesView.render(data.results.reverse());
      RoomsView.render(data.results);
      console.log(data);
      callback();
    });
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
