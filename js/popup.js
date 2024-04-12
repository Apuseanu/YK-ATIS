window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".bk").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".bk").style.display = "none";
});