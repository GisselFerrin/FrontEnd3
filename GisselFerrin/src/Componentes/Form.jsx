import { useState } from "react"
import "./Form.css";


function Form(props){
    console.log(props)
    const [pedido, setPedido] = useState('')
    const [mensaje, setMensaje]= useState('')
    function validar(event) { 
        event.preventDefault()
        if(pedido.trim() !== ''){
            props.pedidito(pedido)
            setMensaje('')
        }else{
            console.log("Todo mal")
            setMensaje('Algo salio mal')
        }
    }
    return(
        <form 
        onSubmit={validar}
        className="form">
            <div className="container_input_form">
            <label htmlFor="pedido">Pedido</label>
        
        <input type="text" 
            id="pedido"
            value={pedido}
            onChange={(e)=> setPedido(e.target.value)}
        />
        </div>
        <div>Algo salió mal</div>
        {mensaje ? 
        <p>{mensaje}</p>: null}
        <button type="submit" className="btn_save">
            Enviar
            </button>
        
        </form>
    );

}
export default Form