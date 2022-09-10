import './itemDetail.css'

const ItemDetail =({productos, buttonId}) =>{
    return(productos.map((prod)=>{
    if(prod.id == buttonId){
    return(
        <div className="itemDetail" key={buttonId}>
            <h1>{prod.name}</h1>
            <p>{prod.desciption}</p>
            <p>{prod.precio}</p>
            <img className="ItemDetailimg" src={prod.imagen} alt="" />
        </div>
        )
}
}
))}

export default ItemDetail;