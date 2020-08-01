const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);





io.on('connection',socket=>{
    console.log("New User")
    console.log(socket.id);
    socket.on('message',data=>{
        console.log(data)
    })
})

http.listen(3006,()=>console.log("Running"))