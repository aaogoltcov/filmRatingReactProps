import logo from './logo.svg';
import './App.css';
import Star from './components/Star/Star';

function App() {
  const count = 3;

  return (
      <Star count={count} />
  );
}

export default App;
