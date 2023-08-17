

function Consulta(props){
    const{children}=props
    return(
        <div>
            <h1>Tu Consulta es</h1>
            <p> {children} </p>
            <button onClick={props.onDelete}> Eliminar consulta</button>
        </div>
    )
}
export default Consulta