//const element = document.createElement('h1')
//element.innerText = 'Hello React'
//const container = document.getElementById('root')
//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName: 'Dev',
    lastName: 'Jn',
    avatar: 'https://image.flaticon.com/icons/png/512/145/145867.png'
}

//Funcion de PF
const getName = (user) =>
{
    return `${user.firstName} ${user.lastName}`
}

const getGreeting = (user) =>
{
    if(user)
    {
        return <h1>Hello {getName(user)}</h1>
    }
    return <h1>Hello Stranger</h1>
}

//Funcion normal
//function getName(user)
//{
//    return `${user.firstName} ${user.lastName}`
//}
//function getGreeting(user)
//{
//    if(user)
//    {
//        return <h1>Hello {getName(user)}</h1>
//    }
//    return <h1>Hello Stranger</h1>
//}

const name = 'Angelo'

//Los elementos pueden contener hijos -> se deben abrir parentesis
const element = (
    <dv>
        <div>
            <h1>{getGreeting(user)}</h1>
            <img src={user.avatar} width='100'/>
        </div>
    </dv>
)

//const element = <img src={user.avatar} width='100'/>
const container = document.getElementById('root')

//ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(element, container)