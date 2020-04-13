import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
// const [cookies] = useCookies(['isLogged']);

const checkAuth = () => {
    if (cookie.parse('loggedIn=true')) {
        return true
    }
    return false
}

// Write ProtectedRoute function here
const ProtectedRoute = ({ ...theRest }) => {
    if (checkAuth()) {
        return <Route {...theRest} />
    }
    else {
        return <Redirect to={{ pathname: '/login' }} />
    }
}

const Router = () => {

    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute path="/car/:id" component={Car} />
        </Switch>
    );
};

export default Router;