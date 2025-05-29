import './App.css';
import Dictionary from './Dictionary'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1>Dictionary App</h1>
      </div>
      <main>
        <Dictionary defaultKeyword="hello"/>
      </main>
      <footer className="App-footer">
        <small>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/ana-daniela-garc%C3%ADa-lara-001336216/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ana Daniela Garcia Lara
          </a>{" "}
          and is
          <a
            href="https://github.com/AnaDany98/dictionary-project"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and
          <a
            href="https://eclectic-syrniki-f10d7b.netlify.app//"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            hosted on Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}


