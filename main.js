

function increaserS(oggetto, inc, top) {
  var currentVal = parseInt($(oggetto).html());
  if (currentVal < top){
    if (currentVal < 9) {
      $(oggetto).html(currentVal*1 + inc);
      var currentVal = $(oggetto).html();
      $('#time-left').html('0'+currentVal+":00");
    } else {
      $(oggetto).html(currentVal*1 + inc);
      var currentVal = $(oggetto).html();
      $('#time-left').html(currentVal+":00");  
    }
    
  }
  
}

function decreaserS(oggetto, inc, top) {
  var currentVal = parseInt($(oggetto).html());
  if (currentVal > top){
    if (currentVal <= 10) {
      $(oggetto).html(currentVal*1 - inc);
      var currentVal = $(oggetto).html();
      $('#time-left').html('0'+currentVal+":00");
    } else {
      $(oggetto).html(currentVal*1 - inc);
      var currentVal = $(oggetto).html();
      $('#time-left').html(currentVal+":00");  
    }
  }
  
}


function increaser(oggetto, inc, top) {
  var currentVal = parseInt($(oggetto).html());
  if (currentVal < top){
    $(oggetto).html(currentVal*1 + inc);
  }
  
}

function decreaser(oggetto, inc, top) {
  var currentVal = parseInt($(oggetto).html());
  if (currentVal > top){
    $(oggetto).html(currentVal*1 - inc);
  }
  
}

function reset() {
  $('#session-length').html(25);
  $('#break-length').html(5);
  $("#time-left").html('25:00');
  $("#timer-label").html("Pomodoro Time!");
  clearInterval(counter);
  clearInterval(breakCounter);
  $('.hide').show();
  noRunning = true;
  running = true
  var beep = document.getElementById("beep");
  beep.pause();
  beep.currentTime = 0;

}


var noRunning = true;
var running = true
var counter;
var breakCounter;

function start() {
  if (noRunning) {
    labelShow();
    noRunning = !noRunning
    $('.hide').hide();
    $('#pause').toggle();
    $('#play').toggle();
    var count = $('#time-left').html();
    count = parseInt(count);
    count = count*60;
    counter = setInterval(() => {
      if (running)
      count = count*1 -1;
      if (count == 0) {
        clearInterval(counter);
        $("#timer-label").html("It's Break Time!");
        labelShow();
        var beep = document.getElementById("beep");
        beep.play();
        var breakCount = $('#break-length').html();
        breakCount = parseInt(breakCount);
        breakCount = breakCount*60+1;
        breakCounter = setInterval(() => {
          if (running)
          breakCount = breakCount*1 -1;
          if (breakCount == 0) {
            clearInterval(breakCounter);
            var beep = document.getElementById("beep");
            beep.play();
            repeat();
          }
          if (breakCount>=600){
            if (breakCount%60>=10){
              $("#time-left").html(Math.floor(breakCount/60)+':'+breakCount%60);
            } else {
              $("#time-left").html(Math.floor(breakCount/60)+':'+'0'+breakCount%60);
            }
          } else {
            if (breakCount%60>=10){
              $("#time-left").html('0'+(+Math.floor(breakCount/60)+':'+breakCount%60));
            } else {
              $("#time-left").html('0'+(Math.floor(breakCount/60)+':'+'0'+breakCount%60));
            }
          }
        }, 1000); 
      } 
      if (count>=600){
        if (count%60>=10){
          $("#time-left").html(Math.floor(count/60)+':'+count%60);
        } else {
          $("#time-left").html(Math.floor(count/60)+':'+'0'+count%60);
        }
      } else {
        if (count%60>=10){
          $("#time-left").html('0'+(+Math.floor(count/60)+':'+count%60));
        } else {
          $("#time-left").html('0'+(Math.floor(count/60)+':'+'0'+count%60));
        }
      }  

        
    }, 1000);    

  } else {
    running = !running
    $('#pause').toggle();
    $('#play').toggle();
  }
}

function labelShow() {
  $("#time-left").fadeOut(400);
  setTimeout(() => {
    $("#time-left").fadeIn(1000);  
  }, 2550);

  setTimeout(() => {
    $("#timer-label").fadeIn(1000);
  setTimeout(() => {
    $("#timer-label").fadeOut(1000);  
  }, 1050);
  }, 400);
  
}



function repeat() {
  $("#timer-label").html("Pomodoro Time!");
  labelShow();
  noRunning = !noRunning
  if (noRunning) {
    noRunning = !noRunning
    var count = $('#session-length').html();
    count = parseInt(count);
    count = count*60+1;
    counter = setInterval(() => {
      if (running)
      count = count*1 -1;
      if (count == 0) {
        clearInterval(counter);
        $("#timer-label").html("It's Break Time!");
        labelShow();
        var beep = document.getElementById("beep");
        beep.play();
        var breakCount = $('#break-length').html();
        breakCount = parseInt(breakCount);
        breakCount = breakCount*60+1;
        breakCounter = setInterval(() => {
          if (running)
          breakCount = breakCount*1 -1;
          if (breakCount == 0) {
            clearInterval(breakCounter);
            var beep = document.getElementById("beep");
            beep.play();
            repeat();
          }
          if (breakCount>=600){
            if (breakCount%60>=10){
              $("#time-left").html(Math.floor(breakCount/60)+':'+breakCount%60);
            } else {
              $("#time-left").html(Math.floor(breakCount/60)+':'+'0'+breakCount%60);
            }
          } else {
            if (breakCount%60>=10){
              $("#time-left").html('0'+(+Math.floor(breakCount/60)+':'+breakCount%60));
            } else {
              $("#time-left").html('0'+(Math.floor(breakCount/60)+':'+'0'+breakCount%60));
            }
          }
        }, 1000); 
      } 
      if (count>=600){
        if (count%60>=10){
          $("#time-left").html(Math.floor(count/60)+':'+count%60);
        } else {
          $("#time-left").html(Math.floor(count/60)+':'+'0'+count%60);
        }
      } else {
        if (count%60>=10){
          $("#time-left").html('0'+(+Math.floor(count/60)+':'+count%60));
        } else {
          $("#time-left").html('0'+(Math.floor(count/60)+':'+'0'+count%60));
        }
      }  

        
    }, 1000);    

  } else {
    running = !running
    $('#pause').toggle();
    $('#play').toggle();
  }

}




$(document).ready(function () {
  $('#pause').hide();
  
  $("#timer-label").hide();
  
});

