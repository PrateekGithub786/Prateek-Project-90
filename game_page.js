var player1_name = localStorage.getItem("player1");
    var player2_name = localStorage.getItem("player2");
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;