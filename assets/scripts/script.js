
import {users} from "./users.js"

// const p = new Promise((res, rej)=>{
    
//   let x =  Number(prompt("eded daxil et"))
// if(isNaN(x)){
//     rej()
// }else{
//     res(x)
// }


    
// }) 

// p.then(value => value**2)
// .then(value =>console.log(value))
// .catch(()=>{console.log("error")})


users().then((value) => {
    console.log(value);
    value.forEach(el => {
    
        const userHtml = ` <div class="user" id = "${el.id}">
            
    <div class="name">
        <span class="first-name">${el.name.firstname}</span>
        <span class="last-name">${el.name.lastname}</span>
    </div>
    <h3 class="email">Email: <span>${el.email}</span></h3>
    <h3 class="zipcode">Phone: <span>${el.phone}</span></h3>
    <h3 class="street">Street: <span>${el.address.street}</span></h3>
    <h3 class="user-name">UserName: <span>${el.username}</span></h3>
    <div class="delete">X</div>
    </div>`
    document.querySelector(".users").innerHTML += userHtml
    })
})

const usersHtml = document.querySelector(".users")
// const del = document.querySelector(".delete");

usersHtml.onclick = (e) =>{

    if(e.target.getAttribute("class") == "delete"){

        console.log(e.target.parentNode.remove())
    }


}
  






