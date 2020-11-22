function kirim(){

    var chat = document.createElement("chat");
    var newChat = document.getElementById("textchat").value;
    
    console.log(newChat);

    chat.append(newChat);
    
    document.getElementById("container-chat").append(chat);

    
}