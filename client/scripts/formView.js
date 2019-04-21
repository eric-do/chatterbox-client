var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Input: event generated from button click
    // Return: nothing
    // Get users's room using jQuery
    // Get users's message from event
    // Get users's username from App.username
    // Generate message object using variables above
    // Send message through parse
    // Render message on screen
    var select = $("#rooms select")[0];
    var roomname = select[select.selectedIndex].value;
    var text = event.target[0] ? event.target[0].value : undefined;
    var message = {
      username: App.username,
      text: text,
      roomname: roomname
    };
    // Stop the browser from submitting the form
    event.preventDefault();

    Parse.create(message);
    MessagesView.renderMessage(message);
    console.log('click!');
  },

  setStatus: function(active) {
    // (This function was pre-written)
    // Input: updated status
    // Return: nothing
    // This function takes the active status
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};