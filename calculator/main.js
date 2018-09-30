(function(){
	"use strict";

	var
		$num = document.getElementsByClassName("num"),
		$total = document.getElementById("total"),
		$clear = document.getElementById("clear"),
		$division = document.getElementById("division"),
		$multiplication = document.getElementById("multiplication"),
		$subtraction = document.getElementById("subtraction"),
		$addition = document.getElementById("addition"),
		$point = document.getElementById("point"),
		$equal = document.getElementById("equal"),
		total_string = "",
		total_num = [],
		calculation = false,
		$num_length = $num.length;


	for(var i = 0; i < $num_length; i++){
		$num[i].onclick = function(){
			if(calculation){
				calculation = false;
				total_string = "";
				$addition.classList.remove("calculation-button");
			}
			$total.textContent = this.textContent;
			total_string += $total.textContent;
			$total.textContent = total_string;
		};
	}


	$addition.onclick = function(){
		if(total_string){
			calculation = true;
			this.classList.add("calculation-button");
			total_num.push(Number.parseInt(total_string, 10));
		}
	};


	$equal.onclick = function(){
		total_num.push(Number.parseInt(total_string, 10));
		total_string = "";
		total_string = String(total_num[0] + total_num[1]);
		$total.textContent = total_string;
		console.log(typeof total_string);
	};


	$clear.onclick = function(){
		total_string = "";
		total_num = [];
		calculation = false;
		$total.textContent = "0";
	};
}());
