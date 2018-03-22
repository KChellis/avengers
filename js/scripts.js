var answers = function (string1, string2, string3, string4) {
  return string1 + string2 + string3 + string4;
}
var maxLetter= function(string) {
  var exp = string ;
  var expCounts = {};
  var maxKey = '';
  for(var i = 0; i < exp.length; i++)
  {
      var key = exp[i];
      if(!expCounts[key]){
       expCounts[key] = 0;
      }
      expCounts[key]++;
      if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
          maxKey = key;
      }
  }
  return maxKey;
}



$(function() {
  $("form#avengers").submit(function(event) {
    event.preventDefault();
    var ans1 = $("#firstQ").val();
    var ans2 = $("#secondQ").val();
    var ans3 = $("#thirdQ").val();
    var ans4 = $("#fourthQ").val();
    var result = maxLetter(answers(ans1, ans2, ans3, ans4))
    if (result === "i") {
      $("#result").text("You are Ironman!");
    } else if (result === "b") {
      $("#result").text("You are The Hulk!");
    } else if (result === "w") {
      $("#result").text("You are Black Widow!");
    } else if (result === "d") {
      $("#result").text("You are Doctor Strange!");
    } else if (result === "c") {
      $("#result").text("You are Captain America!");
    } else if (result === "h") {
      $("#result").text("You are Hawkeye!");
    } else {
      $("#result").text("You did not match any one avenger!");
    }
  });
});
