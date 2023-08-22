let userName = "qamar Sharef";
let Password = "qamar12345";

function authenticateUser(username, password){

    let authenticatePromise = new Promise((resolve, reject) => {

        setTimeout(() => {

        if (username === userName && password === Password){

        resolve("Authentication successful");

        }
        else {

        reject("Authentication failed");

        }
        
    })

    
 } , 1000);

 return authenticatePromise;

}

authenticateUser("qamar Sharef", "qamar12345").then((AuthenticationSuccess) => {

 console.log(AuthenticationSuccess + " " + "welcome: " + "qamar");

})
.catch((AuthenticationFailed) => {

 console.log(AuthenticationFailed + " with " + "qamar" + " inCorrect userName or password");

});

authenticateUser("raghad safi", "raghad12345").then((AuthenticationSuccess1) => {

 console.log(AuthenticationSuccess1 + " " + "welcome: " + "raghad");

})
.catch((AuthenticationFailed1) => {

 console.log(AuthenticationFailed1 + " with " + "raghad" + " inCorrect userName or password");

});
