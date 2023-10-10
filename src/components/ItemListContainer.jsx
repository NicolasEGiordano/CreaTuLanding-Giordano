import React from "react"


const ItemListContainer = (props) => {
    return(
        <div className="item-list-container">
            <h1>Bienvenido a la tienda</h1>
            <p>{props.message}</p>
        </div>
    );
};

export default ItemListContainer;