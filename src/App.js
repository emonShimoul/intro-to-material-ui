
import './App.css';
import { Button, Rating } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Button variant='contained'>My First Button</Button>
      <Rating name="read-only" value={4} readOnly />
    </div>
  );
}

export default App;
