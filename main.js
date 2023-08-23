document.addEventListener("DOMContentLoaded", function () {

const loginButton = document.getElementById("login");


let users = {
 username : "qamar_sharef",
 password : "qamar12345"
};


loginButton.addEventListener("click", (event) => {

event.preventDefault();

const userNameInput = document.getElementById("username");
const PasswordInput = document.getElementById("password");
const container = document.querySelector(".container");

const userName = userNameInput.value.trim();
const Password = PasswordInput.value.trim();

function (username, password){

    let authenticatePromise = new Promise((resolve, reject) => {

        setTimeout(() => {

        if (username === users.username &&  password === users.password){

        resolve("Authentication successful, Welcome " + userName);

        }
        else {

        reject("Authentication failed, Incorrect userName or Password");

        }
        
    }, 1000);

});

 return authenticatePromise;

}

authenticateUser(userName, Password).then((AuthenticationSuccess) => {

    const newWindow = window.open(); 
    newWindow.document.write(AuthenticationSuccess);          

}).catch((AuthenticationFailed) => {

    const containerItem = document.createElement("label");
    containerItem.textContent = AuthenticationFailed;

    container.appendChild(containerItem);

});


});
});