const Challenge = () => {
    const a = 2;
    const b = 3;
    const soma = () => {
        let s = a + b;
        console.log('A soma de A + B é:', s);
    }
    return (
        <div>
            <p>O valor de A é {a}</p>
            <p>O valor de B é {b}</p>
            <div>
                <button onClick={soma}>Clique aqui</button>
            </div>
        </div>
    )
};

export default Challenge;