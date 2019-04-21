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

  // Fetch is a function
  // Input: a callback function definition
  // Return: nothing
  // Fetch is a function that is passed a callback function def
  // Fetch then calls Parse.readAll, passing an anonymous function as the success callback
  // The success callback is ran if the ajax call is successful
  // The success callback in this case is the fadeout of the spinner, and setting Formview Status to false
  fetch: function(callback = ()=>{}) {
    return Parse.readAll((data) => {
      Messages.currentMessages = data.results.slice();
      MessagesView.render(data.results);
      RoomsView.render();
      console.log(JSON.stringify(Rooms));
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
