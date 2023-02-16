const io = require("socket.io")(8900, {
    cors: {
        origin: 'http://localhost:3000',
    },
});

let users = [];

const addUser = (userid, socketid) => {
    !users.some((user) => user.userid === userid) &&
        users.push({ userid, socketid })
}


const removeUser = (socketid) => {
    users = users.filter(user => user.socketid !== socketid)
}


const getUser = (userid) => {
    console.log(userid, "useridd");
    console.log(users, "Display users array");
    // console.log(user?.userid,"user.userid");

    return users?.find((user) => user?.userid === userid)
}

io.on('connection', (socket) => {
    //when connects
    console.log('a user connected');
    //take userid and socketid from user.

    // io.emit("welcome","hello this is a socket server")

    socket.emit("me", socket.id)

    socket.broadcast.emit("callEnded")

    socket.on("addUser", id => {
        addUser(id, socket.id)
        io.emit("getUsers", users)
    })




    //send and get message

    socket?.on("sendmsg", ({ senderid, receiverid, text }) => {

        const user = getUser(receiverid);
        console.log(receiverid, "receiverid");
        console.log(senderid, "senderid");
        console.log(text, "chat reached socket");
        console.log(user?.socketid, "socket id");
        io.to(user?.socketid)?.emit("getmsg", {
            senderid,
            text
        })

    })


    //send and get notifications


    socket?.on("sendNotification", ({ senderid, senderName, receiverid, type }) => {

        const receiver = getUser(receiverid);
        io.to(receiver?.socketid)?.emit("getNotification", {
            senderid,
            senderName,
            receiverid,
            type
        })

    })


    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
    })

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal)
    })



    socket.on("disconnect", () => {
        //when disconnects
        console.log("a user disconnected");
        removeUser(socket.id);
        io.emit("getUsers", users)

    })
});




