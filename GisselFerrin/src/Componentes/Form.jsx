import { useState } from "react"
import "./Form.css";


function Form(props){
    console.log(props)
    const [consulta, setConsulta] = useState('')
    const [mensaje, setMensaje]= useState('')
    function validar(event) { 
        event.preventDefault()
        if(consulta.length>=3 && !consulta.startsWith('')){
            props.consultita(consulta)
            setMensaje('')
        }else{
            setMensaje('Por favor chequea que la información sea correcta')
        }
        // eslint-disable-next-line no-undef
        if(descripcion.length >=6 && !descripcion.startsWith('')){
            // eslint-disable-next-line no-undef
            props.desc(descripcion)
            setMensaje('')
        }else{
            setMensaje('Por favor chequea que la información sea correcta')
        }
    }

    
    return(
        <form 
        onSubmit={validar}
        className="form">
            <div className="container_input_form">
            <label htmlFor="consulta">Consulta</label>
        
        <input type="text" 
            id="consulta"
            value={consulta}
            onChange={(e)=> setConsulta(e.target.value)}
        />
        </div>
        <div>Algo salió mal</div>
        {mensaje ? 
        <p>{mensaje}</p>: null}
        <button type="submit" className="btn_save">
            Enviar
            </button>
            function Form(prop) {
                
            }
            const [descripcion, setDescripcion] = useState()
            <div className="container_input_form2">
            <label htmlFor="descripcion">Descripcion</label>
        
        <input type="text" 
            id="descripcion"
            // eslint-disable-next-line no-undef
            value={descripcion}
            // eslint-disable-next-line no-undef
            onChange={(e)=> setDescripcion(e.target.value)}
        />
        </div>
        
        </form>
    );

}
export default Form