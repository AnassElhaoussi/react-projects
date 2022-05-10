
import React, { useState } from 'react'; 
import Tweets from './Tweets'


function App(){
  
const [users, setUsers] = useState([
      {name: "Anass", message:"Hello there"},
      {name: "John", message:"Helloo"},
      {name: "Petter", message:"Whatsup"}
])



  return (
    <div className="app">
    <button>Click to show tweets</button>
    {users.map(user => (
      <Tweets name={user.name} message={user.message}/>
    ))}

    </div>
  )
}

export default App;