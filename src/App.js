import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/main";
import PageOne from "./pages/home";
import signup from "./pages/signup";
import Login from "./pages/Login";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home">
                    <PageOne />
                </Route>
               
                <Route path="/signup">
                    <signup />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
