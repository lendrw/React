import './App.css';
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from './components/TemplateExpression';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <>
    {/*Um comentário, ele não está disponível para o usuário*/}
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
    </>
  )
}

export default App
