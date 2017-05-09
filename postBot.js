console.log('The bot is starting');

var Twit = require('twit');

//hide access keys/tokens
var config = require('./config');

//console.log(config);

var T = new Twit(config);

//posting tweets

tweetIt();
setInterval(tweetIt, 1000*20)

function tweetIt(){

var r = Math.floor(Math.random()*100);

var tweet = {
  status: 'here is a random number:' + r
}

T.post('statuses/update', tweet, tweeted)

function tweeted(err,data,response){
if (err){
  console.log(err.message);}
  else{
    console.log("it worked!")
  }
}
}
