import './botao.css';

const Botao = (props) => {
    return(
      
        <div className='div_button'>
        <button className='Btn btn_guarda'>{props.texto}</button>
        <button className='Btn btn_limpar '>Limpar</button>
       </div>  
    )
}
export default Botao