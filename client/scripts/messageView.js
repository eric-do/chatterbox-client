var MessageView = {

  render: _.template(`
   
      <div class="chat">
        <div class="avatar-container"><img class="avatar" src="<%- avatar %>"></div>
        <div class="message-container">
          <div class="username"><%- username %></div>
          <div class="text"><%- text %></div>
        </div>
        <div><img class="heart" src="client/images/heart-filled.png"></div>
      </div>
   
    `)

};