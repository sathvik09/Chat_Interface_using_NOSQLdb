 // render new chat templates to the DOM
 // clear the list of chats (when the room changes)

 class ChatUI {
   constructor(list){
     this.list = list;
   }
   render(data){
     const when = dateFns.distanceInWordsToNow(
       data.created_at.toDate(),
       { addSuffix:true }
     );
     const html = `
       <li class='list-group-item d-flex align-items-center al' style="background-color: rgba(0,0,0,0.8);border-radius:100vw;">
         <span class="username" style="color:#BB86FC;">${data.username}</span>
         <span class="message" style='margin-left:1%'>${data.message}</span><br>
         <div class="time" style="margin-left:-8%;color:#7b8481;font-weight:bold;margin-top:10%;">about ${when}</div>
       </li>
     `;
     this.list.innerHTML += html;
   }
 }
