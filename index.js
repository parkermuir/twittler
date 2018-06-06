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
        $('#update-btn').text('Refresh My Feed')
        renderTweets('home');
        });

    $('.tweets').on('click', '.username', function() {
        var $clickee = $(this).text().slice(1);
        renderTweets($clickee);
        
        $('.tweets').prepend($('<h1>' + $clickee + '\'s Profile </h1>'));
        $('footer').remove();
        $('#update-btn').text('Home');
    });
});