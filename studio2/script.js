 
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});
       

        var libIt = function() {
            var place = document.getElementById("place").value;
            var pnoun = document.getElementById("pnoun").value;
            var pnoun2 = document.getElementById("pnoun2").value;
            var pnoun3 = document.getElementById("pnoun3").value;
            var question = document.getElementById("question").value;
            var noun = document.getElementById("noun").value;
            var name = document.getElementById("name").value;
            var cadj = document.getElementById("cadj").value;
            var cadj2 = document.getElementById("cadj2").value;
            var cadj3 = document.getElementById("cadj3").value;
            var verb = document.getElementById("verb").value;
            var storyDiv = document.getElementById("story");
            storyDiv.innerHTML = "<br>It's great to be in " +place+ ". We love " +place+ ". We love " +place+ " and also, you know what're gonna do? We are going to make " +pnoun+ " great again. I tell you, I love it in " +place+ " but we don't win anymore. We don't win in " +pnoun+ " , we don't win in " +pnoun2+ " and we never ever ever EVER win in " +pnoun3+ ".<br><br> We're losing everywhere now. You look at what's going on, and you have to say, look " +question+ " By the way, I love " +pnoun3+ ". Boy do I love " +pnoun3+ ". Look, you know what else? We are going to do it. I keep saying, we are going to build a " +noun+ ". We're going to build a " +noun+ ". It's going to happen. One Hundred Percent. And we are going to have " +name+ " pay for it. <br><br> We're going to do these things, and the other thing we're going to do is we're going to rebuild our " +pnoun2+ ". It's going to be " +cadj+ " and " +cadj2+ " and " +cadj3+ " than ever. And we're going to take care of our " +pnoun+ ". We don't take care of our " +pnoun+ " and they're in terrible shape and it's ridiculous. <br><br> So we're going to do it people, we are going to do it and we are going to shock everybody. We're going to go out there and we're going to " +verb+ ", " +verb+ ", " +verb+ ", and we are going to make " +place+ " great again! Thank you!" ;
        }
        var libButton = document.getElementById('lib-button');
        libButton.addEventListener('click', libIt);
    