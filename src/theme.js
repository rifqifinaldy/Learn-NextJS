import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
      main : '#f4f0eb'
    }
  },
});

export default theme
