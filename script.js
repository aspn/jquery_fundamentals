console.log("Welcome to Tic Tac Toe");

var ctr = 0;

var winner = function(player) {
  if (player === 0) { 
    player = "X"; 
  };
  if (player === 1) { 
    player = "O"; 
  };

  $('#win').append("Player " + player + " WON!");
};

var draw = function() {
  $('#win').append("No one won :( ");
};

$(document).ready(function() {

  $('td').click (function() {
    var playedOn = $(this).hasClass('played_0') || $(this).hasClass('played_X');
    console.log(playedOn);

    if (!playedOn) {

      if (ctr % 2 == 0) {
        var marker = "O";
        $(this).addClass('played_O').html("O");
      } else {
        var marker = "X";
        $(this).addClass('played_X').html("X");
      };

      $('#status').html("Turn " + ctr + " - Player " + marker);
      $(this).off('click', 'hover');

      ctr++;

      if ($('td').eq('0').hasClass('played_O') && $('td').eq('1').hasClass('played_O') && $('td').eq('2').hasClass('played_O')) {
        winner(1);
      } else if ($('td').eq('3').hasClass('played_O') && $('td').eq('4').hasClass('played_O') && $('td').eq('5').hasClass('played_O')) {
        winner(1);
      } else if ($('td').eq('6').hasClass('played_O') && $('td').eq('7').hasClass('played_O') && $('td').eq('8').hasClass('played_O')) {
        winner(1);
      } else if ($('td').eq('0').hasClass('played_O') && $('td').eq('3').hasClass('played_O') && $('td').eq('6').hasClass('played_O')) {
        winner(1);
      } else if ($('td').eq('1').hasClass('played_O') && $('td').eq('4').hasClass('played_O') && $('td').eq('7').hasClass('played_O')) {
        winner(1);
      } else if ($('td').eq('2').hasClass('played_O') && $('td').eq('5').hasClass('played_O') && $('td').eq('8').hasClass('played_O')) {
        winner(1);
      } else if ($('td').eq('0').hasClass('played_O') && $('td').eq('4').hasClass('played_O') && $('td').eq('8').hasClass('played_O')) {
        winner(1);
      } else if ($('td').eq('2').hasClass('played_O') && $('td').eq('4').hasClass('played_O') && $('td').eq('6').hasClass('played_O')) {
        winner(1);
      }; 

      if ($('td').eq('0').hasClass('played_X') && $('td').eq('1').hasClass('played_X') && $('td').eq('2').hasClass('played_X')) {
        winner(0);
      } else if ($('td').eq('3').hasClass('played_X') && $('td').eq('4').hasClass('played_X') && $('td').eq('5').hasClass('played_X')) {
        winner(0);
      } else if ($('td').eq('6').hasClass('played_X') && $('td').eq('7').hasClass('played_X') && $('td').eq('8').hasClass('played_X')) {
        winner(0);
      } else if ($('td').eq('0').hasClass('played_X') && $('td').eq('3').hasClass('played_X') && $('td').eq('6').hasClass('played_X')) {
        winner(0);
      } else if ($('td').eq('1').hasClass('played_X') && $('td').eq('4').hasClass('played_X') && $('td').eq('7').hasClass('played_X')) {
        winner(0);
      } else if ($('td').eq('2').hasClass('played_X') && $('td').eq('5').hasClass('played_X') && $('td').eq('8').hasClass('played_X')) {
        winner(0);
      } else if ($('td').eq('0').hasClass('played_X') && $('td').eq('4').hasClass('played_X') && $('td').eq('8').hasClass('played_X')) {
        winner(0);
      } else if ($('td').eq('2').hasClass('played_X') && $('td').eq('4').hasClass('played_X') && $('td').eq('6').hasClass('played_X')) {
        winner(0);
      }; 

    } else {
      alert("Square already played on!");
  };

})




});