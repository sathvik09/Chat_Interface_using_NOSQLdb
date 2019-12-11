//add new chat doc

class chatroom{
    constructor(room,username){
      this.room=room;
      this.username=username;
      this.chats= db.collection('chats');
      this.unsub;
    }
    async addchat(message){
      const now = new Date();
      const chat = {
        message,
        username: this.username,
        room: this.room,
        created_at : firebase.firestore.Timestamp.fromDate(now)
      };
      // save to db
      const response = await this.chats.add(chat);
      return response;
    }
    getChats(callback){
      this.unsub=this.chats
        .where('room','==',this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot =>{
          snapshot.docChanges().forEach(change =>{
             if(change.type=== 'added'){
               //ui update
               callback(change.doc.data());
             }
          })
      });
    }
    updateName(username){
      this.username=username;
      localStorage.setItem('username',username);

    }
    updateRoom(room){
      this.room=room;
      console.log('updated');
      if(this.unsub){
        this.unsub()
      }
    }
  }

  const Chatroom= new chatroom('gaming','shaun');
  /*Chatroom.addchat('hi')
    .then(()=>console.log('chat added'))
    .catch(err=>console.log(err))

  Chatroom.getChats((data)=>{
    console.log(data);
  })
  Chatroom.updateRoom('gaming')*/

  /*setTimeout(()=>{
  Chatroom.updateRoom('gaming')
  Chatroom.updateName('marco')
  Chatroom.getChats((data)=>{
    console.log(data);
  })
  Chatroom.addchat('hello')
  },3000)*/
