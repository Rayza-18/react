import Formulario from '../formulario'
import './header.css'

function Header(){
    return(
        <nav>
        <img src=".\img\logoAluraFlix.jpg" className='logoNav' alt=" a logo do projeto" />
        <div className="divNav">
<a href="./src/app" className="linkHome">Home</a>
<a href='./src/formulario' className='buttonNav'> Novo video</a>
        </div>
     </nav>
     )
}

export default Header