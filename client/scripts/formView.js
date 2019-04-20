var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    var select = $("#rooms select")[0];
    var roomname = select[select.selectedIndex].value
    var message = {
      username: App.username,
      text: event.target[0].value,
      roomname: roomname
    }
    // Stop the browser from submitting the form
    event.preventDefault();

    Parse.create(message)
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