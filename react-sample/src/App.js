
import React from 'react'; 
import Tweets from './Tweets'


function myApp(){
  return (

    <div className="app">
      <h1 className='title'>Hello there are some tweets :</h1>
      <div className='tweets'>
        <Tweets/>
        <Tweets/>
        <Tweets/>
      </div>

    </div>
  )
}

export default myApp;