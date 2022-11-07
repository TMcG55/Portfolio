let counter = 1;
setInterval(function(){
    document.getElementById('radioA'+ counter).checked = true;
    counter++;
    if(counter>3){
      counter = 1;
    }
},3000)
