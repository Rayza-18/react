
import Header from "./componentes/header/";
import Footer from './componentes/footer/';
import './midiaquery.css'
import Formulario from "./componentes/formulario";
import { useState } from "react";
import Categorias from "./componentes/categorias";

import VideosCard from "./componentes/cardVideos";

function App() {

const categorias = [
  {
    titulo:'Front-end',
    cor:'#6BD1FF'
  },
  {
    titulo:'Back-end',
    cor:'#00C86F'
  },
  {
    titulo:'Mobile',
    cor:'#FFBA05'
  }
]

const [videos, setVideos] = useState ([])

const novosVideosAdicionados = (video) => {
console.log(video)
setVideos([...videos, video])
}
  return (
    <div className="App">
        <Header/>
        {categorias.map(categoria => <Categorias 
        key={categoria.titulo}
         titulo={categoria.titulo}
          cor={categoria.cor}
          videos={videos}/>)}
         
      <Footer/>
          </div>
  );
}

export default App;
