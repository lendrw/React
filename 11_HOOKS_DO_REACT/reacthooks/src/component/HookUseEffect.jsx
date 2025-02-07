import { useEffect, useState } from "react";

const HookUseEffect = () => {
    // 1 - useEffect, sem dependências
    useEffect(() => {
        console.log('Estou sendo executado');
    });

    const [number, setNumber] = useState(1);

    const changeNumber = () => {
        setNumber(number + 1);
    };

    // 2 - array de dependências vazio
    useEffect(() => {
        console.log('serei executado apenas uma vez');
    }, []);

    // 3 - item no array de dependências
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
      if (anotherNumber > 0) {
        console.log('Sou executado apenas quando o anotherNumber muda');
      }
    }, [anotherNumber]);

    // 4 - cleanup do useEffect
    useEffect(() => {
     // const timer = setTimeout(() => {
      //  console.log('Hello world');

       // setAnotherNumber(anotherNumber + 1);
     // }, 2000);

    //  return () => clearTimeout(timer);
    }, [anotherNumber]);
    
  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeNumber}>+1</button>
      <p>Another Number: {anotherNumber}</p>
      <button 
        onClick={() => setAnotherNumber(anotherNumber + 1)}>
          Mudar anotherNumber
      </button>
      <hr />
    </div>
  )
}

export default HookUseEffect;
