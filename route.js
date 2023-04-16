const express = require('express')
const app = express()

let T = require('./controllers/Twit')

let router = express.Router()

router.get('/toptrends', function(req, res) {
     // id é a localização 1 é o mundo todo
     T.get('https://api.twitter.com/1.1/trends/place.json?id=455831', (err,data, responde) =>{
        
     data.forEach(element => {
        res.send(element)
       // console.log(element)
     });
    
    })
    //res.send(`Lista todos os usuários`);
})

module.exports = router;