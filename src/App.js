import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import './styles/index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

