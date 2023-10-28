import Header from "./laout/header/Header";
import Main from "./laout/main/Main";
import About from "./laout/about/About";
import Skills from "./laout/skills/Skills";
import Projects from "./laout/myprojects/Projects";
import Footer from "./laout/footer/Footer";
import Copyrigth from "./laout/footer/copyright/Copyright";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <Copyrigth/>
    </div>
  );
}

export default App;
