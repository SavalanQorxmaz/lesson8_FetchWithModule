export const users = ()=>{
    return new Promise((res,rej)=>{

        const userList = fetch(`https://fakestoreapi.com/users`)
        .then(value => value.json())

        res(userList)

    })

}




    







