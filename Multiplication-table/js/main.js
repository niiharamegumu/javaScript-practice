$(function(){
"use strict";

var
  $table = $("#matrix"),
  $tr = $("<tr>"),
  $td = $("<td>"),
  count = 0,
  newTd;

for(var i = 1; i <= 9; i++){
  $tr.clone().appendTo($table);
  for(var j = 1; j <= 9; j++){
    count++;
    newTd = $td.clone().text( i + "*" + j + "=" + (i * j));
    if(count % 2 !== 0){
      newTd.addClass("even");
    }
    newTd.appendTo($table.find("tr").eq(i - 1));
  }
}
});
