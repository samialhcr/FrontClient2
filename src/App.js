import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import Accueil from "./Components/Accueil/Accueil";
import { Provider } from "react-redux";
import store from "./store";
import ListeComptes from "./Components/ListeComptes/ListeComptes";
import ListeOperations from "./Components/ListeOperations/ListeOperations";
import MonCompte from "./Components/MonCompte/MonCompte";
import ListeCarteBancaire from "./Components/ListeCarteBancaires/ListeCarteBancaire";
import Transactions from "./Components/Transactions/Transactions";
import ListeBeneficiares from "./Components/ListeBeneficiares/ListeBeneficiares";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/Accueil" component={Accueil} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Comptes" component={ListeComptes} />
        <Route exact path="/Operations" component={ListeOperations} />
        <Route exact path="/CartesBancaires" component={ListeCarteBancaire} />
        <Route exact path="/MonCompte" component={MonCompte} />
        <Route exact path="/Transactions" component={Transactions} />
        <Route exact path="/Beneficiares" component={ListeBeneficiares} />
      </Router>
    </Provider>
  );
}
export default App;
