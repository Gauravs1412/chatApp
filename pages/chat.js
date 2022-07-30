// const { response } = require("express")


window.addEventListener('load',users =>{

    axios.get('http://localhost:3000/user/users')
      .then(response => {

        // const users = res.data.users
        // console.log(res)

        // for(let i=0; i<users.length; i++){
        //     console.log(users[i].name)

            
        // }
        // console.log(res)
        if(response.status == 200){
            response.data.users.forEach(e => {
                showUsers(e)
                
            });
        }else {
            throw new Error();
        }


      })
      .catch(err => {
        console.log(err)
      })
    
})

function showUsers(data){
    const parentNode = document.getElementById('chat');

    parentNode.innerHTML += `

      <li>
      ${data.name}
      </li>
      `
      
     

}


async function sendMsg(event){
    event.preventDefault();
    const msg = event.target.msg.value

    const obj = {msg}

    const token = localStorage.getItem('token')


    const response = await axios.post('http://localhost:3000/user/message',obj,{headers:{"Authorization":token}})
    console.log(response)

     

    // console.log(msg)
    
}


