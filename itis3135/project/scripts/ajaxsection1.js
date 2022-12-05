//These ajax load requests are used to load txt files into seperate divs
$(document).ready(function(){
    $("#button1").click(function(){
      $("#div1").load("scripts/ajaxfiles/maureen.txt");
    });
    $("#button2").click(function(){
      $("#div2").load("scripts/ajaxfiles/eric.txt");
    });
    $("#button3").click(function(){
      $("#div3").load("scripts/ajaxfiles/amanda.txt");
    });
     $("#button4").click(function(){
      $("#div4").load("scripts/ajaxfiles/emily.txt");
    });
  });