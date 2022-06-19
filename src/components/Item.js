import React, { useState } from "react";
import "./Styles-modules/Item.modules.css";
import style from"./Styles-modules/Boton.module.css";

export default function Item({ producto, setCantidad }) {
  const [stock, setStock] = useState([producto.stock]);

  const seleccionarStock = () => {
    if (stock > 0) {
      setStock((prevState) => prevState - 1);
      setCantidad((prevState) => prevState + 1);
    }
  };
  
  return (
    <div className="producto">
      <React.Fragment>
      <h3 className="nombreDelProducto">{producto.producto.nombre}</h3>
      <p className="DescripcionDelProducto">{producto.producto.descripcion}</p>
      <h5 className="mensajeStock">En stock:{" "} {stock === 0 ? <span className="agotado">Agotado</span> : stock}{" "}</h5>
      <img className="imagenStock"src={producto.producto.img} alt= {producto.producto.nombre}></img>
      <button className={stock > 0 ? style.boton : style.desactivado} onClick={() => seleccionarStock()}>{stock > 0 ? "Comprar" : "Sin stock"}</button>
      </React.Fragment>
      
    </div>
  );
}
