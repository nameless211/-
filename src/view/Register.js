import React from 'react';

import {withRouter} from "react-router-dom";
import WrappedrForm from "../components/RegisterForm";


class Register extends React.Component{


    render(){
        return(
            <div className="login-page2">
                <div className="login-container">
                    <div className="login-box">
                        <h1 className="page-title">Register</h1>
                        <div className="login-content">
                            <WrappedrForm />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(Register);