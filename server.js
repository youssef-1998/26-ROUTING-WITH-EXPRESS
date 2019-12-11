const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    let hours = new Date().getHours()
    if(hours > 8 && hours < 17){
        res.sendFile(__dirname + '/public/home.html')
    }else{
        res.sendfile(__dirname + '/public/notopen.html')
    }
})

app.listen(3000, (err) => {
    if (err) console.log("server is not running")
    else console.log("server is running on port 3000 ")
})