
import { Link, Outlet } from 'react-router-dom'
import './styles/index.sass'

const App = () => {
    return (
        <div className='app' data-testid='App.testDataId'>
            {/* SHOW FROM  ELEMENT */}
            <Outlet /> 
            
        </div> 
    )
}

export default App
