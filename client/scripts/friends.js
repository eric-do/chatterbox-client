var Friends = {
  //initalize a toggle status to be false at first
  //create function that toggles the status of friendship
  hash: {},
  toggleStatus: function(userName){
    console.log(userName)
    if (!Friends.hash[userName]) {
        Friends.hash[userName] = true;
    } else {
        Friends.hash[userName] = !Friends.hash[userName];
    }
  }
};