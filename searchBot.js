// search for tweets that contain "software developer intern"

console.log('The bot is starting');

var Twit = require('twit');

//hide access keys/tokens
var config = require('./config');

//console.log(config);

var T = new Twit(config);

var params = {
  q: 'software developer intern',
  count: 100
}

// getting tweets
T.get('search/tweets', params, gotdata)

function gotdata(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].created_at,tweets[i].text)
  }
  if(err){
    console.log(error);
  }
    // console.log(data);  // Tweet body.
    // console.log(response);  // Raw response object.
}

//posting tweets

function tweetIt(txt){
var tweetPost = {
  status: txt
}

T.post('statuses/update', tweetPost, tweetCallBack)

function tweetCallBack(err,data,response){
if (err){
  console.log(err.message);}
  else{
    console.log("it worked!")
  }
}
}
