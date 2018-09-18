$(function(){
	"use strict";

	var
		$table = $("#table"),
		$li = $("<li>"),
		$img = $("<img>"),
		kind = ["c", "d", "h", "s"],
		cards = [],
		select_index = [],
		select_kind = [],
		select_num = "";


	for(var i = 0; i < 4; i++){
		for(var j = 1; j <= 13; j++){
			cards.push( kind[i] + ("0" + j).slice(-2) + ".png");
		}
	}

	shuffle();

	for(var i = 0; i <cards.length; i++){
		$li
		.clone()
		.data("num", cards[i].replace(/[^0-9]/g, ""))
		.data("kind", cards[i].substring(0, 1))
		.addClass("card is-surface")
		.append(
			$img
				.clone()
				.attr("src", "../images/z02.png")
				.addClass("card_surface")
		)
		.append(
			$img
				.clone()
				.attr("src", "../images/" + cards[i])
				.addClass("card_reverse")
		)
		.appendTo($table);
	}

	$table.on("click", "li", function(){
		if(select_index.length >= 2){
			return false;
		}

		$(this).toggleClass("is-surface").toggleClass("is-reverse");
		if(select_num === ""){
			select_num = $(this).data("num");
			select_kind = $(this).data("kind");
			select_index.push($(this).index());
		} else {
			if ($(this).index() !== select_index[0]){
				select_index.push($(this).index());
				if ($(this).data("num") === select_num){
					console.log($(this).data("kind") + $(this).data("num") + ":" + select_kind + select_num + " →　○");
					setTimeout(card_ok, 1500);
				} else {
					console.log($(this).data("kind") + $(this).data("num") + ":" + select_kind + select_num + " →　☓");
					setTimeout(card_reverse, 1500);
				}
			}
		}
	});

	function card_ok() {
		$table.find("li").eq(select_index[0]).addClass("hit");
		$table.find("li").eq(select_index[1]).addClass("hit");
		select_num = "";
		select_index = [];
	}

	function card_reverse() {
		$table.find("li").eq(select_index[0]).toggleClass("is-surface").toggleClass("is-reverse");
		$table.find("li").eq(select_index[1]).toggleClass("is-surface").toggleClass("is-reverse");
		select_num = "";
		select_index = [];
	}

	function shuffle(){
		var
			len = cards.length - 1,
			tmp,
			j;

		for(var i = len; i > 0; i--){
			j = Math.floor(Math.random() * (i + 1));
			tmp = cards[i];
			cards[i] = cards[j];
			cards[j] = tmp;
		}
	}

});
