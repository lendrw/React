import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name] = useState("Leo");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso.</p>}
        <h1>If ternário</h1>
        {name === "Leo" ? (
            <div>
                <p>O nome é Leo</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  );
};

export default ConditionalRender;