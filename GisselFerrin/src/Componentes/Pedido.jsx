

function Pedido(props){
    const{children}=props
    return(
        <div>
            <h1>Tu pedido es</h1>
            <p> {children} </p>
            <button onClick={props.onDelete}> Eliminar pedido</button>
        </div>
    )
}
export default Pedido