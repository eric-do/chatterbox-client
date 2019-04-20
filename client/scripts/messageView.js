var MessageView = {

  render: _.template(`
   
      <div class="chat">
        <div class="avatar"><img src="<%= avatar %>"></div>
        <div class="message-container">
          <div class="username"><%= username %></div>
          <div class="text"><%= text %></div>
        </div>
        <div></div>
      </div>
   
    `)

};