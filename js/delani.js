$(document).ready(function(){
    $("#toggle1").click(function(){
       $("#toggle1").hide(); 
        $("#hide1").show();
});
});
$(document).ready(function(){
    $("#hide1").click(function(){
        $("#toggle1").show();
       $("#hide1").hide(); 
});
});

$(document).ready(function(){
    $("#toggle2").click(function(){
       $("#toggle2").hide(); 
        $("#hide2").show();
});
});

$(document).ready(function(){
    $("#hide2").click(function(){
       $("#toggle2").show(); 
        $("#hide2").hide();
});
});

$(document).ready(function(){
    $("#toggle3").click(function(){
       $("#toggle3").hide(); 
        $("#hide3").show();
});
});

$(document).ready(function(){
    $("#hide3").click(function(){
       $("#toggle3").show(); 
        $("#hide3").hide();
});
});

$(document).ready(function(){
    $("form#form").submit(function(event){
        var name =$("input#name").val();
        var email =$("input#email").val();
        if ($("input#name").val() && $("input#email").val && $("input#message").val !=""){
        alert ("**Dear " + name+ "** " + email + ". "+ " " + "**We have received your message. "+" Thank you for reaching out" );
        }else{
            alert("Please enter correct data.")
        }

    })
})




