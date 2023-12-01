var btn1 = document.querySelectorAll("button")[0];
var btn2 = document.querySelectorAll("button")[1];
var errorText = document.querySelectorAll(".error")[0];
var input = document.querySelectorAll("input")[0];
var success = document.querySelectorAll(".success")[0];
var main = document.querySelectorAll(".main")[0];

btn1.addEventListener("click", function(){
    var value = input.value;
    if (value.includes("@") && value.includes(".com")){
        success.style.display = "grid";
        main.style.display = "none";
    }else{
        errorText.style.display = "unset";
        input.classList.add("clicked");
    }
});
btn2.addEventListener("click", function(){
    main.style.display = "grid";
    success.style.display = "none";
});