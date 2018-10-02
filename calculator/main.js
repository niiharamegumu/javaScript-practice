(function(){
	"use strict";

	var
		$num = document.getElementsByClassName("num"),
		$calculation = document.getElementsByClassName("calculation"),
		$total = document.getElementById("total"),
		$clear = document.getElementById("clear"),
		$point = document.getElementById("point"),
		$equal = document.getElementById("equal"),
		total_string = "",
		total_num = [],
		calculation = false,
		calculation_type = "",
		result,
		$num_len = $num.length,
		$calculation_len = $calculation.length;



	for(var i = 0; i < $num_len; i++){
		$num[i].onclick = function(){
			$total.textContent = this.textContent;
			total_string += $total.textContent;
			$total.textContent = total_string;
			calculation = true;
		};
	}


	for(i = 0; i < $calculation_len; i++){
		$calculation[i].onclick = function(){
			calculation_type = this.textContent;
			if(calculation){
				set_array();
			}
		};
	}

	$equal.onclick = function(){
		if(total_num.length == 1 && calculation){
			set_array();
		}
		switch(calculation_type){
			case "+" :
				result = total_num[0] + total_num[1];
				break;
			case "-" :
				result = total_num[0] - total_num[1];
				break;
			case "×" :
				result = total_num[0] * total_num[1];
				break;
			case "÷" :
				result = total_num[0] / total_num[1];
				break;
		}
		total_num[0] = result;
		total_num.pop();
		$total.textContent = result;
		calculation = false;
		};


	$clear.onclick = function(){
		total_string = "";
		total_num = [];
		calculation = false;
		calculation_type = "";
		$total.textContent = "0";
	};

	function set_array(){
		total_num.push(Number.parseInt(total_string, 10));
		total_string = "";
	}
}());
