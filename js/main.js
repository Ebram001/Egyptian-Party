$(document).ready(function(){
    $(".side-bar").fadeOut(0)
    $("a[href^='#']").on('click', function(event) {
        event.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
          'scrollTop': $target.offset().top
        }, 1000, 'swing');
      });
})
$("#open").click(function(){
    $(".side-bar").fadeIn(1000)
 })
$(".close").click(function(){
    $(".side-bar").fadeOut(1000)
 })
 $(".cards h2").on('click', function() {
    var $card = $(this).closest('.cards');
        var $paragraph = $card.find('p');
    $('.cards p').not($paragraph).slideUp();
    $paragraph.slideToggle();
  });
/*
COUNTER
*/ 
  const targetDate = new Date("2023-10-1 14:29:59").getTime();
  const countdownInterval = setInterval(function () {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $('#day').text(days + "D");
    $('#hour').text(hours + "H");
    $('#minute').text(minutes + "M");
    $('#second').text(seconds + "S");

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      $('#counter').html("<h2>Countdown expired!</h2>");
    }
  }, 1000); 

  const maxCharacters = 100;
  // const $messageTextarea = $('#message');
  // const $characterCount = $('#remain');
  $('#message').on('keyup', function() {
    const currentLength = $(this).val().length; // Use .val() to get the input value length
    const charactersRemaining = maxCharacters - currentLength;

    // Update the character count
    $("#remain").text(charactersRemaining);

    // Restrict input to the maximum allowed characters
    if (currentLength >= maxCharacters) {
      $(this).val($(this).val().substring(0, maxCharacters)); // Prevent further key presses if the limit is reached
    }
});


