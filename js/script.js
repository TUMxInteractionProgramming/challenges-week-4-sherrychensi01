/* #6 start the #external #action and say hello */
console.log("App is alive");
var currentChannel = Yummy;

/* #7 #whereami #var #loc*/
var currentLocation = {
    longitude: 11.68333,
    latitude: 48.2333,
    W3W: "uniforms.patting.third"
};


/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    currentChannel= channelName;
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    //#7 #chlob #dgst
    document.getElementById('channel-location').innerHTML = 'by' + ' ' +  channelName.createdBy.link("http://w3w.co/upgrading.never.helps").bold();

    /* #6 #liking channels on #click */
    /* #7 #chlob #trn */
    var starr = (channelName.starred === true) ? 'fas fa-star' : 'far fa-star'
    $('#channel-star').attr("class",starr);

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName + ')').addClass('selected');
    ;
}

/* #6 #liking a channel on #click *
#7 #icns #str*/
function star() { 
    if(currentChannel.starred === true){
       $('#channel-star').toggleClass("far fa-star");
        currentChannel.starred === false;
} else {$('#channel-star').toggleClass("fas fa-star"); 
        currentChannel.starred === true;
       }
}


/* #6 #taptab selects the given tab
  @param tabId #id of the tab */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

/* Message #constructor*/
function Message(text) {
    this.createdBy = currentLocation.W3W;
    this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    this.createdOn = new Date(Date.now());
    this.expiresOn = new Date(Date.now() + (1000 * 15 * 60));
    this.text = text;
    this.own = true;
}
function createMessageElement(messageObject) {
    var minutesExpired = Math.round((((messageObject.exiresOn - messageObject.createdOn) % 86400000) % 3600000) / 60000); /*min*/
    
    var messageString= '<div class=' + messages + '><h3><a href=' + 'http://w3w.co/' + messageObject.createdBy + ' target=\"_blank><strong>' + messageObject.createdBy + '</strong></a> ' +
        messageObject.createdOn.toLocaleString('en-GB', { timeZone: 'UTC' }) + ' <em>' + minutesExpired +
        ' min.left </em></h3><p>' + messageObject.text + '</p><button> +5 min. </button></div>';
 
    return messageString;
}

function sendMessage() {
  var message = new Message($('#message_a').val());
    console.log(message);
    /*#8 #message #append*/
      
    $(createMessageElement(message)).appendTo('#messages');
   
    $('#messages').scrollTop($('#messages').height());

    $('#message').val("");
    
}
