import Header from "./components/header/Header";
import Programs from "./components/programs/Programs";
import Plans from "./components/plans/Plans";
import Reasons from "./components/reasons/Reasons";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Feedback from "./components/feedback/Feedback";
import Subscription from "./components/subscription/Subscription";


function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0 m-0">
        <Header />
        <Programs />
        <Reasons />
        <Plans />
        <Feedback />
        <Subscription />
      </div>
    </div>
  );
}

export default App;
