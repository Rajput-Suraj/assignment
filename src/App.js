import "./App.css";
import LandingPage from "./pages/landing-page/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
            </Switch>
            <Route />
        </Router>
    );
}

export default App;
