// const { response } = require("express");

 async function signup(event){
    event.preventDefault();
    // console.log("event is ",event)
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phoneNo = event.target.pn.value;
    const password = event.target.psw.value;

    myobj = {
      name,
      email,
      phoneNo,
      password
    }

    console.log(name)

    const response = await axios.post('http://localhost:3000/user/signup', myobj)
    
     console.log(response)

     if(response.status === 200){
      window.location.href = 'login.html'
     }



     
}
