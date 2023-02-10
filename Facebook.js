function validate(){
    var username = document.getElementById("username").value
    if(username === "" || username === null){
        document.getElementById('errMessage').innerText="The email address or mobile number you entered isn't connected to an account. Find your account and log in."
        // document.getElementById("label").style.color="red"
        document.getElementById("username").style.borderColor="red"
        document.getElementById('errMessage').style.color="red"
    }
    event.preventDefault()
}