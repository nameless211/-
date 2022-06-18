import React from 'react';
import {Layout, Carousel, List} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo_d";
import {SideBar_d} from "../components/SideBar_d";
import '../css/bookDetail.css'
import {withRouter} from "react-router-dom";


import {getonesorder, getPatient} from "../services/bookService";


import {history} from "../utils/history";
import {Orderinstance} from "../components/Orderinstance";
import {DorderList} from "../components/DorderList";


const { Header, Content, Footer } = Layout;
class Docorder extends React.Component{
    f0 = () => {
        history.push("/change");};

    constructor(props) {
        super(props);
        this.state = {books:[]};
        this.state = {bookInfo:1};
        //this.state = {books:null};
    }


    componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});
        let u=JSON.parse(user);
        const Id = u.userId;
        console.log(u);


    }

    render(){
        console.log(this.state.bookInfo);
        return(
            <Layout className="layout">

                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBar_d />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <DorderList/>
                            {/*<button type="button" className="btn btn-primary" onClick={this.f0}>修改个人信息</button>*/}
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

export default withRouter(Docorder);