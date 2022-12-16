import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./routes";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
