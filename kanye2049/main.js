$(".message").dialog({
    autoOpen: false,
    draggable: false,
    click: function() {
      $( this ).dialog( "close" );
    },
    dialogClass: 'dialogue-box'
})

$(".music").dialog({
  autoOpen: false,
  draggable: false,
  click: function() {
    $( this ).dialog( "close" );
  },
  dialogClass: 'dialogue-box'
})

$('#earth').on('dblclick', function(){
    $('.message').dialog('open')
})

$('#kanye').on('dblclick', function(){
  $('.music').dialog('open')
})

$(function() {
  $(".icon").draggable({containment: '.canvas'});
  $('.music-icon').draggable({containment: '.kanye-music'})
    
})

document.addEventListener('DOMContentLoaded', function(){


  function setTime(){
    var objToday = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
    dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
    curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
    curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
    curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
    var time = document.querySelector('#time')
    time.innerHTML = `POTUS ${curHour}:${curMinute}${curMeridiem} - ${curMonth} ${dayOfMonth}, 2049`
    setTimeout(setTime, 1000)
  }
  setTime()
 
})