import './App.css';
import Button from './stories/components/Button/Button';

function App() {
  return (
    <div className="App">

      <Button 
        size="large"
        type="outline-primary"
        disabled={true}
        label="Hello"
      />

    </div>
  );
}

export default App;
