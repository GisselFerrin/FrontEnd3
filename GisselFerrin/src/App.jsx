
import { useState } from 'react'
import './App.css'
import Form from './Componentes/Form'
import Pedido from "./Componentes/Pedido";

function App() {
  const [unPedido, setUnPedido] = useState();
  
  function handleSubmit(pedido){
    
    setUnPedido(pedido)
  }
  function handleDelete(){
    setUnPedido()
  }
  

  return (
    <>
  <Form pedidito={handleSubmit}/>
    
    {unPedido ? <Pedido onDelete={handleDelete}> 
      {unPedido}
    </Pedido>: undefined
    } 
    
  </>
  );
}
export default App
