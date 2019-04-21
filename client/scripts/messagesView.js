var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.$chats.on('click', '.chat .username', function() {
      var username = this.textContent;
      Friends.toggleStatus(username);
    });
  },

  render: function(results) {
    results.forEach((message) => {
      this.renderMessage(message)
    });
  },

  renderMessage: function(message) {
    // Input: message object to render
    // Return: nothing??
    // Get an html object/var from call MessageView.render(message)
    // Append the html to #chats
    if (message.username && message.text) {
      var chat = MessageView.render(message);
      if(!Rooms[message.roomname]) {
        Rooms[message.roomname] = 0;
      }
      this.$chats.append(chat);
    }
  },
  clearMessages: function() {
    this.$chats.empty()
  }

};