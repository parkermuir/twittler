
// var renderTweets = function(){
//     var $tweets = $('.tweets')
//     $tweets.html('');
//     var index = streams.home.length - 1;
    
//     while(index >= 0){
//         var tweet = streams.home[index];
//         var $tweet = $('<div class="tweet-container"></div>');
//         var $tweet_text = $('<p class="tweet-text"></p>').text(tweet.message);
//         var $timestamp = $('<time datetime="YYYY-MM-DD"></time>').text( '- ' + moment(tweet.created_at).fromNow());
//         $timestamp.addClass("timestamp");
//         var $username = $('<div class="username"></div>').text('@' + tweet.user);

//         $tweet.append($username, $tweet_text, $timestamp).appendTo($tweets);
//         index -= 1;
//         }
//     }

var renderTweets = function(target){
    if (target === 'home') {
        target = streams.home;
    } else {
        target = streams.users[target]
    }

    var $tweets = $('.tweets')
    $tweets.html('');
    var index = target.length - 1;
    
    while(index >= 0){
        var tweet = target[index];
        var $tweet = $('<div class="tweet-container"></div>');
        var $tweet_text = $('<p class="tweet-text"></p>').text(tweet.message);
        var $timestamp = $('<time datetime="YYYY-MM-DD"></time>').text( '- ' + moment(tweet.created_at).fromNow());
        $timestamp.addClass("timestamp");
        var $username = $('<div class="username"></div>').text('@' + tweet.user);

        $tweet.append($username, $tweet_text, $timestamp).appendTo($tweets);
        index -= 1;
        }
    }

$(document).ready(function(){
    renderTweets('home');

    $('#update-btn').on('click', function() {
        renderTweets('home');
        });
});

$(document).ready(function(){
    $('.username').on('click', function() {
        var $clickee = $(this).text().slice(1);
        renderTweets($clickee);
        $('.tweets').prepend($('<h1>' + $clickee + '\'s Profile </h1>'));
        $('footer').remove();
        $('#update-btn').remove();
    });
});

    

// var usernameClickHandler = function() {
//     //clear streams.home and show streams.users.username
//     //display that user's specific timeline of tweets on click
// }
