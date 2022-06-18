import React from 'react';
import {Layout, Carousel, Button} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import '../css/bookDetail.css'
import {withRouter} from "react-router-dom";


import {getBook} from "../services/bookService";
import {BookDetail} from "../components/BookDetail";
import * as userService from "../services/userService";

const { Header, Content, Footer } = Layout;

class BookView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {books:null};
        // let u=this.state.bookInfo.
    }
    f1 = e => {
        e.preventDefault();
        let u=this.state.bookInfo.bookId;
        this.props.form.validateFields((err, u) => {
            if (!err) {
                console.log('Received values of form: ', u);
                userService.guahao(u);
            }
        });
    };

    componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});
        const query = this.props.location.search;
        console.log(this);
        console.log(localStorage);
        const arr = query.split('&');
        const bookId = arr[0].substr(4);
        getBook(bookId, (data) => {this.setState({bookInfo: data})})
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
                            <BookDetail info={this.state.bookInfo} />


                                <Button type="danger" onClick={this.f1} icon="pay-circle" size={"large"} style={{marginLeft:"15%"}}ghost>
                                    挂号
                                </Button>

                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(BookView);