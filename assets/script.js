var btnSave = $('.save');
var currentHour = parseInt(moment().format('H'));
console.log(currentHour);

var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY'));
       };

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);

});

$('.save').click(function(){
    var schedule = {
        nineAm: $('textarea')[0].value,
        tenAm: $('textarea')[1].value,
        elevenAm: $('textarea')[2].value,
        noon: $('textarea')[3].value,
        onepm: $('textarea')[4].value,
        twoPm: $('textarea')[5].value,
        threePm: $('textarea')[6].value,
        fourPm: $('textarea')[7].value,
        fivePm: $('textarea')[8].value,
    }
    localStorage.setItem('schedule', JSON.stringify(schedule));  
        console.log(schedule);    
});

function loadSchedule(){
    schedule = JSON.parse(localStorage.getItem('schedule'));
    console.log(schedule);
    $('#09').text(schedule.nineAm);
    $('#10').text(schedule.tenAm);
    $('#11').text(schedule.elevenAm);
    $('#12').text(schedule.noon);
    $('#13').text(schedule.onepm);
    $('#14').text(schedule.twoPm);
    $('#15').text(schedule.threePm);
    $('#16').text(schedule.fourPm);
    $('#17').text(schedule.fivePm);
}

function colorCheck() {

    for (let i = 0; i < $('textarea').length; i++) {
        if (currentHour == $('textarea')[i].id) {
            console.log($('textarea')[i]),
            test = ($('textarea')[i].id);
            console.log('test var', test);
            $('#'+test).addClass("bg-warning");
            
           
            
            
            
           

                       
        } else if (currentHour >$('textarea')[i].id) {  
            console.log('willbecome gray'); 
            test = ($('textarea')[i].id);
            console.log('test var', test);
            $('#'+test).addClass("bg-secondary text-white")        
        } else if (currentHour < $('textarea')[i].id) {
         console.log(`this will become green`);
         test = ($('textarea')[i].id);
            console.log('test var', test);
            $('#'+test).addClass("bg-success")
        }
    }
}
