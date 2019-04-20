var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.chat .username', function() {
      var username = this.textContent;
      Friends.toggleStatus(username);
    });
  },
  
  render: function() {
  },

  renderMessage: function(message) {
    // Input: message object to render
    // Return: nothing??
    // Get an html object/var from call MessageView.render(message)
    // Append the html to #chats
    if (message.username && message.text) {
      message.username = this.sanitarize(message.username);
      message.text = this.sanitarize(message.text);
      var chat = MessageView.render(message);
      this.$chats.append(chat);
    }
  },

  sanitarize: function(str) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return str.replace(reg, (match)=>(map[match]));
  }

};