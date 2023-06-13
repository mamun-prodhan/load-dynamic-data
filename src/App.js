import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, loadUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => loadUsers(data))
  },[])

  console.log(users);
  return (
    <div className="App">
      {
        users.map(user => <LoadUsers key={user.id} name={user.name} email = {user.email}></LoadUsers>)
      }
    </div>
  );
}

function LoadUsers(props){
  return(
    <div className='userCard'>
      <h2>Name of Users: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;
