// const { response } = require("express")

const token = localStorage.getItem('token')
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
        showMessage(response.data.name,msg)


     

    // console.log(msg)
    
}

function showMessage(name,msg){

    const parentNode = document.getElementById('msg');

    parentNode.innerHTML += `
      
       <li>

       ${name}:${msg}

       </li>
    
    `
}

window.addEventListener('load',users =>{

  axios.get('http://localhost:3000/user/getmessage',{headers:{"Authorization":token}})
    .then(response => {

      console.log(response)

    
      if(response.status == 200){
          response.data.msg.forEach(e => {
              showMessage(response.data.name,e.message)
              
          });
      }else {
          throw new Error();
      }


    })
    .catch(err => {
      console.log(err)
    })
  
})




