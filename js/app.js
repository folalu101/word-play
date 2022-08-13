$(document).ready(function(){
   $("#form-main").submit(function(event){
   
    // console.log("it works! ");

    let text = $("#word").val();
    // console.log(text);
    let bigText = [];
    let  sentence = text.split([""]);
    // console.log(sentence);


    sentence.forEach(function(message){
        if (message.length >= 3) {
            bigText.push(message);
        }
        // console.log(bigText);
    });
    bigText = bigText.reverse();
    bigText = bigText.join("");
    // console.log(bigText);

    $("#show-text").show();
    


    
    event.preventDefault();
   
   });
   
//    console.log("it works");
  

  
  


});








  
  