import { useState } from 'react'
import Botao from '../botao'
import Listacard from '../listacard'
import './formulario.css'
import CampoTexto from '../campotexto'

const Formulario = (props) => {


   //função para vincular 
   const aoSalvar = (evento) => {
      evento.preventDefault()
      props.novosVideos({
         titulo,
         Categoria,
         imagem,
         video,
         descricao
      })
   }

   //ao digitar
   const [titulo, setTitulo] = useState('')
   const [Categoria, setCategoria] = useState('')
   const [imagem, setImagem] = useState('')
   const [video, setVideo] = useState('')
   const [descricao, setDescricao] = useState('')

   return (
      <section className='campo_texto'>
         <form onSubmit={aoSalvar}>
            <h1>Novo Video</h1>
            <p>
               Complete o formulario para criar um novo video
            </p>

            <div className='div div_titulo'>
               <CampoTexto
                  obrigatorio={true}
                  label="Titulo"
                  placeholder=" Digete seu titulo "
                  value={titulo}
                  aoAlterar={valor => setTitulo(valor)}
                  type="text" />
            </div>

            <div className='div div_select'>
               <Listacard
                  obrigatorio={true}
                  label="Categoria"
                  itens={props.categorias}
                  value={Categoria}
                  aoAlterar={setCategoria} />
            </div>

            <div className='div div_imagem'>
               <CampoTexto
                  obrigatorio={true}
                  label="imagem"
                  placeholder=" https://sua imagem.com "
                  value={imagem}
                  aoAlterar={valor => setImagem(valor)}
                  type="url" />
            </div>

            <div className='div div_video'>
               <CampoTexto
                  obrigatorio={true}
                  label="video"
                  placeholder="
                   https://seu Video.com "
                  value={video}
                  aoAlterar={valor => setVideo(valor)}
                  type="url" />
            </div>

            <div className='div div_descricao'>
               <CampoTexto
                  obrigatorio={true}
                  label="Descrição"
                  placeholder=" descreva seu video"
                  value={descricao}
                  aoAlterar={valor => setDescricao(valor)}
                  type="text" />
            </div>

            <Botao texto="Criar video" />
         </form>
      </section>
   )
}

export default Formulario