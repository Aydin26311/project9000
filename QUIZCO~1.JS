var player1=localStorage.getItem("player1_name");
var player2=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1+":";
document.getElementById("player2_name").innerHTML=player2+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn="+player1;
document.getElementById("player_answer").innerHTML="answer turn="+player2;
function send(){
    getnumber=document.getElementById("number").value;
    getnumber1=document.getElementById("number1").value;
    finalanswer=parseInt(getnumber)*parseInt(getnumber1);
    questionnumber="<h4>"+getnumber+"x"+getnumber1+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionnumber + input_box + check_button ;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number").value="";
    document.getElementById("number1").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){ 
    answer=document.getElementById("input_check_box").value;
    if(answer==finalanswer){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn-"+player2;

    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="question turn-"+player1;

    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn-"+player2;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="answer turn-"+player1;
    }
    document.getElementById("output").innerHTML="";
}