
import { useState } from 'react'
import './App.css'
import Form from './Componentes/Form'
import Consulta from './Componentes/Consulta';

function App() {
  const [unaConsulta, setUnaConsulta] = useState();
  
  function handleSubmit(Consulta){
    
    setUnaConsulta(Consulta)
  }
  function handleDelete(){
    setUnaConsulta()
  }
  

  return (
    <>
  <Form consultita={handleSubmit}/>
    
    {unaConsulta? <Consulta onDelete={handleDelete}> 
      {unaConsulta}
    </Consulta>: undefined
    } 
    
  </>
  );
}
export default App
