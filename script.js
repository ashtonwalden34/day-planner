// function to wrap everything, run when page is loaded
$(document).ready(function() {

// Program starts by looking in local storage to find saved tasks
    // Uses the key of time to find the stored items
function getLS() {
    localStorage.getItem("9:00 am")
    localStorage.getItem("10:00 am")
    localStorage.getItem("11:00 am")
    localStorage.getItem("12:00 pm")
    localStorage.getItem("1:00 pm")
    localStorage.getItem("2:00 pm")
    localStorage.getItem("3:00 pm")
    localStorage.getItem("4:00 pm")
    localStorage.getItem("5:00 pm")


// Takes the stored items and finds the task based on it's html relation to the time block
    $('#time-9').siblings('.taskBlock').children('.userTask').val(localStorage.getItem("9:00 am"));
    console.log($('#time-9').siblings('.taskBlock'));
    $('#time-10').siblings('.taskBlock').children('.userTask').val(localStorage.getItem("10:00 am"));
    console.log($('#time-9').siblings('.taskBlock'));
    $('#time-11').siblings('.taskBlock').children('.userTask').val(localStorage.getItem("11:00 am"));
    console.log($('#time-9').siblings('.taskBlock'));
    $('#time-12').siblings('.taskBlock').children('.userTask').val(localStorage.getItem("12:00 pm"));
    console.log($('#time-9').siblings('.taskBlock'));
    $('#time-13').siblings('.taskBlock').children('.userTask').val(localStorage.getItem("1:00 pm"));
    console.log($('#time-9').siblings('.taskBlock'));
    $('#time-14').siblings('.taskBlock').children('.userTask').val(localStorage.getItem("2:00 pm"));
    console.log($('#time-9').siblings('.taskBlock'));
    $('#time-15').siblings('.taskBlock').children('.userTask').val(localStorage.getItem("3:00 pm"));
    console.log($('#time-9').siblings('.taskBlock'));
    $('#time-16').siblings('.taskBlock').children('.userTask').val(localStorage.getItem("4:00 pm"));
    console.log($('#time-9').siblings('.taskBlock'));
    $('#time-17').siblings('.taskBlock').children('.userTask').val(localStorage.getItem("5:00 pm"));
    console.log($('#time-9').siblings('.taskBlock'));

}

// Runs storage to get locally stored information
getLS();


// Save button saves the tasks to local storage
        $('.saveBtn').on('click', function(){
            //console.log($(this).parent().siblings().children());
            //console.log($(this).parent().siblings().children()[0].innerText);
            //console.log($(this).parent().siblings().children()[1].value);
            var userTaskStorage = document.getElementById('userTask');

            var task = $(this).parent().siblings().children()[1].value
            var time = $(this).parent().siblings().children()[0].innerText;

            localStorage.setItem(time, task);
            
            //console.log(localStorage);
           
        });
    
    // gets the current date from moment.js, 
    // adds it as text into "currentDay"
    // formats it to show month, day, and year
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
    
    // gets current time from moment.js, formats it to have hour and minutes
    var currentTime = moment().format("H")

// color coding time blocks
    // for each time block...
        // looks at id name
        // splits it into pieces based on the space
        // takes the second piece (number)
        // pareses the "number" from a string to an integer
        // compares the integer to the current time saved as "currentTime"
    $(".timeBlock").each(function() {
        //var timeBlockHour = moment(String);
        //$("timeBlockHour") = moment().format("hh mm")
        var timeBlockHour = parseInt($(this).attr("id").split(" ")[1]);
        // Colors the time block in based on the relation to the current time
        if (timeBlockHour === currentTime) {
            $(".taskBlock").css("background-color", "blue")
            $(".userTask").css("background-color", "blue")
        }else if(timeBlockHour > currentTime) {
            $(".taskBlock").css("background-color", "green")
            $(".userTask").css("background-color", "green")
        }else{
            $(".taskBlock").css("background-color", "red")
            $(".userTask").css("background-color", "red")
        }
    });    
});