import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import NoteInput from './Components/NoteInput';

function App() {
  return (
    <div className="container">
      <Header />
      <NoteInput />
      <Content />
    </div>
  );
}

export default App;
