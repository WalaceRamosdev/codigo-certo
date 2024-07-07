import './App.css';
import { Header } from './sections/Header';
import { AboutMe } from './sections/AboutMe';
import { Tecnologies } from './sections/Tecnologies';
import { Contact } from './sections/Contact';
import { Objective } from './sections/Objective';
import { Projects } from './sections/Projects';
import { Rodape } from './sections/Rodape'

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Tecnologies/>
      <Objective/>
      <Projects/>
      <Contact/>
      <Rodape/>
    </div>
  );
}

export default App;
