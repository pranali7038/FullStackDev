const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//Request
app.get('/',(req,res)=>{
    // res.send("Got a get request")
    res.sendFile('./dummy.html',{root:__dirname})
});
app.post('/items',(req,res)=>{
    // res.send("Got a post request")
    res.json({x:1,y:20});
});

app.put('/items/:id',(req,res)=>{
    res.send("got a put request")
});

app.delete('/items/:id',(req,res)=>{
    res.send("got a delete request")
});

//response

















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})