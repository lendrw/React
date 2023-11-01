import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
    const nome = "Leandro";
    const data = {
        age: 22,
        job: "Programador"
    }
    return (
        <div>
            <h1>Olá, meu nome é {nome}</h1>
            <p>Eu tenho {data.age} anos e atuo como {data.job}</p>
            <p>{4+4}</p>
            <MyComponent/>
        </div>
    );
};

export default TemplateExpressions;