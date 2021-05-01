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
    console.log(`a click`);
    console.log(this);
});