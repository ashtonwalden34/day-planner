// function to wrap everything, run when page is loaded
$(document).ready(function() {
    // gets the current date from moment.js, adds it as text into "currentDay", formats it to show month, day, and year
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
    
    // gets current time from moment.js, formats it to have hour and minutes
    var currentTime = moment().format("H")

    // color coding time blocks
    // for each time block...
        //

    $(".timeBlock").each(function(){
        //var timeBlockHour = moment(String);
        //$("timeBlockHour") = moment().format("hh mm")

        var timeHour = parseInt($(this).attr("id").split("-")[1])

        console.log("hit it 1")
        console.log(timeHour)
        console.log("hit it 2")
        console.log(currentTime)

    });






/*
    $(".timeBlock").each (function() {
        var timeBlockHour = parseInt($("#time").split("-")[1]);

        console.log(timeBlockHour);
        console.log("hit it");

        if (timeBlockHour < currentTime) {
            $(this).addClass("past");
          } 
          else if (timeBlockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
          } 
          else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
          }
          console.log("hit it2");
    });
*/
  
    
});