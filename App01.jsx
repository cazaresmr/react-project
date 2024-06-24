import logo from "./logo.svg";
import "./App.css";
import Link from "./shared/Link";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>React: Intro</h1>
        <p>React is so cool!</p>
        <p>Looking forward to learning so much more about React.js</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <Link />
      </header>
    </div>
  );
}

export default App;
