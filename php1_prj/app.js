// dom
const chatlist= document.querySelector('.chat-list')
const newChatForm= document.querySelector('.new-chat');
const newNameForm=document.querySelector('.new-name');
const updateMssg=document.querySelector('.update-mssg');
const room =document.querySelector('.chat-rooms');
// newChatForm
newChatForm.addEventListener('submit',e=>{
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  Chatroom.addchat(message)
   .then(()=>newChatForm.reset())
   .catch((err)=>console.log(err))
})

newNameForm.addEventListener('submit',e=>{
    e.preventDefault();
    //update name
    const newName=newNameForm.name.value.trim();
    Chatroom.updateName(newName);
    newNameForm.reset();
    updateMssg.innerText=`Your name was updated to ${newName}`;
    setTimeout(()=>updateMssg.innerText='', 3000);


})

room.addEventListener('click',e=>{
    if(e.target.tagName ==='BUTTON'){
        chatUI.clear();
        Chatroom.updateRoom(e.target.getAttribute("id"));
        Chatroom.getChats(chat => chatUI.render(chat));
    }
})

const username = localStorage.username?localStorage.username : 'anon';
// instances
const chatUI = new ChatUI(chatlist);
const chatroo= new chatroom('gaming','shaun');


chatroo.getChats(data=>{
  chatUI.render(data)
})
