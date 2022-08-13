$(document).ready(function(){
   $("#form-body").submit(function(event){

    let text = $("#word").val();
    let bigText = [];
    let  sentence = text.split([""]);


    sentence.forEach(function(message){
        if (message.length >= 3) {
            bigText.push(message);
        }
    });


    // $("#show-text").show();


    event.preventDefault();
   
    bigText = bigText.reverse();
    bigText = bigText.join("");
 
   });
   
  
  

  
  


});








  
  