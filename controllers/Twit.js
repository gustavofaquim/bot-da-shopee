const Twit = require('twit')

let config = require('../config.js')
    

let T = new Twit(config)

module.exports = T