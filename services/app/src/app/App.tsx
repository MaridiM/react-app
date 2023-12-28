
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from '@packages/shared'
import './styles/index.sass'

const App = () => {
    const [state, setState] = useState(0)
    return (
        <div className='app' data-testid='App.testDataId'>
            <Link to='/about'>About</Link>
            <Button onClick={() => setState(state + 1)}>{state}</Button>
            {/* SHOW FROM  ELEMENT */}
            <Outlet />

            
        </div> 
    )
}

export default App
