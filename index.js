var playing = false;
var score;
var answers = [];
var correct_answer;
var wrong_answer;
var action;
var timeRemaining;
document.getElementById("start-reset").addEventListener("click",function(){
      if(playing == true)
      {
        document.getElementById("score-value").innerHTML = score;
        location.reload();
      }
      else{
        playing = true;
        score = 0;
        document.getElementById("score-value").innerHTML = score;

        show("time-remaining");
        document.getElementById("start-reset").innerHTML = "Reset Game!";

        timeRemaining = 60;
        document.getElementById("time-value").innerHTML = timeRemaining;
        hide("game-over");
        startCount();
        generateQA();
      }
});
document.getElementById("box1").addEventListener("click",function(){
  check("box1");
});
document.getElementById("box2").addEventListener("click",function(){
  check("box2");
});
document.getElementById("box3").addEventListener("click",function(){
  check("box3");
});
document.getElementById("box4").addEventListener("click",function(){
  check("box4");
});
function startCount()
{
  action = setInterval(function () {
    timeRemaining--;
    document.getElementById("time-value").innerHTML = timeRemaining;
    if(timeRemaining == 0)
    {
      stopCount();
      document.getElementById("score-value-over").innerHTML = score;
      show("game-over");
      hide("time-remaining");
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById("start-reset").innerHTML = "Start";

    }

  }, 1000);

}

function stopCount()
{
  clearInterval(action);
}

function show(Id)
{
    document.getElementById(Id).style.visibility = "visible";
}
function hide(Id)
{
  document.getElementById(Id).style.visibility = "hidden";
}
function generateQA()
{
  var num1 = Math.random();
  num1 = Math.floor(num1*10)+1;
  var num2 = Math.random();
  num2 = Math.floor(num2*10)+1;

  document.getElementById("x").innerHTML = num1+' X ';
  document.getElementById("y").innerHTML = num2;

  correct_answer = num1*num2;
  var correct_position = Math.random();
  correct_position = Math.floor(correct_position*3)+1;
  document.getElementById("box"+correct_position).innerHTML = correct_answer;


  answers = [correct_answer];
    for(var i=1;i<5;i++)
    {
      if(i!=correct_position)
      {
        do{
          wrong_answer = Math.floor(Math.random()*10)+1 * Math.floor(Math.random()*10)+1;

        }while(answers.indexOf(wrong_answer)>-1);
        document.getElementById("box"+i).innerHTML = wrong_answer;
        answers.push(wrong_answer);
      }
    }

}
function check(Id)
{
  var user_clicked_answer = document.getElementById(Id).innerHTML;
  if(user_clicked_answer == correct_answer)
  {
    score++;
    document.getElementById("score-value").innerHTML = score;
    hide("wrong");
    show("correct");
    setTimeout(function () {
        hide("correct");
    }, 1000);
    generateQA();
  }
  else{
    hide("correct");
    show("wrong");
    setTimeout(function () {
      hide("wrong");
    }, 1000);

  }
}
