
var spinX = -25, spinY = 20;
var spinX = 0, spinY = 0;


$(document).keydown(function(evt) {
switch(evt.keyCode)
    {    
        case 37: // left
            spinY -= 1;
            spinStage(spinX,spinY);
            break;
        
        case 38: // up
            evt.preventDefault();
            spinX += 1;
            spinStage(spinX,spinY);               
            break;
        
        case 39: // right
            spinY += 1;
            spinStage(spinX,spinY);
            break;
            
        case 40: // down
            evt.preventDefault();
            spinX -= 1;
            spinStage(spinX,spinY);
            break;
            
        case 27: //esc
            break;
            
        default:
            break;
    };

});


function spinStage(X,Y){
    $("#cube").css("transform", "rotateX("+ X +"deg) rotateY("+ Y +"deg) ");
}

$(".cn-img").click(function(){
  $(this).toggleClass("act-el");
});

var zn_text = $("h2").text();
zn_text = zn_text.split(" ");
for(var m=0; m < zn_text.length; m++){
  zn_text[m] = "<span>" + zn_text[m] + "</span>";
}

zn_text = zn_text.join(" ");
$("h2").html(zn_text);

//---------------


var ms_img_src = [0];

$(".wr_img_sl img").each(function(){
    ms_img_src[ms_img_src.length] = $(this).attr("src");
});


for(var k = 1; k < ms_img_src.length; k++){
    var deg_ret = 360 / ms_img_src.length;
    deg_ret = deg_ret * k;
    //$("#cube").append('<div class="fig-'+k+' cn-img" style="background: url('+ms_img_src[k]+') no-repeat; -webkit-transform: rotateX(0deg) rotateY('+deg_ret+'deg) translateX(30px) translateY(0px) translateZ(0px);"><span>'+ k +'</span></div>');
    $("#cube").append('<div class="fig-'+k+' cn-img" style="background: url('+ms_img_src[k]+') no-repeat; -webkit-transform: rotateX(0deg) rotateY(0deg) translateX(150px) translateY(0px) translateZ(0px);"><a href="'+ms_img_src[k]+'" rel="group" class="fancybox"><span></span></div>');
}


setTimeout("startSl()", 2500);

$(".fancybox").fancybox();


//===========================================

function startSl(){
    var cc = 0;
    var deg_ret = 360 / (ms_img_src.length - 1);

    $("#cube .cn-img").each(function(){
        var deg_ret_item = deg_ret * cc;
        $(this).css("-webkit-transform", "rotateX(0deg) rotateY("+deg_ret_item+"deg) translateX(150px) translateY(0px) translateZ(0px)");
        cc++;
    }); 

    $("#cube") .addClass("active");
}
