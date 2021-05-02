var btnSave = $('.save');

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
    $('#0900').text(schedule.nineAm);
    $('#1000').text(schedule.tenAm);
    $('#1100').text(schedule.elevenAm);
    $('#1200').text(schedule.noon);
    $('#1300').text(schedule.onepm);
    $('#1400').text(schedule.twoPm);
    $('#1500').text(schedule.threePm);
    $('#1600').text(schedule.fourPm);
    $('#1700').text(schedule.fivePm);
}