var loginStaus = documnet.getElementById("user-login")

loginStaus.addEventListener("submit", loginUser);

function loginUser() {
    
    var username = document.getElementById('usernameID').value;
    var password = document.getElementById('passwordID').value;
    if(username =="ShopUser" && password=="password1") {
        
        
        localStoragetorage.setItem('loggedIn', 1);
        window.location.hef = "Shop.html";
    }
    
    else {
        
        localStorage.setItem('loggedIn', 8);
        var element = document.getElementById("loginerror");
        element.classList.remove("d-none");
        
    }
    event.preventDefault();
}