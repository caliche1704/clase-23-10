import React from 'react'
import ReactDOM from 'react-dom/client'
import { TercerComponente } from './TercerComponente';
// import { SegundoComponente } from './SegundoComponente';
// import {PrimerComponente} from "./PrimerComponente"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PrimerComponente /> */}
    {/* <SegundoComponente 
    titulo="clase React" 
    subtitulo="Vite" 
    fecha={2023} /> */}
    <TercerComponente value={0} />
  </React.StrictMode>,
);

// SegundoComponente.defaultProps ={
//   titulo: "clase react",
//   subtitulo: "vite 2023",
//   fecha: new Date().getFullYear(),
// }