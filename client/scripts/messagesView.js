var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.$chats.on('click', '.chat .username', function() {
      var username = this.textContent;
      Friends.toggleStatus(username);
      $(this).addClass("friend");
      console.log('Friend added');
    });
  },

  render: function(results) {
    results.forEach((message) => {
      this.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    // Input: message object to render
    // Return: nothing??
    // Get an html object/var from call MessageView.render(message)
    // Append the html to #chats
    if (message.username && message.text) {
      message.username = message.username;
      message.text = message.text.slice(0, 160);
      Messages[message.objectId] = message.text; 
      Rooms.addRoom(message.roomname);
      message.avatar = `https://api.adorable.io/avatars/90/${message.username}`;

      var chat = MessageView.render(message);
      this.$chats.append(chat);
    }
  },

  clearMessages: function() {
    this.$chats.empty();
  },

  sanitarize: function (string) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
  }
};