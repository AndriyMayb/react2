// import User from "./components/userScript/user.Script";
// import {useState} from "react";
//
//
//
// const usersList = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];
//
// function App() {
//     const [users,setUsers] = useState(usersList)
//
//     const deleteUsers = () =>{
//         users.pop()
//         setUsers([...users])
//     }
//
//
//   return (
//     <div>
//         {
//             users.map((value, index) =>
//                 <User key = {index} {...value}/>)
//         }
//
// <button onClick={deleteUsers}>deleteUsers</button>
//     </div>
//  )
// }
//
// export default App;



// import {useState} from "react";
//
// export default function App () {
//     let [counter,setCounter] = useState(0)
//     let increment = () => setCounter(++counter);
//
// return (<div>
//    it is {counter}
//     <button onClick={increment}>increment</button>
//
// </div>)
//
//
// }

//import User from "./components/userScript/user.Script";

import User from "./components/userScript/user.Script";
import {useState} from "react";

const usersList = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
export default function App () {
let [users,setUsers] = useState(usersList)
let deleteUser = () =>{
    users.pop()
    setUsers([...users])
}
let [countre,setCountre] = useState(0)
    let decrement = () =>setCountre(++countre)
    let increment = () =>setCountre(--countre)
    let reset = () => setCountre(0)
return (
    <div>
        <div>
            ITS A - {countre}
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
            <button onClick={reset}>RESET</button>
        </div>
        <div> {
            users.map((value, index) => <User
                kay={index}
                {...value}/>)
        }
            <button onClick={deleteUser}>deleteUser</button>
        </div>
    </div>
)
}