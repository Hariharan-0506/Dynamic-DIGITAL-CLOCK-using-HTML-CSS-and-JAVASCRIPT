setInterval(function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    document.querySelector(".hours").innerHTML = (hours < 10 ? "0" : "") + hours;
    document.querySelector(".minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes;
    document.querySelector(".seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;
  }, 1000);
  