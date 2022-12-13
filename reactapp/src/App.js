import './App.css';
import Header from './components/Header.js';
import TableContent from './components/TableContent.js';
import InputContent from './components/InputContent.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contents">
        <TableContent />
        <InputContent />
      </div>
    </div>
  );
};
export default App;
