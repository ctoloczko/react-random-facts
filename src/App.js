import "./App.css";
import FactsGenerator from "./FactsGenerator";

function App() {
  return (
    <>
      <div className="app">
        <FactsGenerator />

        <footer>
          <p class="text-center text-muted">
            🩶 This project was coded by Celina Toloczko-Mastalerz and is{" "}
            <a
              href="https://github.com/ctoloczko"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced.
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
