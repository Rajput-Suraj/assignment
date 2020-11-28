import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import ProfilePage from "./pages/profile-page/ProfilePage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/profile" component={ProfilePage} />
            </Switch>
            <Route />
        </Router>
    );
}

export default App;
