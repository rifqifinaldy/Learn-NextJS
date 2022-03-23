import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#91836c',
    },
    secondary: {
      main: "#787874",
    },
    error : {
      main : "#ff7474"
    },
    warning : {
      main :'#f7a072'
    },
    info : {
      main : '#ece4c2'
    },
    success : {
      main : '#93c0a4'
    },
    dark : {
      main : '#131313'
    },
    light : {
      main : '#fefefe'
    }
  },
});
