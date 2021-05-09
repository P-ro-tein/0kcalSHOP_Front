import './App.css';
import Category from "./Components/Category";
import Nsearch from "./Components/Nsearch";
import Nregist from "./Components/Nregist";
import Psearch from "./Components/Psearch";
import Pregist from "./Components/Pregist";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <header>
          <h1> 0Kal Shop</h1>
        </header>
        <Category />
        <br/>
        <hr/>
        <br/>
        <Route path="/nsearch" component={Nsearch} />
        <Route path="/nregist" component={Nregist} />
        <Route path="/psearch" component={Psearch} />
        <Route path="/pregist" component={Pregist} />

      </div>
    </BrowserRouter>
  );
}

export default App;
