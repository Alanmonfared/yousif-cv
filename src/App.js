import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ARBETSLIVSERFARENHET from "./components/ARBETSLIVSERFARENHET";
import FÄRDIGHETER from "./components/FÄRDIGHETER";
import Språkkunskaper from "./components/Språkkunskaper";
import UTBILDNINGAR from "./components/UTBILDNINGAR";
import Kontakt from "./components/Kontakt";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route
          exact
          path="/ARBETSLIVSERFARENHET"
          component={ARBETSLIVSERFARENHET}
        />
        <Route exact path="/FÄRDIGHETER" component={FÄRDIGHETER} />
        <Route exact path="/Språkkunskaper" component={Språkkunskaper} />
        <Route exact path="/UTBILDNINGAR" component={UTBILDNINGAR} />
        <Route exact path="/Kontakt" component={Kontakt} />
      </Switch>
    </Router>
  );
}

export default App;
