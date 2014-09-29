$( document ).ready(function(){
  var say_alert = function(){
    // alert("test")
    console.log("WTF")
    emptystring=""
    for (i = 1; i < 5; i++) {
      var box=document.getElementById(i+"").value+"";
      emptystring=emptystring+box;
      }
      console.log(emptystring);
      document.getElementById("4").value = 8;
    };

    var insert_table = function(str1, str2, form){
      var tbody = "";
      var counter = 1
      for(var i = 0; i < 9; i++){
        tbody += "<tr id=tr" + i + ">";
        for(var j = 0; j < 9; j++){
            tbody += "<td id=td" + counter + ">";
            if (form == true){
              tbody += str1 + counter + str2;
            } else {
              tbody += str1;
            }

            tbody += "</td>";
            counter++;
        }
        tbody += "</tr>";
      }
      document.getElementById('table_container').innerHTML = "<table border='3'>" +tbody+ "</table>";
    };

    var populate_table = function(str){
      for(var i = 1; i <= 81; i++){
        $('#td'+i).append(str[0]);
        str=str.substring(1);
        }
    };

    var get_user_input = function(){
      var user_input = ""
      for(var i = 1; i <= 81; i++){
        var current_value = $('#input'+i).val();
        if (current_value == ""){ current_value = "0" };
        user_input += current_value;
        }
        return user_input;
    };

    var alert_impossible_board = function(){
      $('#impossible_board_alert').append("<p>Impossible Board</p>");
    };

    insert_table("<input type='text' maxlength='1' id=input", ">", true);
    $('#table_container').prepend("<form class='sudoku_form'>");
    $('#table_container').append("</form>");

  $('#solve_button').click(function(event){
    event.preventDefault();

    $('#form_container').remove();
    $('#sudoku_form').hide();
    insert_table("", "", false);

    if (board.passes_presolve_check() == true){
      board.solve();
      if (board.passes_postsolve_check() == true){
        populate_table(board.change_2d_puzzle_into_string());
      } else {
        alert_impossible_board();
      };
    } else {
      alert_impossible_board();
    };



  });
});
