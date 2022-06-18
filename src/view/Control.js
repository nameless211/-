import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import '../css/home.css'
import {withRouter} from "react-router-dom";
import {SearchBar} from "../components/SearchBar";
import {BookList} from "../components/BookList";
import {Bar1} from "../components/Bar1";
import {DorderList} from "../components/DorderList";
import {ControlList} from "../components/Controllist";

const { Header, Content, Footer } = Layout;

class ControlView extends React.Component{

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});
    }

    render(){
        return(
            <Layout className="layout">

                <Header>
                    <HeaderInfo  />

                </Header>

                <Layout>
                    {/*<Bar1/>*/}

                    <Content style={{ padding: '0 50px' }}>

                        <div className="home-content" title={"管理员页面，您可以在此管理网站人员和挂号信息"}>
                            <SearchBar />
                            管理员页面，用于管理人员信息和挂号信息

                            <ControlList/>
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(ControlView);