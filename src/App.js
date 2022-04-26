import NavBar from './components/NavBar';
import Main from './components/Main'
import {Switch, Redirect, Route} from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'
import New from './components/New'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <Main></Main> */}

      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>

        <Route path="/login">
            <Login></Login>
        </Route>

        <Route path="/new">
            <New></New>
        </Route>

        <Redirect from="/" exact to="/home"></Redirect>

        <Route>
          <PageNotFound></PageNotFound>
        </Route>

      </Switch>
    </>
  );
}

export default App;
