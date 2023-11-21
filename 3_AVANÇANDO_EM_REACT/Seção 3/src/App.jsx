import { useState } from 'react';
import './App.css';

import City from "./assets/img2.jpeg";
import { CarDetails } from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "João";
  const cars = [
    {id: 1, brand: "F", color: "blue", newCar: true, km: 0},
    {id: 2, brand: "F", color: "blue", newCar: false, km: 2340},
    {id: 3, brand: "F", color: "blue", newCar: false, km: 11110}
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    {id: 1, nome: 'bruno', idade: 17, profissao: 'carpinteiro'},
    {id: 2, nome: 'leo', idade: 25, profissao: 'professor'},
    {id: 3, nome: 'julia', idade: 29, profissao: 'dentista'},
  ];

  return (
    <>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem de uma cidade." />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade cyberpunk" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={name}/>
      {/* destructuring */}
      <CarDetails brand="VW" km={10000} color="azul"/>
      {/* reaproveitando props */}
      <CarDetails brand="ford" km={20000} color="preto" newCar={true}/>
      <CarDetails brand="Fiat" km={70000} color="branco" newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}
        />
      ))}
      <Fragment/>
      {/* prop children */}
      <Container>
        <p>Conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* desafio 4 */}
      {pessoas.map((pessoa) => (
        <UserDetails
        key={pessoa.id}
        nome={pessoa.nome}
        idade={pessoa.idade}
        profissao={pessoa.profissao}
        />
      ))}
    </>
  );
}

export default App
