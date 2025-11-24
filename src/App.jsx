import { useState } from 'react'
import './App.css'
import { Link } from 'react-router'

function App() {


  return (
    <div className='home'>
      <h1>Welcome to Creatorverse</h1>
      <p>Use the navigation links to manage your favorite creators!</p>
      <div className='home-buttons'>
        <Link to="/creators" className='home-link'>
        <button className="home-button">View Creators</button>
        </Link>
        <Link to="/add" className='home-link'>
        <button className="home-button">Add Creator</button>
        </Link>
      </div>
    </div>
  )
}

export default App
