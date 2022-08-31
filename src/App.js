import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/home.css";
import "./styles/main.css";

import Home from "./pages/Home";

function App() {
    
    return(
        <div className="page">
            <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home} />
              </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
