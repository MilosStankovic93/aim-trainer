let timeout1 = false;
let timeout2 = false;
let rezultat = 0;




$(".tacka").click(()=>{
    rezultat += parseInt(100);
    $("#score").text(rezultat);
    clearInterval(timeout1);
    clearInterval(timeout2);
    $(".tacka").hide();
    postaviTacku();

});

function postaviTacku(){
    let mestoX = Math.floor(Math.random()*(800-17))
    let mestoY = Math.floor(Math.random()*(800-17))
        $(".tacka").animate({
            top: mestoX + "px",
            left: mestoY + "px"
        }, 1);
        $(".tacka").fadeIn(300);

        timeout1 = setTimeout(()=>{
            
            $(".tacka").hide();
            if(rezultat >= 100){
            rezultat += parseInt(-100);
            $("#score").text(rezultat);
            }
            timeout2 = setTimeout(()=>{
                postaviTacku()
            }, 1500);
        }, 1500);
};

postaviTacku();

		

