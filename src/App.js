import Header from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Programs from "./components/programs/Programs";

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0 m-0">
        <Header />
        <Programs />
      </div>

    </div>
  );
}

export default App;
