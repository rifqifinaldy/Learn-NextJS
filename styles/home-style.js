import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
    textAlign: "center",
    height: "90vh",
    justifyContent: "center",
    alignItems:"center",
  },
  welcome: {
    position: "absolute",
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: "#93c0a4",
    textShadow: '0.5px 1px #fefefe',
  },
}));
