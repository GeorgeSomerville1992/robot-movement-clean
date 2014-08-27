
function genDivs(v){ 
      console.log(v/2)
      var e = $("#grid25");// whatever you want to append the rows to: 
      for(var i = 0; i < v/2; i++){ 
        var row = document.createElement("div"); 
        row.className = "rowgrid"; 
        for(var x = 1; x <= v; x++){ 
            var cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            // cell.innerText = (i * v) + x;
            cell.setAttribute("id",(i * v) + x)
            row.appendChild(cell); 
        } 
        e.append(row); 
        
      }
      $(".maincontainer").css('display', 'block')
      $(".hide-input").css('display', 'none')
      setupmarker()
    }
function setupmarker(){
  var marker = $("#marker");
  var start = document.getElementById(25)
  startInt = parseInt(start.id)
  $(marker).appendTo(start);
  $("#output").append(startInt);
  $(start).css('background-color', 'green')
  console.log(start)
  moveMarker(start);
}
function moveMarker(start){
  var startmove = start
  var marker = $("#marker");
  $(".up").click(function(){
    $("#output").empty();
    startmoveInt = parseInt(startmove.id)
    // startmove.setAttribute("id", startmove.id - 10)
    var finish = document.getElementById(startmoveInt - 10)
    $(marker).appendTo(finish);
    $("#output").append(startmoveInt - 10)
    startmove = finish;
    validateMarker(startmove);
  })
  $(".down").click(function(){
    $("#output").empty();
    startmoveInt = parseInt(startmove.id)
    var finish = document.getElementById(startmoveInt + 10)
    $("#output").append(startmoveInt + 10)
    $(marker).appendTo(finish);
    startmove = finish
    validateMarker(startmove)

    })
  $(".left").click(function(){
    $("#output").empty();
    startmoveInt = parseInt(startmove.id)
    var finish = document.getElementById(startmoveInt - 1)
    $("#output").append(startmoveInt - 1)
    $(marker).appendTo(finish);
    startmove = finish
    validateMarker(startmove)
  }) 
  $(".rightclick").click(function(){
    $("#output").empty();
    startmoveInt = parseInt(startmove.id)
    var finish = document.getElementById(startmoveInt + 1)
    $("#output").append(startmoveInt + 1)
    $(marker).appendTo(finish);
    startmove = finish
    validateMarker(startmove)
  }) 
}

function validateMarker(startmove){
   console.log(startmove)
  if(startmove === null)  {
    alert("you have fallen of the edge transporting you back to the middle")
    window.location.href = window.location.href
    setupmarker()
    console.log(startmoveInt)
  }
}
var marker = $("#marker")
function directions(){

  $(".rotateitleft").click(function () {
    $("#marker").removeClass('rotateright');
    $("#marker ").toggleClass('rotateleft');
    $("#input-second").append("L")
    
  });

  $(".ratateitright").click(function() {
    $("#marker").removeClass('rotateleft');
    $("#marker ").toggleClass('rotateright');
    $("#input-second").append("R")
  });
  $(".forward").click(function(){
    $("#input-second").append("F")
  });
  $(".submit-orders").click(function(){
    var text = document.getElementById('input-second').innerHTML 
    var hits = []
    for (var i = 0; i < text.length; i ++){
      if (text[i] === "L"){
        $("#output-box").append(text[i])
      }
      else if (text[i] === "R"){
        $("#output-box").append(text[i])
      }
      else if (text[i] === "F"){
        $("#output-box").append(text[i])
      }
    }
    var totalOutput = document.getElementById('output-box').innerHTML
    var currentPosition = document.getElementById('output').innerHTML
    $("#output-box").empty()
    $("#output-box").append(totalOutput + "\n" + currentPosition + "\n")
    characterValidation(totalOutput)
  })

}
function characterValidation(text){
  // try{
  //   if(totalOutput.length == 100); throw "yeah";
  // }catch(err){
  //   alert(" you have gon gover 100 resetting...");
  //   window.location.href = window.location.href
  // }
  console.log(text)
  if(text.length > 100){
    alert(" Input length Must not be over 100 character's ")
    window.location.href = window.location.href
  }
}

 function initialize(){
    directions();  
 };

$(function(){

  initialize()

})


