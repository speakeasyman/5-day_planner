// Global Variables, not as many as usual

var btnSave = $('.save');
var datetime = null,
date = null;

// Update function, grabs the current time
var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY'));
};
// This is the interval, that every 15 mins should check the time, and recolor the time squares if a new hour is reached
$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    colorCheck();
    setInterval(update, 1000*60*15);    
});
// This is the button listener. It treats the save buttons are fungible, because that should be more intuitive for the
// user. It would be shame if they put in multiple thing for the day, and it wiped all but one.
// It just takes all the text values and places it in local storage, then reloads the page
$('.save').click(function(){
    var schedule = {
        nineAm: $('textarea')[0].value,
        tenAm: $('textarea')[1].value,
        elevenAm: $('textarea')[2].value,
        noon: $('textarea')[3].value,
        onePm: $('textarea')[4].value,
        twoPm: $('textarea')[5].value,
        threePm: $('textarea')[6].value,
        fourPm: $('textarea')[7].value,
        fivePm: $('textarea')[8].value,
    }
    localStorage.setItem('schedule', JSON.stringify(schedule));
    location.reload();  
    });

// This loads the schedule. It takes whever is local storage, and fills in the textarea accordingly. The textarea
// IDs were set as what the hour was in military time. Added an if else statement just
// so there would be no errors when there is not a schedule in the localstorage
function loadSchedule(){
    schedule = JSON.parse(localStorage.getItem('schedule'));
    if (schedule === null) {
        return        
    } else {
        $('#09').text(schedule.nineAm);
        $('#10').text(schedule.tenAm);
        $('#11').text(schedule.elevenAm);
        $('#12').text(schedule.noon);
        $('#13').text(schedule.onePm);
        $('#14').text(schedule.twoPm);
        $('#15').text(schedule.threePm);
        $('#16').text(schedule.fourPm);
        $('#17').text(schedule.fivePm);
        
    }
}
// This changes the colors of the text areas. It uses the for loop, to go and  check the current time in hours
// against the textarea ID. I made each ID the hour in 24hr format, so depending on if it's present, past, or future the
// appropiate class will be added using jquery. 
function colorCheck() {
    var currentHour = parseInt(moment().format('H'));   
     
    for (let i = 0; i < $('textarea').length; i++) {
        if (currentHour == $('textarea')[i].id) {
            test = ($('textarea')[i].id);
            $('#'+ test).addClass("present");                 
        } else if (currentHour > $('textarea')[i].id) {  
            test = ($('textarea')[i].id);
            $('#'+ test).addClass("past")        
        } else if (currentHour < $('textarea')[i].id) {
         test = ($('textarea')[i].id);
            $('#'+ test).addClass("future")
        }
    }
}
