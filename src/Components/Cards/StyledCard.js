import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    marginTop: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    cursor: "pointer",
  },
  contenedor: {
    display: "flex",
    justifyContent: "center",
  },
  precio: {
    fontSize: "1.2em",
    textAlign: "center",
  },
  button: {
    background: "#E9BABC",
    fontSize: "0.7em",
    fontWeight: "bold",
    width: "100%",
    "&:hover": {
      backgroundColor: "#E9BABC",
    },
    modal: {
      position: "absolute",
      width: 600,
      backgroundColor: "white",
      border: "2px solid #000",
      borderRadius: "4px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
    },
    divCont: {
      display: "flex",
    },
    divDesc: {
      marginLeft: "20px",
    },
    imgCon: {
      marginTop: "20px",
    },
    btnClose: {
      backgroundColor: "#333",
      width: "50px",
    },
  },
}));
