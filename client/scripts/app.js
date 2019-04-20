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

  },

  // Fetch is a function
  // Input: a callback function definition
  // Return: nothing
  // Fetch is a function that is passed a callback function def
  // Fetch then calls Parse.readAll, passing an anonymous function as the success callback
  // The success callback is ran if the ajax call is successful
  // The success callback in this case is the fadeout of the spinner, and setting Formview Status to false
  fetch: function(callback = ()=>{}) {
    return Parse.readAll((data) => {

      data.results.forEach((message) => {
        MessagesView.renderMessage(message)
      })
      console.log(data);
      callback();
    });
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
