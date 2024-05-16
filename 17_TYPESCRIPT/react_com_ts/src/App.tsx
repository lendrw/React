import React, { createContext } from 'react';
import './App.css'

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 10 - utilizando o contexto
import Context from './components/Context';

// 5 - desetruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';

// 8 - type
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - variáveis 
  const name: string = "Leandro";
  const age: number = 23;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // 8 - type
  const myText: textOrNull = "Tem texto aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "opa";

  const testandoFixed: fixed = "Isso";

  // 9 - context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name="Segundo"/>
        <Destructuring 
          title="Título"
          content="Conteúdo"
          commentsQty={10}
          tags={['ts', 'js']}
          category={Category.TS}
        />
          <State/>
          {myText && 
            <p>Tem texto na variável</p>
          }
          <Context/>
      </div>
    </AppContext.Provider>
  )
}

export default App
