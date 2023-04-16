const express = require('express')
const app = express()

let route = require('./route')

let T = require('./controllers/Twit')
let bot = require('./controllers/Bot')

app.use('/', route)




setInterval(bot.init, 1 * 60 * 1000)
bot.init

/*const Twit = require('twit')

let config = require('./config.js')
    

let T = new Twit(config)
*/

/*function BotInit(){
    
    let query = {
        q: 'unievangelica',
        result_type: 'recent'
    }
    
    T.get("search/tweets", query, UltimosTweets)

    function UltimosTweets(error,data,response){
        if(error){
            console.log("Não consegui achar os últimos tweets \n" + error)
        }else{
            
            for(let i = 0; i <= (data.statuses.length); i++){
                if(typeof data.statuses[i] !== 'undefined'){
                    console.log( data.statuses[i].id_str)

                    var id = {
                        id: data.statuses[i].id_str,
                    }
                }
            }
            //console.log(data.statuses[4])
            
        }
        T.post('statuses/retweet/:id', id, BotRetweeted)

        function BotRetweeted(error, response){
            if(error){
                console.log("Não retweet " + error)
            }else{
                console.log("bot retweet " + id.id)
            }
        }
    }
}*/

//setInterval(BotInit('unicrente'), 1 * 60 * 1000)
//BotInit('')


/*


// TOP TRENDS
app.get('/toptrends', (request, response) => {
    // id é a localização 1 é o mundo todo
    T.get('https://api.twitter.com/1.1/trends/place.json?id=455831', (err,data, responde) =>{
        
        data.forEach(element => {
            console.log(element)
        });
       
    })
    
    response.sendStatus(200)
})



//Twetts 
app.get('/twettsuser', (request, response) => {
    T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=faquimgustavo&count=2', (err,data, responde) =>{
        
        data.forEach(element => {
            console.log(element)
        });
       
    })
    response.sendStatus(200)
})

/*
//  Search Tweets 
app.get('/searchtweets', (request, response) => {
    T.get('https://api.twitter.com/1.1/search/tweets.json?q=unicrente&result_type=popular', (err,data, responde) =>{
        request.set('authorization: OAuth oauth_consumer_key="consumer-key-for-app", oauth_nonce="generated-nonce", oauth_signature="generated-signature", oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp", oauth_token="access-token-for-authed-user", oauth_version="1.0"')
        data.forEach(element => {
            console.log(element)
        });
       
    })
    
    response.sendStatus(200)
})


*/

app.listen('1111')

