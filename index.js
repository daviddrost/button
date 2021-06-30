console.log("working")

function message(){
    alert("ninja was liked");
}

function login(loginBut){
    console.log("hello")
    if(loginBut.innerText == "login"){
        loginBut.innerText = "logout";
    } else{
        loginBut.innerText = "login"
    }
    

}


function hide(button){
    button.remove();
}

