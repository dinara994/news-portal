import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css'
import News from "./Views/News";
import Home from "./Views/Home";
import Layout from "./components/Layout";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NewsDetails from "./components/NewsDetails";
import Modal from "./components/Modal";

function App() {
    return (
        <Router className="App">
            <Layout>

                <Route exact path='/'><Home /></Route>
                <Route exact path='/news'><News /></Route>
                <Route exact path='/news/:id'><NewsDetails /></Route>
                <Route exact path='/modal'><Modal /></Route>
                <Route path='/signUp'><SignUp /></Route>
                <Route path='/signIn'><SignIn /> </Route>

            </Layout>
        </Router>

    );
}

export default App;
