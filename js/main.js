
var accounts = [];
var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
var userNameHome ; 



if(localStorage.getItem("accounts")!= null){
    accounts=JSON.parse(localStorage.getItem("accounts"))
}


//signup functions 
function signUp (){
    var avilable = true;
    var name = document.getElementById('signUpUserName').value
    var email = document.getElementById('signUpEmail').value
    var password = document.getElementById('signUpPassword').value
    var userData ={
        userName:name,
        userEmail:email,
        userPassword:password,
    }
    if(document.getElementById('signUpUserName').value==""||document.getElementById('signUpPassword').value==""){
        swal({
            title: "Error",
            text: "Please enter your username and password",
            icon: "error",
            button: "okaay",
            });
    } 
    else{
        if(emailRegex.test(email)==true){
            if(accounts.length != 0){
                for(var i = 0 ; i < accounts.length ; i++){
                    if(userData.userEmail == accounts[i].userEmail)
                    avilable = false ;
                }
                if(avilable == true){
                    accounts.push(userData)
                    storageSave()
                    swal({
                        title: "Good job! You Can login now",
                        text: "You clicked the button!",
                        icon: "success",
                        button: "Okay!!",
                        });
                }
                else{
                    swal({
                        title: "Error",
                        text: "Your email is already taken",
                        icon: "error",
                        button: "try again",
                        });
                }
                }
            else{
                accounts.push(userData)
                storageSave()
                swal({
                    title: "Good job! You Can login now",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Okay!!",
                    });
            }
        }
        else{
            swal({
                title: "Error",
                text: "Your email is unvalid",
                icon: "error",
                button: "try again",
                });
        }
    }
    
    signUpCleanInput()
}

function signUpCleanInput(){
    document.getElementById('signUpUserName').value="";
    document.getElementById('signUpEmail').value="";
    document.getElementById('signUpPassword').value="";
}
function storageSave(){
    localStorage.setItem("accounts",JSON.stringify(accounts))
}


//login

function logIn(){
    var loginBool = false
    var logEmail = document.getElementById('loginUserName').value
    var logPassword = document.getElementById('loginPassword').value

    if(accounts.length!=0){
        for (i= 0 ; i < accounts.length ; i ++ ){
            if(logEmail==accounts[i].userEmail && logPassword==accounts[i].userPassword){
                loginBool = true ;
                userNameHome = accounts[i].userName ;
            }
        }
        if(loginBool == true){
            
            location.replace('Home.html')
            
            
        }
        else{
            swal({
                title: "Login Failed",
                text: "The email or password is incorrect",
                icon: "error",
                button: "try again",
                });
        }
        }
    else{
        swal({
            title: "Login Failed",
            text: "The email or password is incorrect",
            icon: "error",
            button: "try again",
            });
    }
}






function logout (){
    location.replace('index.html')
}


