import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css'
import News from "./Views/News";
import Home from "./Views/Home";
import Layout from "./components/Layout";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NewsDetails from "./components/NewsDetails";
import Students from "./Views/Students";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Router className="App">
            <Layout>
                <Switch>
                    <Route exact path='/'><Home/></Route>
                    <Route exact path='/news'><News/></Route>
                    <Route exact path='/news/:id'><NewsDetails/></Route>
                    <Route exact path='/students'><Students/></Route>
                    <Route path='/signUp'><SignUp/></Route>
                    <Route path='/signIn'><SignIn/> </Route>
                    <Route path='*'><NotFound/> </Route>
                </Switch>
            </Layout>
        </Router>

    );
}

export default App;
