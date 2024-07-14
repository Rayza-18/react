
import VideosCard from '../cardVideos'
import App from '../../App'
import './categoria.css'

const Categorias = (props) => {
    return(
<section className='categoria' >
    <h3 style={{backgroundColor: props.cor}}>{props.titulo}</h3>
    <VideosCard/>
    
{props.videos.map(VideosCard => <VideosCard/> )}
</section>
    )
}

export default Categorias