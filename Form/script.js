let username= document.getElementById('name')
let password=document.getElementById("Password")

function validateForm(){
    if (username.value == "")
    {
        console.log("username empty")
    }
   return false;
}