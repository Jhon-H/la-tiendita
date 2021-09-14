import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./StyledCard";
import Button from "@material-ui/core/Button";
//Modal
import { Modal } from "@material-ui/core";

const Cards = ({ list }) => {
  const { nombre, precio_kilo, photo, id, descripcion } = list;
  const classes = useStyles();

  //Modal
  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);
  };

  const body = (
    <div className={classes.modal}>
      <div className={classes.divCont}>
        <div>
          <img
            className={classes.imgCon}
            src={photo}
            alt={nombre}
            width="200px"
            height="200px"
          />
        </div>
        <div className={classes.divDesc}>
          <h2>{list.nombre}</h2>
          <h3>{precio_kilo}</h3>
          <p>Precios con iva incluidos</p>
          <p>{descripcion}</p>
          <Button variant="contained" color="primary">
            Comprar
          </Button>
        </div>
      </div>
      <div onClick={abrirCerrarModal} className={classes.btnClose}>
        X
      </div>
    </div>
  );

  //Fin del modal

  return (
    <>
      <Card
        id="1"
        className={classes.root}
        onClick={(e) => {
          abrirCerrarModal();
        }}
      >
        <CardMedia
          id={id}
          className={classes.media}
          image={photo}
          title={nombre}
        />
        <CardContent className={classes.contenedor}>
          <Typography className={classes.precio}>
            Precio: ${precio_kilo}/Kg
          </Typography>
        </CardContent>
        <CardContent className={classes.contenedor}>
          <Button className={classes.button}>Agregar</Button>
        </CardContent>
      </Card>

      {/* Modal */}
      <Modal open={modal}>{body}</Modal>
    </>
  );
};

export default Cards;
