import './App.css';
import Button from './stories/components/Button/Button';
import Modal from './stories/components/Modal/Modal';
import Alerts from './stories/components/Alerts/Alerts';
import Navbar from './stories/components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Modal />
      <Button 
        size="large"
        type="outline-primary"
        disabled={true}
        label="Hello"/>
      <Navbar/>
      <Alerts 
        message="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        subMessage="Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        type="primary"
        title="Well Done!"
        hasClose={true}
      />
    </div>
  );
}

export default App;
