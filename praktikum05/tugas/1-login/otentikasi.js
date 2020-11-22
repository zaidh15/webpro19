function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username== "ahmad2017" && password == "integrity"){
        alert ("Login Succesfully");
        window.location = "login2.html";
    }
    else{
        alert("Invalid Username or Password");
    }
    return false;
}