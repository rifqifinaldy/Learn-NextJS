import { makeStyles } from "@mui/styles";
import theme from "../../src/theme";

export const useStyles = makeStyles(() => ({
  wrapper: {
    position: "relative",
    textAlign: "center",
    height: "80vh",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: theme.palette.success.main,
    textShadow: "0.5px 1px #fefefe",
  },
}));
