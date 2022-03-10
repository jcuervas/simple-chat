import React from 'react';
import './styles/App.css';
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./styles/theme";
import AppRoutes from "./router/routes";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <AppRoutes/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
