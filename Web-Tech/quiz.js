$(document).ready(function(){
    $("#submit").click(function(){
        var score = 0;
        var answers = ["b", "c", "c", "b", "b"];
        for (var i = 1; i <= 5; i++) {
            var selectedOption = $("input[name=q" + i + "]:checked").val();
            if (selectedOption === answers[i - 1]) {
                score++;
            }
        }
        $("#result").text("Your score is: " + score + "/5");
    });
});
