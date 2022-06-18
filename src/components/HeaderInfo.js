import React from 'react';
import { Row, Col } from 'antd';
import '../css/index.css'

import {UserAvatar} from "./UserAvatar";
import Pic from "../assets/PATIENTPAGE.png"

export class HeaderInfo extends React.Component {

    render(){

        const user = JSON.parse(localStorage.getItem("user"));


        return(
            <div id="header">
                <div id="header-content">
                    <Row>
                        <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>

                            <a id="logo" href={"/"}>
                                <React.Fragment>
                                    {/*<img src={Pic} style={{ height:45 }}></img>*/}
                                </React.Fragment>
                                {/*<img alt="logo"  className="logo" src={logo} style={{ height:45 }}/>*/}
                                {/*<img alt="Book Store"  className="logo-font" src={logoFont} style={{ height:40 }}/>*/}
                            </a>

                        </Col>
                        <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
                            {user != null ? <UserAvatar user={user}/> : null}
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}