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


  $start.on('click', function () {
    set_disabled( true, false );

    timer = setInterval(function() {
      random = get_random( bingo.length );
      result = bingo[random];
      $number
        .find("li")
        .removeClass("random")
        .eq(parseInt(result, 10) - 1)
        .addClass("random");
    }, 10);

  });

  $stop.on('click', function(){
    set_disabled( false, true );

    clearInterval(timer);
    bingo.splice(random, 1);
    $number
      .find("li")
      .eq(parseInt(result, 10) - 1)
      .addClass("hit");

    bingo_len = bingo.length;
    if ( bingo_len === 0 ) {
        set_disabled( true, true );
    }
  });

  $reset.click(function(){
    set_disabled( false, true );
    clearInterval(timer);
    bingo = [];
    for(var i = 1; i <= max; i++) {
      bingo.push(i);
    }
  $number
    .find("li")
    .removeClass("random hit");
  });


  function get_random ( num ) {
    return Math.floor( Math.random() * num );
  }
  function set_disabled ( startFlag, stopFlag ) {
    $start.prop('disabled', startFlag);
    $stop.prop('disabled', stopFlag);
  }

});
