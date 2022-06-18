import React from 'react';
import {Layout, Carousel, Button, List} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import '../css/bookDetail.css'
import {withRouter} from "react-router-dom";


import {getBook, getBooks, getonesorder, getPatient} from "../services/bookService";
import {BookDetail} from "../components/BookDetail";
import {Patientdetail} from "../components/Patientdetail";
import {Book} from "../components/Book";
import {Orderinstance} from "../components/Orderinstance";
import {history} from "../utils/history";

const { Header, Content, Footer } = Layout;

class Patient extends React.Component{
    f0 = () => {
        history.push("/change");};

    constructor(props) {
        super(props);


            this.state = {books:[]};

        //this.state = {books:null};
    }

    componentDidMount(){
        let user = localStorage.getItem("user");
        //console.log(user.userId);

        this.setState({user:user});
        let u=JSON.parse(user);
        //  const query = this.props.location.search;
        // const arr = query.split('&');
        // const bookId = arr[0].substr(4);
        const bookId=u.userId;
        //console.log(localStorage)
        getPatient(bookId, (data) => {this.setState({bookInfo: data})})


            const callback =  (data) => {
                this.setState({books:data});
            };

            getonesorder({"a":bookId}, callback);


    }

    render(){
        return(
            <Layout className="layout">

                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBar />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <Patientdetail info={this.state.bookInfo}/>
                            <h1>我的挂号订单：</h1>
                            <List
                                grid={{gutter: 10, column: 1}}
                                dataSource={this.state.books}
                                pagination={{
                                    onChange: page => {
                                        console.log(page);
                                    },
                                    pageSize: 8,

                                }}
                                renderItem={item => (
                                    <List.Item>
                                        <Orderinstance info={item} />
                                    </List.Item>
                                )}
                            />

                            <button type="button" className="btn btn-primary" onClick={this.f0}>修改个人信息</button>
                            <Button>查询诊疗记录</Button>
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(Patient);