let T = require('./Twit')


function init(){
    
    
    let query = {
        q: 'unievangelica, unieva, unicrente, UniEvangelica',
        result_type: 'recent'
    }
    
    T.get("search/tweets", query, UltimosTweets)

    function UltimosTweets(error,data,response){
        if(error){
            console.log("Não consegui achar os últimos tweets \n" + error)
        }else{
            
            for(let i = 0; i <= (data.statuses.length); i++){
                console.log(data.statuses[i])
                if(typeof data.statuses[i] !== 'undefined'){
                    console.log(data.statuses[i].id_str)
                    var id = {
                        id: data.statuses[i].id_str,
                    }
                }
                /*console.log(data)
                var id = {
                    id: data.statuses[i].id_str,
                }*/

                T.post('statuses/retweet/:id', id, BotRetweeted)

                function BotRetweeted(error, response){
                    if(error){
                        console.log("Não retweet " + error + ' id:' + id.id)
                    }else{
                        console.log("bot retweet " + id.id)
                    }
                }
            }
            //console.log(data.statuses[4])
            
        }

        
    }
}
module.exports = {init}