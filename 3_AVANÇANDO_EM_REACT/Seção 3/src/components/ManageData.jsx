import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(15);

  return (
    <div>
        {/* As variáveis não mudam em tempo real */}
        <p>Valor = {someData}</p>
        <button onClick={() => (someData=14)}>Mudar variável</button>
        {/* Os States conseguem */}
        <p>Valor = {number}</p>
        <button onClick={() => setNumber(300)}>Mudar state</button>
    </div>
  )
}

export default ManageData