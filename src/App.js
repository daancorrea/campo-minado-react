import { useState } from "react";
import { Grid } from "./components/Grid";

import { Menu } from "./components/Menu";
export function App() {
  const [configApp, setConfigApp] = useState({abelhas:0, linhas:0, colunas:0})
  console.log(configApp)
  
  return (
    <div className="App">
      <Menu configApp={setConfigApp} />
      <Grid bees={configApp.abelhas} rows={configApp.linhas} cols={configApp.colunas} />
    </div>
  );
}
