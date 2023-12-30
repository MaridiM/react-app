
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './providers'
import { PageLayout } from './ui'

import './styles/index.sass'

const App = () => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <div className={`app ${theme}`} data-theme={theme} data-testid='App.testDataId'>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Link to='/shop'>Shop</Link>

            {/* SHOW FROM  ELEMENT */}
            <PageLayout />
            
        </div> 
    )
}

export default App
