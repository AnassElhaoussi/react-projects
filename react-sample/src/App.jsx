
import React, { useState } from 'react'; 
import Tweets from './Tweets'


function App(){
  
  const [userInfos, setUserInfos] = useState([
    {name: "Anass", message: "Hellosae c there"},     
    {name: "Josh", message: "Plean you help me"},
    {name: "John", message: "Wassup"}
    
  ])

  
  return (
  <div className='app'>
      {userInfos.map(userInfo => (
        <Tweets name={userInfo.name} message={userInfo.message}/>
        ))}
    </div>
  )

  
}


export default App;
