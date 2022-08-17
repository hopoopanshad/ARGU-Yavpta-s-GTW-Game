P1Name = localStorage.getItem("p1p1p.key")
P22Name = localStorage.getItem("p2p2p.key")
P1S = 0
P2S = 0
document.getElementById("p1name").innerHTML = P1Name + ":"
document.getElementById("p2name").innerHTML = P22Name + ":"
document.getElementById("p1scope").innerHTML = P1S
document.getElementById("p2scope").innerHTML = P2S
document.getElementById("plque").innerHTML = "Question Turn:" + P1Name
document.getElementById("plans").innerHTML = "Answer Turn:" + P22Name

function sendword() {
    word = document.getElementById("word").value
    if(word.length>=5){

    
    LCW = word.toLowerCase()
    console.log(LCW)
    C1 = LCW.charAt(1)
    P2 = Math.floor(LCW.length / 2)
    C2 = LCW.charAt(P2)
    C3 = LCW.charAt(LCW.length - 1)
    U1 = LCW.replace(C1, "_")
    U2 = U1.replace(C2, "_")
    U3 = U2.replace(C3, "_")
    console.log(U3)
    question_word = "<h4 id='word_display'> Q. " +U3+ "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
else{
    alert("enter the word with minimum 5 letters;NOW!")
}
} 

QT="P1"
AT="p02"
function check(){
    GA=document.getElementById("input_check_box").value
    ans=GA.toLowerCase()
    console.log(ans)
    if(ans==word)
    {
        if(AT=="P1"){
            P1S=P1S+1
            document.getElementById("p1scope").innerHTML = P1S
        }
        else{
            P2S=P2S+1
            document.getElementById("p2scope").innerHTML = P2S
        }
    }
    if(QT=="P1"){
        QT="p02"
        document.getElementById("plque").innerHTML = "Question Turn:" + P22Name
    }
    else{
        QT="P1"
        document.getElementById("plque").innerHTML = "Question Turn:" + P1Name
    }
    if(AT=="P1"){
        AT="p02"
        document.getElementById("plans").innerHTML = "Answer Turn:" + P22Name
    }
    else{
        AT="P1"
        document.getElementById("plans").innerHTML = "Answer Turn:" + P1Name
    }
    document.getElementById("output").innerHTML=""
}