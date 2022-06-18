import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import LoginRoute from  './LoginRoute'
import HomeView from "./view/HomeView";
import LoginView from './view/LoginView'
import {history} from "./utils/history";
import BookView from "./view/BookView";
import Message from "./view/Message";
import Patient from "./view/Patient";
import Message_doc from "./view/Message_doc";
import Doctor from "./view/Doctor";
import Register from "./view/Register";
import Change from "./view/Change";
import Docorder from "./view/Docorder";
import ControlView from "./view/Control";
class BasicRoute extends React.Component{

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={Message} />
                    <PrivateRoute exact path="/message_d" component={Message_doc} />
                    <LoginRoute exact path="/login" component={LoginView} />
                    <Route exact path="/register" component={Register}/>
                    <PrivateRoute exact path="/bookDetails" component={BookView} />
                    <PrivateRoute exact path="/message" component={HomeView} />
                    <PrivateRoute exact path="/patient" component={Patient} />
                    <PrivateRoute exact path="/doctor" component={Doctor} />
                    <PrivateRoute exact path="/change" component={Change} />
                    <PrivateRoute exact path="/docord" component={Docorder} />
                    <PrivateRoute exact path="/control" component={ControlView} />
                    <Redirect from="/*" to="/" />
                </Switch>

            </Router>
        )
    }


}

export default BasicRoute;