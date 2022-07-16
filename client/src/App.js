import React from 'react'
import { Navbar, CardBlock} from './components';
import './App.css'
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
        </div>
        <CardBlock />
    </div>
  )
}

export default App