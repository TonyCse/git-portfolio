import './Header.css';
import { Link as RouterLink } from 'react-router-dom'
function Header({logo}) {
    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Portfolio</h1>
        <nav>
            <RouterLink to='/' className='App-Link'>
                About Me
            </RouterLink>
            <RouterLink to='/projects' className='App-link'>
                Projects
            </RouterLink>
        </nav>
      </header>
    )
}

export default Header;