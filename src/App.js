import './App.css';
import Button from './stories/components/Button/Button';
import Alerts from './stories/components/Alerts/Alerts';
import Navbar from './stories/components/Navbar/Navbar';
import Modal from './stories/components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Modal 
        isStatic={false}
        size="large"
        isCentered={false}
        title="Hello World"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      {/* <Button 
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
      /> */}
    </div>
  );
}

export default App;
