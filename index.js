const formData = document.querySelector(".form");
const btn = document.querySelector(".button");
const errField = document.querySelectorAll(".empty-field");
const errMessage = document.querySelectorAll(".error-message");
const showPassword = document.querySelector(".btn");
let first,last,email,paswd;
let fflag=false,lflag=false,eflag=false,pflag=false;
let fnTarget, lnTarget, eTarget, pTarget;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let field of errField){
    field.classList.add("d-block")
}
for(let message of errMessage){
    message.classList.add("d-block")
}


formData.addEventListener("keyup",(e)=>{
      e.preventDefault();
     let val = e.target.dataset.key;
     switch(val){
        case "first":
            first = e.target.value;
            fnTarget = e.target;
            break;
        case "last":
            last = e.target.value;
            lnTarget = e.target;
            break;
        case "email" :
            email = e.target.value;
            eTarget = e.target;
            break;
        case "passwd" :
            paswd = e.target.value;
            pTarget = e.target;
            break;
        default:
            first=last=email=paswd="";
            break;
     }
});

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(first){
        console.log(first)
        errField[0].classList.add("d-block")
       if(!nameRegex.test(first)){
        errMessage[0].classList.remove("d-block");
       }
       else{
        errMessage[0].classList.add("d-block");
        fflag=true;
       }
    }
    else{
        errField[0].classList.remove("d-block")
    }
    if(last){
        errField[1].classList.add("d-block")
       if(!nameRegex.test(last)){
        errMessage[1].classList.remove("d-block");
       }
       else{
        errMessage[1].classList.add("d-block");
        lflag=true;
       }
    }
    else{
        errField[1].classList.remove("d-block")
    }
    if(email){
        errField[2].classList.add("d-block")
       if(!emailRegex.test(email)){
        errMessage[2].classList.remove("d-block");
       }
       else{
        errMessage[2].classList.add("d-block");
        eflag=true;
       }
    }
    else{
        errField[2].classList.remove("d-block")
    }
    if(paswd){
        errField[3].classList.add("d-block")
       if(!pwdRegex.test(paswd)){
        errMessage[3].classList.remove("d-block");
       }
       else{
        errMessage[3].classList.add("d-block");
        pflag=true;
       }
    }
    else{
        errField[3].classList.remove("d-block")
    }
    if(fflag&&lflag&&eflag&&pflag){
        fnTarget.value = lnTarget.value = eTarget.value = pTarget.value = "";
        window.location.href = "success.html"
    }
});

showPassword.addEventListener("click",(e)=>{
    e.preventDefault();
    if(document.querySelector("#passwd").getAttribute("type")=="password"){
        document.querySelector("#passwd").setAttribute("type","text");
        document.querySelector(".eye").innerHTML = "visibility_off"
    }
    else {
        document.querySelector("#passwd").setAttribute("type","password");
        document.querySelector(".eye").innerHTML = "visibility"
    }
})
