$( document ).ready(function(){

	$(".game").hide();


	var player_number = 2
	console.log(player_number)
	var add_input = function(player_number){
		if (player_number > 10){
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


	var b = distances[names[1]]     
	console.log(names.length)

	while (game_over == false){
		for (var i=0; i<names.length; i++){
			console.log("in for loop")
			var roll = Math.ceil((Math.random()*6));
			distances[names[i]] = distances[names[i]] + roll;
			progress(100*(distances[names[i]]/30), $("#track"+[i]+""));

			if ((distances[names[i]] + roll) >=30 ){
				console.log(names[i])

           // sleep(5)
           // $('#name_holder'+[i]).effect("shake");
           $('body','wrapper','game').animate({ scrollTop: $('#name_holder'+[i]+'').offset().top }, 1000);
           console.log('#name_holder'+[i])          
           $('#name_holder'+[i]).animate({
			left: $('#name_holder'+[i]).parent().width() / 2 - $("#animate").width() / 2
			}, 2000); 
           game_over = true;
       }
   }
}
console.log(distances);
};

function progress(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.data('',1).animate({ width: progressBarWidth }, 100).html();
}


var define_playing_board = function(hash){
	var player_names = hash;
	n = 0
	while (n < Object.keys(player_names).length) {
		$('.game').append("<button type='button' class='btn btn-lg btn-default' id='name_holder"+[n]+"'>"+(Object.keys(player_names))[n]+"</button><div class='racetrack' id='track"+[n]+"'</div>");
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


