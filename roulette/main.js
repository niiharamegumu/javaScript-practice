$(function(){
  "use strict";

  var
    max = 16,
    bingo = [],
    $number = $("#number"),
    $start = $("#start"),
    $stop = $("#stop"),
    $reset = $("#reset"),
    bingo_len,
    timer,
    random,
    num,
    result;

  for(var i = 1; i <= max; i++) {
    bingo.push(i);
    $number.append($("<li>").text(i));
  }

  $stop.prop('disabled', true);
  $reset.prop('disabled', true);

  $start.on('click', function () {
    $start.prop('disabled', true);
    $stop.prop('disabled', false);

    timer = setInterval(function(){
      random = Math.floor( Math.random() * bingo.length );
      num = bingo[random];
      $number
        .find("li")
        .removeClass("random")
        .eq(parseInt(num, 10) - 1)
        .addClass("random");
    }, 10);

  });

  $stop.on('click', function(){
    $stop.prop('disabled', true);
    $start.prop('disabled', false);

    clearInterval(timer);
    result = bingo[random];
    bingo.splice(random, 1);
    $number
      .find("li")
      .eq(parseInt(result, 10) - 1)
      .addClass("hit");

    bingo_len = bingo.length;
    if ( bingo_len === 0 ) {
      $start.prop('disabled', true);
      $stop.prop('disabled', true);
      $reset.prop('disabled', false);
    }
  });

  $reset.click(function(){
    for(var i = 1; i <= max; i++) {
      bingo.push(i);
    }
    $start.prop('disabled', false);
    $stop.prop('disabled', true);
    $reset.prop('disabled', true);
    $number
      .find("li")
      .removeClass("random")
      .removeClass("hit");
  });

});
