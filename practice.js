$( document ).ready(function(){

  $(".game").hide();


var player_number = 2
console.log(player_number)
  var add_input = function(player_number){
    if (player_number > 10){
      // player_number = 10;
      return
    }
      $('#forms').append("<input class='form-group' id='form"+player_number+"'placeholder='Player "+player_number+"' maxlength='20'></input>")
      console.log(player_number)
  };

  var remove_input = function(player_number){
    if (player_number < 2){
     // player_number = 2;
      return
    }
      $('#forms > input:last-child').remove();
      console.log(player_number)
  };

    var collect_input = function(player_number){
      var player_hash = {}
      for (var i=1; i<=player_number ;i++){
        console.log('#form'+i);
        player_hash[$("#form"+i).val()]=0;
      }
      return player_hash;
  };



    var game = function(player_hash){
      console.log("in game")
      var distances = player_hash;
      var names = Object.keys(player_hash);
      var game_over = false;
      while (game_over == false){
        for (var i=0; i<names.length; i++){
          console.log("in for loop")
          var roll = Math.ceil((Math.random()*6));
          distances[names[i]] = distances[names[i]] + roll;
            progress(90, $('.form1'));
          if ((distances[names[i]] + roll) >=30 ){
            console.log(names[i]);
            game_over = true;
          }
        }
      }
      console.log(distances);
  };
function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 2500).html(percent + "%&nbsp;");
}


var define_playing_board = function(hash){
  var player_names = hash;
  n = 0
      while (n < Object.keys(player_names).length) {
        // $('.progress2').append("<div class='progress-bar progress-bar-striped' role='progressbar' style='width: 50%'><span class='sr-only'>100% Complete</span></div><br>");
        $('.game').append("<button type='button' class='btn btn-lg btn-default'>"+(Object.keys(player_names))[n]+"</button><div class='progress'><div class='progress-bar progress-bar-striped' id='form"+[n]+"' role='progressbar'><span class='sr-only'>100% Complete</span></div></div>");
        console.log(n);
        n++;
      }

};




$('.btn-warning').click(function(event){
  event.preventDefault();
  if (player_number <10){
    player_number++;
    add_input(player_number);
    }


  });

$('.btn-danger').click(function(event){
  console.log("removing...")
  event.preventDefault();
  if (player_number >2){
    player_number--;
    remove_input(player_number);
    }

  });

$('.btn-success').click(function(event){

  event.preventDefault();
  console.log("in start")
  collect_input(player_number);
  $("#wrapper").hide();
  $(".game").show();
  $("#progress").show();
  console.log("before game")
  console.log(collect_input(player_number));
  define_playing_board(collect_input(player_number));
  game(collect_input(player_number));


  });



});


