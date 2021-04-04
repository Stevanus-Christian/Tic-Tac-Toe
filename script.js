var remainingNumbers = ["0","1","2","3","4","5","6","7","8"];
var userMoves = [];
var botMoves = [];
var possibleWins = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"]];
var done = 0;
var counter = 0;
var restart = document.getElementById("restart");
function userClick(num){
    userMoves.push(num);
    var boxString = "box";
    var boxNum = boxString.concat(num);
    var box = document.getElementById(boxNum);
    var spanString = "span";
    var spanNum = spanString.concat(num);
    var span = document.getElementById(spanNum);
    box.style.backgroundColor = "yellow";
    span.innerHTML = "X";
    var value = remainingNumbers.indexOf(num);
    remainingNumbers.splice(value,1);
    box.setAttribute("onclick","");
    for(x of possibleWins){
        if(containsAll(x,userMoves)){
            alert("winner. gagnant.");
            done++;
            restart.style.display = "block";
            finish();
        }
    }
    console.log(userMoves);
    if(done==0){
        if(userMoves.length == 5){
            alert("Big 'Ol Tie");
            restart.style.display = "block";
            finish();
        }
        setTimeout(function(){
            botClick();
      	},200);
    }
}

function botClick(){
    var randomNumber = ~~(Math.random() * (remainingNumbers.length-1));
    var randomMove = remainingNumbers[randomNumber];
    var num = randomMove.toString();
    botMoves.push(num);
    var boxString = "box";
    var boxNum = boxString.concat(num);
    var box = document.getElementById(boxNum);
    var spanString = "span";
    var spanNum = spanString.concat(num);
    var span = document.getElementById(spanNum);
    box.style.backgroundColor = "orange";
    span.innerHTML = "O";
    box.setAttribute("onclick","");
    for(x of possibleWins){
        if(containsAll(x,botMoves)){
            alert("loser. u stupid fack.");
            restart.style.display = "block";
            finish();
        }
    }
    var value = remainingNumbers.indexOf(num);
    remainingNumbers.splice(value,1);
    console.log(remainingNumbers);
}

function containsAll(needles, haystack){ 
  for(var i = 0; i < needles.length; i++){
     if($.inArray(needles[i], haystack) == -1) return false;
  }
  return true;
}

function finish(){
    for(x of remainingNumbers){
        var boxString = "box";
        var boxNum = boxString.concat(x);
        var box = document.getElementById(boxNum);
        box.setAttribute("onclick","");
    }
}