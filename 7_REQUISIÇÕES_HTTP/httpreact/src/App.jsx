import './App.css';

import { useState, useEffect } from "react";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgatando dados
  /*
    Resgatando dados com react:
    - Para trazer os dados, vamos ter que utilizar vários recursos;
    - Primeiramente ter um local para salvá-los (UseState);
    - Renderizar a chamada à API apenas uma vez (UseEffect);
    - Um meio de fazer a requisição assíncrona (Fetch API);
  */
  useEffect(() => {

    async function fetchData() {

      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []);   

  // 2 - adição de produtos
  /*
    Adicionanado dados:
    - Para adicionar um item, é necessário resgatar os dados do form com o useState;
    - Reunir eles em uma função após oo submit e enviar um request de POST para a API;
    - O processo é bem parecido com o de resgate mas agora os dados estão sendo enviados;
    - 
  */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    /*
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
      //transforma em String para ser adequado ao back-end
    });

    // 3 - carregamneto dinâmico

    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);
    */

    // 5 - refatorando post
    httpConfig(product, "POST");

    //reset dos inputs
    setName("");
    setPrice("");
  };

  // 8 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Caregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleRemove(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text" 
              value={name} 
              name="name" 
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number" 
              value={price} 
              name="price" 
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde"/>}
          {!loading && <input type="submit" value="Criar"/>}
        </form>
      </div>
    </div>
  );
}

export default App;
