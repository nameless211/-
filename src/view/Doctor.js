import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo_d";
import {SideBar_d} from "../components/SideBar_d";
import '../css/bookDetail.css'
import {withRouter} from "react-router-dom";


import {getBook, getPatient} from "../services/bookService";

import {Patientdetail} from "../components/Patientdetail";
import {history} from "../utils/history";


const { Header, Content, Footer } = Layout;
class Doctor extends React.Component{
    f0 = () => {
        history.push("/change");};

    constructor(props) {
        super(props);
        this.state = {books:null};
    }


    componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});
        let u=JSON.parse(user);
        const Id = u.userId;
        getPatient(Id, (data) => {this.setState({bookInfo: data})})
    }

    render(){
        return(
            <Layout className="layout">

                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBar_d />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <Patientdetail info={this.state.bookInfo} />
                            <button type="button" className="btn btn-primary" onClick={this.f0}>修改个人信息</button>
                            {/*<button type="button" className="btn btn-primary">Primary</button>*/}
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(Doctor);