import './App.css';
import { useState } from 'react';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 10;
  const [name] = useState("Leandro");

  const redTitle = true;

  return (
    <>
      <div>
        {/* CSS global */}
        <h1>React com CSS</h1>
        {/* CSS de componente */}
        <MyComponent/>
        <p>Parágrafo do app</p>
        {/* Inline CSS */}
        <p style={{color: "blue", padding: "20px", borderTop: "2px solid red"}}>
          Este elemento foi estilizado de forma inline
        </p>
        {/* CSS Inline dinâmico */}
        <h2 style={n < 10 ? {color:"purple"} : {color:"pink"}}>CSS dinâmico</h2>
        <h2 
          style={
            name === "Leandro" 
            ? {color:"green", backgroundColor: "#000"}
             : null
             }
          >
          Teste nome
        </h2>
        {/* Classe dinâmica */}
        <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      </div>
      {/* CSS Modules */}
      <Title/>
    </>
  )
}

export default App
