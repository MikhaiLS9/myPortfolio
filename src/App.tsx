import './App.css';
import Header from './laout/header/Header';
import Main from './laout/main/Main';
import About from './laout/about/About';
import Skills from './laout/Skills/Skills';
import Projects from './laout/myprojects/Projects';
import Contact from './laout/contact/Contact';

function App() {
    return (
        <div className="App">
        <Header />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
        </div>
    );
}

export default App;
