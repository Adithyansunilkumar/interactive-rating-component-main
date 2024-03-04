let optionclicked=0;
let value=0;
function clearSelection() {
  $("#ratingoption1,#ratingoption2,#ratingoption3,#ratingoption4,#ratingoption5").css('background','hsl(212, 17%, 19%)');
  $("#ratingoption1,#ratingoption2,#ratingoption3,#ratingoption4,#ratingoption5").css('color','hsl(217, 12%, 63%)');
}
$("document").ready(function() {
  $("#ratingoption1,#ratingoption2,#ratingoption3,#ratingoption4,#ratingoption5").mouseover(changebg)
    function changebg() {
      if(optionclicked==0){
    $(this).css('background','hsl(217, 12%, 63%)');
    $(this).css('color','white');
    }
  };
  $("#ratingoption1,#ratingoption2,#ratingoption3,#ratingoption4,#ratingoption5").mouseout(defaultbg)
    function defaultbg() {
      if(optionclicked==0){
    $(this).css('background','hsl(212, 17%, 19%)');
    $(this).css('color','hsl(217, 12%, 63%)');
    }};
  $("#ratingoption1,#ratingoption2,#ratingoption3,#ratingoption4,#ratingoption5").click(function() {
    if(optionclicked==1){
      clearSelection();
    }
    $(this).css('background','hsl(25, 97%, 53%)');
    $(this).css('color','white');
    optionclicked=1;
  });
  $("#ratingoption1").click(function() {
    value="You selected 1 out of 5";
  })
  $("#ratingoption2").click(function() {
    value="You selected 2 out of 5";
  })
  $("#ratingoption3").click(function() {
    value="You selected 3 out of 5";
  })
  $("#ratingoption4").click(function() {
    value="You selected 4 out of 5";
  })
  $("#ratingoption5").click(function() {
    value="You selected 5 out of 5";
  })
  $("#submitbutton").mouseover(function(){
    $(this).css('background','white');
    $(this).css('color','hsl(25, 92%, 61%)');
  });
  $("#submitbutton").mouseout(function(){
    $(this).css('background','hsl(25, 97%, 53%)');
    $(this).css('color','hsl(0, 0%, 78%)');
  });
  $("#submitbutton").click(function() {
    if(value!=0){
    $("#thankyoubox").css('display','block');
    document.getElementById('yourselection').innerHTML=value;
}else{
  alert("please give your rating")
}

});


});