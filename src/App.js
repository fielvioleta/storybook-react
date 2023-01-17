import './App.css';
import Alerts from './stories/components/Alerts/Alerts';

function App() {
  return (
    <div className="App">
      <Alerts 
        message="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        subMessage="Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        type="primary"
        title="Well Done!"
        hasClose={true}
      />
{/*       
      <Alerts 
        message="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        subMessage="Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        type="secondary"
        title="Well Done!"
        hasClose={true}
      />
      
      <Alerts 
        message="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        subMessage="Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        type="success"
        title="Well Done!"
        hasClose={true}
      />
      
      <Alerts 
        message="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        subMessage="Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        type="danger"
        title="Well Done!"
        hasClose={true}
      />
      
      <Alerts 
        message="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        subMessage="Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        type="warning"
        title="Well Done!"
        hasClose={true}
      />
      
      <Alerts 
        message="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        subMessage="Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        type="info"
        title="Well Done!"
        hasClose={true}
      />
      
      <Alerts 
        message="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        subMessage="Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        type="light"
        title="Well Done!"
        hasClose={true}
      />
      
      <Alerts 
        message="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        subMessage="Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
        type="dark"
        title="Well Done!"
        hasClose={true}
      /> */}
    </div>
  );
}

export default App;
