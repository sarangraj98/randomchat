const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


const database =[]


io.on('connection',socket=>{
    console.log("New User")
    database.push(socket.id);
    console.log(database)
    socket.on('message',data=>{
        database.map(item=>{
            if(item != socket.id){
                io.to(item).emit('incoming-message',data);
                console.log(data)
            }
        })

         
    })
})

http.listen(3007,()=>console.log("Running"))