if (screen.width >= 699) {
    mybutton = document.querySelector(".gotop");

    window.onscroll = function (e) {  
        if(window.scrollY > 100){
            mybutton.style.opacity = 1;

            //
            let count = document.querySelectorAll(".h2b")
            for(i=0;i<count.length;i++){
                count[i].classList += " count";
            }
        }else{
            mybutton.style.opacity = 0;
        }
    } 
}
