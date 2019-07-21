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
        event.preventDefault();

    });
});

// jQuery on about icons
$(document).ready(function(){
    $("#work1").hover(function(){
        $("#name1").show();
    }).mouseleave(function(){
        $("#name1").hide();
    });
});

$(document).ready(function(){
    $("#work2").hover(function(){
        $("#name2").show();
    }).mouseleave(function(){
        $("#name2").hide();
    });
});

$(document).ready(function(){
    $("#work3").hover(function(){
        $("#name3").show();
    }).mouseleave(function(){
        $("#name3").hide();
    });
});

$(document).ready(function(){
    $("#work4").hover(function(){
        $("#name4").show();
    }).mouseleave(function(){
        $("#name4").hide();
    });
});

$(document).ready(function(){
    $("#work5").hover(function(){
        $("#name5").show();
    }).mouseleave(function(){
        $("#name5").hide();
    });
});

$(document).ready(function(){
    $("#work6").hover(function(){
        $("#name6").show();
    }).mouseleave(function(){
        $("#name6").hide();
    });
});

$(document).ready(function(){
    $("#work7").hover(function(){
        $("#name7").show();
    }).mouseleave(function(){
        $("#name7").hide();
    });
});

$(document).ready(function(){
    $("#work8").hover(function(){
        $("#name8").show();
    }).mouseleave(function(){
        $("#name8").hide();
    });
});

// jQuery on mouse icon
$(document).ready(function(){
    $("#mouse").click(function(){
    $("#mose").toggle();
    });
});



