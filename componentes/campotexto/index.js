import { useState } from 'react'
import './campotexto.css'

const CampoTexto = (props) =>{
    
    //evento onchage    
   const aoDigitar = (evento) => {
    props.aoAlterar(evento.target.value)
   }


     return(
<div className="div campo_texto">
    <label>{props.label}</label>
    <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
</div>
    )
}

export default CampoTexto