import './App.css';
import Directory from './components/Directory/Directory';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Directory />
      </header>
    </div>
  );
}

export default App;
