$( document ).ready(function(){

function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 5000).html();
}
// progress(80, $('#progressBar'));
progress(50, $('#progressBar'));

// progress(25, $('.progress'));
progress(90, $('.progress'));


});
